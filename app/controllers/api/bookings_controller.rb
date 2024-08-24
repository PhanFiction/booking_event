class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.where(passenger_id: current_user.id)
    render json: bookings
  end

  def create
    @user = User.find(current_user.id)

    found_flight = Flight.find(params[:flight_id])

    if found_flight.bookings.exists?(passenger_id: current_user.id)
      found_flight.bookings.find_by(passenger_id: current_user.id).destroy
    else
      found_flight.bookings.create(passenger_id: current_user.id)
      FlightBookMailer.with(user: @user).flight_book_purchase_email.deliver_later # send email to user
    end

    render json: found_flight
  end
end
