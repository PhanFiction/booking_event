class SessionsController < ApplicationController
  def check
    if user_signed_in?
      render json: { authenticated: true, user: current_user }
    else
      render json: { authenticated: false }
    end
  end
end