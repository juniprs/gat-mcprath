class Api::CartItemsController < ApplicationController
    def create
        @cart = Cart.find_by(id: params[:cart_item][:cart_id])
        @item = CartItem.create(cart_item_params)
        
        if @item.save!
            render 'api/carts/show'
        end
    end

    def update
        @item = CartItem.find_by(id: params[:id])
        # @cart = Cart.find_by(id: params[:cartItem][:cart_id])
        
        if @item.update(quantity: params[:cartItem][:quantity])
            render 'api/cart_items/show'
        end
    end

    def destroy
        @item = CartItem.find_by(id: params[:id])
        @item.delete
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :product_id, :quantity)
    end
end
