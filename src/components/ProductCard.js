import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price} Rs</p>
            <p className="product-description">{product.description}</p>
            <button className="buy-now-button">Buy Now</button>
        </div>
    );
};

export default ProductCard;
