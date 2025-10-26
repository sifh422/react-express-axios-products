import React from 'react'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🛍️ Product Store</h1>
        <p>Browse our amazing collection of products</p>
      </header>
      <main className="app-main">
        <ProductList />
      </main>
      <footer className="app-footer">
        <p>© 2024 Product Store - Built with React & Express</p>
      </footer>
    </div>
  )
}

export default App