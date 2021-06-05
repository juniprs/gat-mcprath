# require 'api_constraints'

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :user

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
  end

  root 'static_pages#root'
end
