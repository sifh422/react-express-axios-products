import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Using axios to fetch data from the Express API
      const response = await axios.get('http://localhost:5000/api/products')
      
      if (response.data.success) {
        setProducts(response.data.data)
      } else {
        throw new Error(response.data.message || 'Failed to fetch products')
      }
    } catch (err) {
      console.error('Error fetching products:', err)
      
      // Handle different types of errors
      if (err.code === 'ERR_NETWORK') {
        setError('Unable to connect to the server. Please make sure the backend is running on http://localhost:5000')
      } else if (err.response) {
        // Server responded with error status
        setError(`Server Error: ${err.response.data.message || err.response.statusText}`)
      } else if (err.request) {
        // Request was made but no response received
        setError('No response from server. Please check your internet connection.')
      } else {
        // Something else happened
        setError(err.message || 'An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    fetchProducts()
  }

  if (loading) {
    return (
      <div className="product-list-container">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="product-list-container">
        <ErrorMessage message={error} onRetry={handleRetry} />
      </div>
    )
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Our Products</h2>
        <p>Discover amazing products at great prices</p>
        <button className="refresh-btn" onClick={handleRetry}>
          🔄 Refresh Products
        </button>
      </div>
      
      {products.length === 0 ? (
        <div className="no-products">
          <p>No products available at the moment.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList