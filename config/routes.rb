# frozen_string_literal: true

Rails.application.routes.draw do
  root to: redirect('/app/my-boards')

  get '/app', to: redirect('/app/my-boards')
  get '/app/', to: redirect('/app/my-boards')
  get '/app/*other', to: 'workspace#index'

  resources :boards, except: [:edit, :new] do
    resources :columns, only: :create
  end

  resources :columns, only: [:update, :destroy]
  resources :columns, only: [] do
    resources :tasks, only: :create
  end
end

