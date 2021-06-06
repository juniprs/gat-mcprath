import React from 'react';

class SingleProduct extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    };

    render() {
        return (
            <div>
                {this.props.product ? (
                <ul>
                    <img src={this.props.product.photo} className="photo"/>
                    <li >{this.props.product.name}</li>
                    <li>{this.props.product.price}</li>
                    <li><a href="#">ADD TO BAG</a></li>
                    <li>DESCRIPTION
                        <p>{this.props.description}</p>
                    </li>
                </ul>
                ) : ('')}
            </div>
        )
    };
};

export default SingleProduct;