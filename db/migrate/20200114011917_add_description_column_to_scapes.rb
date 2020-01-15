class AddDescriptionColumnToScapes < ActiveRecord::Migration[5.2]
  def change
    add_column :scapes, :description, :text, null: false
  end
end
