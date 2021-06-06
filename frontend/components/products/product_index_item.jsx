import React from 'react';

const ProductIndexItem = props => (
    <li>
        <a href="#"><img src={props.product.photo}/></a>
        <a href="#">{props.product.name}</a>
        {props.product.price}
        <a href="#"><button>SHOP NOW</button></a>
    </li>
);

export default ProductIndexItem;