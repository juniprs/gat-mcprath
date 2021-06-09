# require 'api_constraints'

Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resource :cart, only: [:create, :show]
    resources :cart_items, only: [:create, :update, :destroy]
  end
end
