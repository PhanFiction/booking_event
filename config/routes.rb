Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  get '/check_authentication', to: 'sessions#check'

  # resources :users do 
  #   resources :flights
  # end

  resources :flights, only: [:index]
  
  get 'flights/search-flights', to: 'flights#search_flights'
  get 'flights/flight-offers', to: 'flights#flight_offers'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  root 'homepage#index'
end
