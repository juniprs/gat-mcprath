import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchCart()
    };

    render() {
        return (
            <div className="cart">
                <h1 className="cart-header">YOUR BAG</h1>
            </div>
        )
    };
};

export default Cart;