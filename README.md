# React Frontend + Express Backend with Axios

This project demonstrates how to connect a React frontend application to an Express.js backend API using Axios for HTTP requests.

## Project Structure

```
├── backend/          # Express.js API server
│   ├── package.json
│   └── server.js
├── frontend/         # React application
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── components/
│           ├── ProductList.jsx
│           ├── ProductCard.jsx
│           ├── LoadingSpinner.jsx
│           ├── ErrorMessage.jsx
│           └── [component].css files
└── README.md
```

## Features

### Backend (Express.js)
- RESTful API with products endpoint
- CORS enabled for cross-origin requests
- Error handling middleware
- Sample product data with names and prices
- Simulated network delay for testing loading states

### Frontend (React)
- Modern React with hooks (useState, useEffect)
- Axios for HTTP requests
- Loading states with spinner animation
- Comprehensive error handling
- Responsive design with CSS Grid
- Modern UI with hover effects and animations
- Retry functionality for failed requests

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server** (Terminal 1)
   ```bash
   cd backend
   npm start
   ```
   The API will be available at `http://localhost:5000`

2. **Start the Frontend Development Server** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   The React app will be available at `http://localhost:3000`

### API Endpoints

- `GET /` - Welcome message
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID

### Testing the Connection

1. Ensure both servers are running
2. Open `http://localhost:3000` in your browser
3. You should see the product list loaded from the Express API
4. Test error handling by stopping the backend server
5. Test loading states by refreshing the page

## Key Learning Points

1. **Axios Integration**: How to use Axios for making HTTP requests in React
2. **Error Handling**: Comprehensive error handling for network requests
3. **Loading States**: Implementing loading indicators for better UX
4. **CORS Configuration**: Setting up CORS for cross-origin requests
5. **Component Architecture**: Separating concerns with reusable components
6. **Responsive Design**: Creating mobile-friendly layouts
7. **State Management**: Using React hooks for state management

## Technologies Used

- **Frontend**: React, Vite, Axios, CSS3
- **Backend**: Express.js, Node.js, CORS
- **Development**: Nodemon for backend hot reload

## Troubleshooting

- **CORS Issues**: Make sure CORS is enabled in the Express server
- **Connection Refused**: Ensure the backend server is running on port 5000
- **Port Conflicts**: Change ports in the configuration files if needed
- **Network Errors**: Check that both servers are running and accessible