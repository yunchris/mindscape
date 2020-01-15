class AddIndexesToScapes < ActiveRecord::Migration[5.2]
  def change
    add_index :scapes, :name
    add_index :scapes, :creator_id
  end
end
