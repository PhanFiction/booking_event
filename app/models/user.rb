class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :omniauthable, omniauth_providers: [:google_oauth2]

  has_many :saved_flights, foreign_key: "user_id", class_name: "Flight"

  def self.from_omniauth(auth)
    data = auth.info
    find_or_create_by(provider: auth.provider, uid: auth.uid) do |user|
      p "user #{user}"
      user.email = data.email
      user.password = Devise.friendly_token[0, 20]
      user.username = data.username ? data.username : data.first_name + data.last_name # if no username, make username with first and last name
      user.first_name = data.first_name
      user.last_name = data.last_name
      # If you are using confirmable and the provider(s) you use validate emails,
      # uncomment the line below to skip the confirmation emails.
      user.skip_confirmation!
    end
  end
end
