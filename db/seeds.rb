# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Airport.create(airport_code: "SSA")
Airport.create(airport_code: "GRU")
Airport.create(airport_code: "NAT")
Airport.create(airport_code: "SDU")
Airport.create(airport_code: "REC")
Airport.create(airport_code: "SFO")

User.create(
  email: 'user1@example.com',
  username: 'user1',
  first_name: 'John',
  last_name: 'Doe',
  password: 'password123',
  confirmed_at: Time.now
)

Flight.create(departure_airport_id: 2, arrival_airport_id: 1, date: "2024-09-01 01:00:00 UTC",  duration: '2:30')
Flight.create(departure_airport_id: 3, arrival_airport_id: 5, date: "2024-10-26 06:00:00 UTC",  duration: '1:20')
Flight.create(departure_airport_id: 5, arrival_airport_id: 2, date: "2024-11-21 12:00:00 UTC",  duration: '3:00')
Flight.create(departure_airport_id: 4, arrival_airport_id: 2, date: "2024-12-22 23:00:00 UTC",  duration: '1:00')
Flight.create(departure_airport_id: 4, arrival_airport_id: 3, date: "2024-12-22 23:00:00 UTC",  duration: '1:00')
Flight.create(departure_airport_id: 4, arrival_airport_id: 5, date: "2024-12-22 23:00:00 UTC",  duration: '4:00')
Flight.create(departure_airport_id: 5, arrival_airport_id: 1, date: "2024-10-22 12:00:00 UTC",  duration: '3:00')