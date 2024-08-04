require 'amadeus'

$amadeus = Amadeus::Client.new({
  client_id: ENV['AMADEUS_CLIENT_ID'],
  client_secret: ENV['AMADEUS_CLIENT_SECRET']
})