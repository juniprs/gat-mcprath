class Api::Cart < ApplicationRecord
    belongs_to :user,
        class_name: User

    has_many :cart_items,
        foreign_key: cart_id,
        class_name: CartItem
end