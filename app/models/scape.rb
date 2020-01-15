class Scape < ApplicationRecord
  validates :name, :category, :lat, :lng, :daily_price, :creator_id, presence: true

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

end
