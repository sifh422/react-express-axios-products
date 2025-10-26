const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Laptop", price: 1299.99 },
  { id: 4, name: "Coffee Maker", price: 79.99 },
  { id: 5, name: "Running Shoes", price: 129.99 },
  { id: 6, name: "Bluetooth Speaker", price: 49.99 },
  { id: 7, name: "Tablet", price: 399.99 },
  { id: 8, name: "Gaming Mouse", price: 59.99 }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Products API!' });
});

// Get all products
app.get('/api/products', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json({
      success: true,
      data: products,
      message: 'Products fetched successfully'
    });
  }, 1000); // 1 second delay to demonstrate loading state
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    data: product,
    message: 'Product fetched successfully'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Products API available at http://localhost:${PORT}/api/products`);
});