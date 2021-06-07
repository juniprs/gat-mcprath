json.set! product.id do 
    json.extract! product, :id, :name, :description, :price, :colour, :photo
    json.photo url_for(product.photo)
end