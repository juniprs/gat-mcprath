import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchProducts()
    };

    render() {
        return (
            <div className='products-container'>
                <ul className='products-list'>
                    {this.props.products.map((product, i) => {
                    return <ProductIndexItem product = {product} key = {i}/>
                    })}
                </ul>
            </div>
        )
    };
};

export default ProductIndex;