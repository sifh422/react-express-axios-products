import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="product-icon">
          📦
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
      <div className="product-card-footer">
        <button className="add-to-cart-btn">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard