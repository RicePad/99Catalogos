1.times do | user |
	user = User.create(email: 'admin@example.com', password: '123456', password_confirmation: '123456')
	user.save
end

puts '1 user has beeen created'

 5.times do |pin|
	@pin = Pin.create(title: "Awesome Pin", description: "greatest pin", thumb_image: "https://s3-us-west-1.amazonaws.com/mitiendashop/uploads/pin/main_image/79/Rollback.png", main_image: "https://s3-us-west-1.amazonaws.com/mitiendashop/uploads/pin/main_image/79/Rollback.png", user_id: "1")
 end

puts "10 pins created!"