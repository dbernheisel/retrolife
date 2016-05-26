Rails.application.routes.draw do
  namespace :api do
    resources :companies
    resources :platforms
    resources :games
  end
end
