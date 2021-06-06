import React from 'react';

const ProductIndexItem = props => (
    <li className='product-container'>
        <a href="#" ><img src={props.product.photo} className='product-photo'/></a>
        <a href="#" className='product-name'>{props.product.name}</a>
        <span className='product-price'>${props.product.price}</span>
        <a href="#" className='product-bttn'><button>SHOP NOW</button></a>
    </li>
);

export default ProductIndexItem;