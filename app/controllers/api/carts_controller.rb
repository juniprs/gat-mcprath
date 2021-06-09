class Api::CartsController < ApplicationController
    def show
        @cart = current_user.cart ||= Cart.create(user_id: current_user.id)
    end

    def create
        @cart = Cart.create(user_id: current_user.id)
        if @cart.save
            render 'api/cart/show'
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end
end
