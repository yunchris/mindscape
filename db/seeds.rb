# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#   user3 = User.find_by(username: 'helen')
#   Post.create(title: 'sdf', user_id: user3.id)

ActiveRecord::Base.connection.execute("TRUNCATE TABLE users, scapes RESTART IDENTITY")

ApplicationRecord.transaction do
  User.destroy_all
  Scape.destroy_all

  User.create(
    first_name: 'God',
    last_name: 'the Creator',
    email: 'god@god.com',
    password: 'godgod'
  )

  User.create(
    first_name: 'Guest', 
    last_name: 'User', 
    email: 'guest@guest.com', 
    password: 'guestguest'
  )

  Scape.create(
    name: 'Enter the World of Tron',
    category: 'scifi',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    daily_price: 320,
    creator_id: 1,
    lat:37.799509, 
    lng: -122.401341,
    picture_url: 'https://ak8.picdn.net/shutterstock/videos/1009311068/thumb/1.jpg'
  )

  Scape.create(
    name: 'Dystopian Future',
    category: 'scifi',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
    daily_price: 520,
    creator_id: 1,
    lat: 37.786223, 
    lng: -122.416324,
    picture_url: 'http://s1.picswalls.com/wallpapers/2015/10/11/sci-fi-backgrounds_01002056_283.jpg'
  )

  Scape.create(
    name: 'Your Love - Dating Sim',
    category: 'romance',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 420,
    creator_id: 1,
    lat: 37.422255, 
    lng: -122.084036,
    picture_url: 'https://cache.desktopnexus.com/thumbseg/2416/2416457-bigthumbnail.jpg'
  )

  Scape.create(
    name: 'Painted Romance',
    category: 'romance',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 1220,
    creator_id: 1,
    lat: 37.775167, 
    lng: -122.419405,
    picture_url: 'https://rukminim1.flixcart.com/image/832/832/j1gqp3k0/poster/m/n/u/medium-andmovpos2488-ananyadesigns-movie-the-painted-veil-original-imaegwpbmz5phqmc.jpeg?q=70'
  )

  Scape.create(
    name: 'Monster Slayer',
    category: 'fantasy',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 820,
    creator_id: 1,
    lat: 37.788708, 
    lng: -122.396328,
    picture_url: 'http://www.desktopimages.org/pictures/2013/0614/1/wrath-of-the-titans-fantasy-background-218338.jpg'
  )

  Scape.create(
    name: 'Final Fantasy',
    category: 'fantasy',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 820,
    creator_id: 1,
    lat: 37.872086, 
    lng: -122.258572,
    picture_url: 'https://c4.wallpaperflare.com/wallpaper/514/825/287/final-fantasy-short-hair-girl-blue-background-final-fantasy-movie-wallpaper-preview.jpg'
  )

  Scape.create(
    name: 'Noir Mystery',
    category: 'past',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 490,
    creator_id: 1,
    lat: 37.480835, 
    lng: -122.153045,
    picture_url: 'http://www.zekeshore.com/blog/wp-content/uploads/2009/01/film_noir.jpg'
  )

  Scape.create(
    name: 'The Age of Dinosaurs',
    category: 'past',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 300,
    creator_id: 1,
    lat: 37.383117, 
    lng: -122.033619,
    picture_url: 'https://lwlies.com/wp-content/uploads/2016/12/one-million-years-bc-raquel-welch-1108x0-c-default.jpg'
  )

  Scape.create(
    name: 'Adventure Land',
    category: 'present',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 400,
    creator_id: 1,
    lat: 37.331922, 
    lng: -122.030320,
    picture_url: 'https://images.squarespace-cdn.com/content/v1/59e802b9be42d61a159cbf16/1555322883123-F6FIUKYSUACRNM6G2640/ke17ZwdGBToddI8pDm48kB4nORySMPwEDaddUNIRril7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jRb3i7UjwNNySrgFE_nWau3eoIbt6T219qcqUWV36JU8EtheewCadFuc6Byd4Wlqw/Caroline+Hsu+-+Head+Down+Movement.jpg'
  )

  Scape.create(
    name: 'Climb Mt. Everest',
    category: 'present',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 500,
    creator_id: 1,
    lat: 37.394961, 
    lng: -122.150282,
    picture_url: 'https://image.businessinsider.com/5cf68f2a11e2053c257094c8?width=1100&format=jpeg&auto=webp'
  )

  Scape.create(
    name: 'Escape Death',
    category: 'horror',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 300,
    creator_id: 1,
    lat: 37.372321, 
    lng: -122.038918,
    picture_url: 'https://st1.latestly.com/wp-content/uploads/2020/01/The-Nun-380x214.jpg'
  )

  Scape.create(
    name: 'Zombie Wars',
    category: 'horror',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    daily_price: 100,
    creator_id: 1,
    lat: 37.812714, 
    lng: -122.299309,
    picture_url: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/06/ftwd_501_rg_1212_0596_rt.jpg'
  )

end