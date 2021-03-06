import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
    this.props.fetchProducts();
  }

  handleQuantityChange(p, cartItem) {
    return (e) => {
      e.preventDefault();
      if (p === '-' && cartItem["quantity"] > 1) {
        cartItem["quantity"] -= 1;
      } else if (p === '-' && cartItem["quantity"] === 1) {
        this.props.deleteCartItem(cartItem["id"]);
      } else {
        cartItem["quantity"] += 1;
      }
      this.props.updateCartItem(cartItem);
    };
  }

  render() {
    if (!Object.values(this.props.products).length) {
      return null;
    }
    let total = 0;
    return (
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
          {this.props.cart.map((cartItem, i) => {
            console.log(this.props.products);
            console.log(cartItem);
            return (
              <ul className="cart-item-container">
                <li>
                  <img
                    className="ci-photo"
                    src={this.props.products[cartItem.product_id].photo}
                  />
                </li>
                <li className="ci-name">
                  {this.props.products[cartItem.product_id].name}
                </li>
                <li className="ci-colour">
                  {this.props.products[
                    cartItem.product_id
                  ].colour ? this.props.products[
                    cartItem.product_id
                  ].colour.toLowerCase() : ""}
                </li>
                <li className="ci-quantity">
                  <button
                    onClick={this.handleQuantityChange("-", cartItem)}
                    className="qty-bttn"
                  >
                    -
                  </button>
                  {cartItem.quantity}
                  <button
                    onClick={this.handleQuantityChange("+", cartItem)}
                    className="qty-bttn"
                  >
                    +
                  </button>
                </li>
                <li className="ci-price">
                  $
                  {this.props.products[cartItem.product_id].price *
                    cartItem.quantity}
                  .00
                </li>
              </ul>
            );
          })}
        </div>
        <div className="cart-footer">
          <ul className="cart-total">
            <li>TOTAL</li>
            {this.props.cart.forEach((cartItem) => {
              total +=
                this.props.products[cartItem.product_id].price *
                cartItem.quantity;
            })}
            <li>${total}.00</li>
          </ul>
          <a href="#" className="check-out-bttn">
            CHECK OUT
          </a>
        </div>
      </div>
    );
  }
}

export default Cart;
