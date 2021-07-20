class Api::CartItemsController < ApplicationController
    def create
        @cart = Cart.find_by(id: params[:cart_item][:cart_id])
        @item = CartItem.create(cart_item_params)
        p @cart
        
        if @item.save!
            render 'api/carts/show'
            # render json: @cart
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
