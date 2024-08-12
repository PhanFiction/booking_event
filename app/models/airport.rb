class Airport < ApplicationRecord
  has_many :flights
  scope :search_by_airport_code, ->(query) { where("airport_code LIKE ?", "#{query}%") }
end
