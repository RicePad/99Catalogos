1.times do | user |
	user = User.create(email: 'admin@example.com', password: '123456', password_confirmation: '123456')
	user.save
end

puts '1 user has beeen created'

 1.times do |pin|
	@pin = Pin.create!(title: "Awesome Pin", description: "greatest pin", thumb_image: "http://via.placeholder.com/300x250", main_image: "http://via.placeholder.com/600x300", user_id: "1")
 end
 
 5.times do |pin|
	@pin = Pin.create!(title: "Awesome Pin", description: "greatest pin", thumb_image: "http://via.placeholder.com/5000x250", main_image: "http://via.placeholder.com/600x300", user_id: "1")
 end
 6.times do |pin|
	@pin = Pin.create!(title: "Awesome Pin", description: "greatest pin", thumb_image: "http://via.placeholder.com/200x250", main_image: "http://via.placeholder.com/600x300", user_id: "1")
 end

puts "15 pins created!"