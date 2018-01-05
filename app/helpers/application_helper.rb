module ApplicationHelper
	def login_helper
		if current_user.is_a?(User)
			 # (link_to "Log out", destroy_user_session_path, method: :delete, class: "btn btn-danger")
		else
			(link_to "Sign Up", new_user_registration_path, class: "btn btn-danger") +

			 " | ".html_safe + (link_to "Log In", new_user_session_path, class: 'btn btn-primary'
				)
		end
	end
end
