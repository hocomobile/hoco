import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="premium-product-card">
            {product.badge && (
                <span className={`product-badge ${product.badge.toLowerCase()}`}>
                    {product.badge}
                </span>
            )}
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                />
            </div>
            <div className="product-info">
                <div className="product-brand">
                    {product.brand || (product.name.includes("iPhone") || product.name.includes("iPad") || product.name.includes("MacBook")
                        ? "APPLE"
                        : product.name.includes("Galaxy") || product.name.includes("Tab")
                            ? "SAMSUNG"
                            : "GENERIC")}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-actions">
                    <span className="availability">In store</span>
                    <a href="/stores" className="product-button">Find in Store</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;