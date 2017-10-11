# frozen_string_literal: true

Rails.application.routes.draw do
  root 'workspace#index'
  resources :boards, only: [:index, :create, :show] do
    resources :columns, only: :create
  end

  resources :columns, only: [] do
    resources :tasks, only: :create
  end
end

