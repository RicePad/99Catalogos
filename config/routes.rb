Rails.application.routes.draw do
	root to: 'pins#index'
	resources :pins

	namespace :api do
		namespace :v1 do
			resources :pins	
		end
	end

end

