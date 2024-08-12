class AirportsController < ApplicationController
  def index
    airport_code = params[:airport_code]
    airports = Airport.search_by_airport_code(airport_code)

    render :json => airports
  end

  private

  def airport_params
    params.require(:airport).permit(:airport_code)
  end
end
