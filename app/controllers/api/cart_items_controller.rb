class Api::CartItemsController < ApplicationController
    def create
        @cart_id = current_user.cart.id
        @item = CartItem.create(cart_id: @cart_id, quantity: 1, product_id: params[:cartItem][:product_id])
        

        if @item.save!
            render 'api/cart_items/show'
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
        params.require(:cart_item).permit(:product_id, :quantity)
    end
end
