class Pin < ApplicationRecord
	belongs_to :user
	validates_presence_of :title, :description
  	searchkick word_start: [:title, :description]

	# Uncomment when deploying to production
	
	mount_uploader :thumb_image, PinUploader
	mount_uploader :main_image, PinUploader


	def search_data
		{
			title: title,
			description: description
		}
	end
	
end
