import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading products...</p>
    </div>
  )
}

export default LoadingSpinner