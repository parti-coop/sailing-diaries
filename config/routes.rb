Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "pages#home"
  get 'dashboard', to: 'pages#dashboard'
  get 'refresh_dashboard', to: 'pages#refresh_dashboard'
  resources :items
end
