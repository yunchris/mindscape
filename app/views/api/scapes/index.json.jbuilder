@scapes.each do |scape| 
  json.set! scape.id do 
    json.extract! scape, :id, :name, :category, :description, :lat, :lng, :daily_price, :picture_url
    json.creator scape.creator
  end
end 


