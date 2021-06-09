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
                <div className="cart-header">
                    <h1 className="cart-header-name">YOUR BAG</h1>
                    <p className="border"/>
                </div>
            </div>
        )
    };
};

export default Cart;