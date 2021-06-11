class Api::CartItemsController < ApplicationController
    def create
        @cart = Cart.find(params[:cart_id])
        @item = CartItem.create(cart_item_params)
        
        if @item.save
            # @cart_item
        end
    end

    def update

    end

    def destroy

    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :product_id, :quantity)
    end
end
