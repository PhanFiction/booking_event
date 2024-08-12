require 'rest-client'

class FlightsController < ApplicationController
  # Search city or airport with given keyword
  def index
    departure_airport_id = params[:departure_airport_id]
    flights = Flight.where(departure_airport_id: departure_airport_id).includes(:arrival_airport, :departure_airport)

    render :json => flights
  end

  private

  def flight_params
    params.require(:flight).permit(:airport_code)
  end
end
