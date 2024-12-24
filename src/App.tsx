import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites';
import { OrderHistory } from './pages/OrderHistory';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <SearchProvider>
              <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/orders" element={<OrderHistory />} />
                </Routes>
              </div>
            </SearchProvider>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;