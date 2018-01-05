class Pin < ApplicationRecord
	belongs_to :user

	validates_presence_of :title, :description, :thumb_image, :main_image


	# Uncomment when deploying to production
	
	# mount_uploader :thumb_image, PinUploader
	# mount_uploader :main_image, PinUploader
	
end
