Rails.application.routes.draw do
  namespace :api do
    resources :publishers
    resources :developers
    resources :manufacturers
  end
end
