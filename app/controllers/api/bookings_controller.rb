class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.where(passenger_id: current_user.id)
    p "bookings is #{bookings}"
    render json: bookings
  end

  def create
    flight_id = params[:flight_id]
    passenger_id = current_user.id

    found_flight = Flight.find_by(id: flight_id)

    if found_flight.bookings.exists?
      found_flight.bookings.find_by(passenger_id: passenger_id).destroy
    else
      found_flight.bookings.create(passenger_id: passenger_id)
    end

    render json: found_flight
  end
end
