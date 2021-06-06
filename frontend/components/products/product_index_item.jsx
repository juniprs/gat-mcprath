import React from 'react';

const ProductIndexItem = props => (
    <li>
        {props.product.name}
        <img src={props.product.photo}/>
    </li>
);

export default ProductIndexItem;