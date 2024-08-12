class Booking < ApplicationRecord
  belongs_to :passengers, class_name: "User", foreign_key: :passenger_id
  belongs_to :flights, class_name: 'Flight', foreign_key: :flight_id

  def as_json(options={})
    super({except: [:created_at]}).merge({
      "flight": {
        'departure_airport': {
          airport_code: flights.departure_airport.airport_code,
          departure_airport_id: flights.departure_airport.id,
        },
        'arrival_airport': {
          airport_code: flights.arrival_airport.airport_code,
          arrival_airport_id: flights.arrival_airport.id
        },
        date: flights.date,
        duration: flights.duration,
      }
    })
  end
end
