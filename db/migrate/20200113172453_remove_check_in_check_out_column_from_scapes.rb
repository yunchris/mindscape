class RemoveCheckInCheckOutColumnFromScapes < ActiveRecord::Migration[5.2]
  def change
    remove_column :scapes, :check_in
    remove_column :scapes, :check_out
    
    add_column :scapes, :creator_id, :integer, null: false
    add_column :scapes, :picture_url, :string
  end
end
