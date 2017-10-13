# frozen_string_literal: true

Rails.application.routes.draw do
  root to: redirect('/app/my-boards')

  get '/app', to: redirect('/app/my-boards')
  get '/app/', to: redirect('/app/my-boards')
  get '/app/*other', to: 'workspace#index'

  resources :boards, only: [:index, :create, :show] do
    resources :columns, only: :create
  end

  resources :columns, only: [] do
    resources :tasks, only: :create
  end
end

