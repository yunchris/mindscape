Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
  end
  
  root to: 'static_pages#root'
end
