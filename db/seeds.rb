10.times do |pin|
	pin = Pin.create(title: "Awesome Pin", description: "greatest pin", thumb_image: "http://via.placeholder.com/350x350", main_image: "http://via.placeholder.com/600x400")
end

puts "10 pins created!"