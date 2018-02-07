1.times do | user |
	user = User.create(email: 'admin@example.com', password: '123456', password_confirmation: '123456')
	user.save
end

puts '1 user has beeen created'

 