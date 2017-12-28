Rails.application.routes.draw do
  	devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'registration'}
	root to: 'pins#index'
	resources :pins

	namespace :api do
		namespace :v1 do
			resources :pins	
		end
	end

end

