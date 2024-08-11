class AddForeignKeysToAirportsAndFlights < ActiveRecord::Migration[7.1]
  # def change
    #add_reference :airports, :departure_airport, null: false, foreign_key: { to_table: :flights }
    #add_reference :airports, :arrival_airport, null: false, foreign_key: { to_table: :flights }

    #add_reference :flights, :departure_airport, null: false, foreign_key: { to_table: :airports }
    #add_reference :flights, :arrival_airport, null: false, foreign_key: { to_table: :airports }
  # end
end
