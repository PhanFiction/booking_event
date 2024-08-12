class Flight < ApplicationRecord
  has_many :bookings, foreign_key: :flight_id
  has_many :passengers, through: :bookings, source: :flights # returns a list of passengers attending the flight
  belongs_to :arrival_airport, foreign_key: "arrival_airport_id", class_name: "Airport"
  belongs_to :departure_airport, foreign_key: "departure_airport_id", class_name: "Airport"

  def as_json(options={})
    super({except: [:created_at, :arrival_airport_id, :departure_airport_id]}).merge({
      'departure_airport': {
        airport_code: departure_airport.airport_code,
        departure_airport_id: departure_airport.id,
      },
      'arrival_airport': {
        airport_code: arrival_airport.airport_code,
        arrival_airport_id: arrival_airport.id
      }
    })
  end
end
