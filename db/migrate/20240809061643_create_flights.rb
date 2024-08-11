class CreateFlights < ActiveRecord::Migration[7.1]
  def change
    create_table :flights do |t|
      t.datetime :date
      t.time :duration
      t.references :departure_airport, foreign_key: { to_table: :airports }
      t.references :arrival_airport, foreign_key: { to_table: :airports }
      t.timestamps
    end
  end
end
