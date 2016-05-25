Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :publishers
    jsonapi_resources :developers
    jsonapi_resources :manufacturers
  end
end
