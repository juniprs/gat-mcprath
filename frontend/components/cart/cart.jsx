import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchCart()
        this.props.fetchProducts()
    };

    render() {
        if (!Object.values(this.props.products).length) { return null };
        return (
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h1 className="cart-header-name">YOUR BAG</h1>
                    <p className="border"/>
                </div>
                <ul className="cart-labels">
                    <li className="quantity">QUANTITY</li>
                    <li className="total">TOTAL</li>
                </ul>
                <div className="cart-items-wrapper">
                    {this.props.cart.map((cartItem, i) => {
                    return (
                      <ul className="cart-item-container">
                        <li>
                          <img src={this.props.products[cartItem.product_id].photo}/>
                        </li>
                        <li>{this.props.products[cartItem.product_id].name}</li>
                        <a href="#">REMOVE</a>
                        <li>{cartItem.quantity}</li>
                        <li>${this.props.products[cartItem.product_id].price * cartItem.quantity}</li>
                      </ul>
                    );
                    })}
                </div>
                    <span className="cart-total">TOTAL</span>
                {/* <a href="#" className="update-bag-bttn">UPDATE BAG</a> */}
                <a href="#" className="check-out-bttn">CHECK OUT</a>
            </div>
        )
    };
};

export default Cart;