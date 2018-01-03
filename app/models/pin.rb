class Pin < ApplicationRecord
	belongs_to :user

	# Uncomment when deploying to production
	
	mount_uploader :thumb_image, PinUploader
	mount_uploader :main_image, PinUploader
	
end
