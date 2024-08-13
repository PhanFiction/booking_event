Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  get '/check_authentication', to: 'sessions#check'
  delete '/logout', to: 'sessions#destroy'

  namespace :api do
    get 'bookings/index'
    post 'bookings/create'
  end
  
  resources :airports
  resources :flights, only: [:index]

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  root 'homepage#index'
  
  # Below is a catch-all route with get '/*path' that will direct any other request that doesn’t match the existing routes to the index action of # the homepage controller. The front-end routing will handle requests unrelated to creating, reading, or deleting
  # get '/*path' is used to catch all GET requests and route them to a specific controller action which is homepage#index.
  get '/*path' => 'homepage#index'
end
