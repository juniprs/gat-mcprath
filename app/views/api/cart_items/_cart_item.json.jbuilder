json.set! cart_item.id do
    json.extract! cart_item, :product_id, :quantity
end