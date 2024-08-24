class FlightBookMailer < ApplicationMailer
  default from: 'flightbooker@example.com'

  # Method name needs to be in snake casing for it to work
  def flight_book_purchase_email
    @user = params[:user]
    @url  = 'http://127.0.0.1:3000'
    mail(to: @user.email,
        subject: 'Thanks you for purchasing.')
  end
end
