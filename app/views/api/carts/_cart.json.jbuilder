cart.cart_items.map do |item| 
    json.partial! "/api/cart_items/cart_item", cart_item: item
end