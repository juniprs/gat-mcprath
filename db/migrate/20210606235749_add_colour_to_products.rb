class AddColourToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :colour, :string
  end
end
