json.set! product.id do 
    json.extract! product, :id, :name, :description, :price, :image_url
    json.photo url_for(product.photo)
end