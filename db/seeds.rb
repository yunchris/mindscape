# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.execute("TRUNCATE TABLE users RESTART IDENTITY")

ApplicationRecord.transaction do
  User.destroy_all

  User.create(first_name: 'Guest', last_name: 'User', email: 'guest@guest.com', password: 'guestguest')
end
