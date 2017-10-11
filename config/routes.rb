# frozen_string_literal: true

Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :boards, only: [:index, :create, :show] do
    resources :columns, only: :create
  end
  resources :columns, only: [] do
    resources :tasks, only: :create
  end
end

