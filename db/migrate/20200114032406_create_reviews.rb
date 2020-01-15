class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body
      t.integer :user_id, null: false
      t.integer :scape_id, null: false

      t.timestamps
    end

    add_index :reviews, :scape_id, unique: true
    add_index :reviews, :user_id, unique: true
  end
end
