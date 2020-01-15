class CreateScapes < ActiveRecord::Migration[5.2]
  def change
    create_table :scapes do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :daily_price, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false

      t.timestamps
    end
  end
end
