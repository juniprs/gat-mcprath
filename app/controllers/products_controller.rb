class ProductsController < ApplicationController
    def show
        @product = Product.find(params[:id])
    end

    private

    def product_params
        params.require(:product).permit(:id, :name, :description, :price)
    end
end
