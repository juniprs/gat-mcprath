import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
    this.props.fetchProducts();
  }

  render() {
    if (!Object.values(this.props.products).length) {
      return null;
    }
    return (
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
          {this.props.cart.map((cartItem, i) => {
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
                  ].colour.toLowerCase()}
                </li>
                <li className="ci-quantity">{cartItem.quantity}</li>
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
          <span className="cart-total">TOTAL</span>
          {/* <a href="#" className="update-bag-bttn">UPDATE BAG</a> */}
          <a href="#" className="check-out-bttn">
            CHECK OUT
          </a>
        </div>
      </div>
    );
  }
}

export default Cart;
