class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.references :passenger, foreign_key: { to_table: :users, column: :passenger_id }
      t.integer :flight_id, null: false
      t.timestamps
    end
    add_foreign_key :bookings, :flights, column: :flight_id
  end
end
