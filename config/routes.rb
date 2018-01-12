Rails.application.routes.draw do

  	devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'registration'}
	root to: 'demo#index'
	get 'allpins', to: 'demo#demo_pins'
	resources :pins do
		collection do
			get :autocomplete
		end
	end
  	get 'createpin', to: 'pins#new', as: 'create_pin'

	namespace :api do
		namespace :v1 do
			resources :pins	
		end
	end

end

