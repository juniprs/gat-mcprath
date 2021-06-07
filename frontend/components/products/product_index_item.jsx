import React from 'react';

const ProductIndexItem = (props) => (
  <li className="product-container">
    <a href={`/#/products/${props.product.id}`}>
      <img src={props.product.photo} className="product-photo" />
    </a>
    <a className="product-details">
      <div className="name-price-container">
        <a href={`/#/products/${props.product.id}`} className="product-name">
          {props.product.name}
        </a>
        <span className="product-price">${props.product.price}</span>
      </div>
      <a href={`/#/products/${props.product.id}`} className="product-bttn">
        SHOP NOW
      </a>
    </a>
  </li>
);

export default ProductIndexItem;