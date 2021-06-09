class Api::CartItemsController < ApplicationController
    def create
        @cart = Cart.find(params[:cart_id])

        @cart.add_item(
            product_id: params[:product_id],
            quantity: params[:quantity]
        )
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
