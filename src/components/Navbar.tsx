import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, Heart, Clock, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import { searchProducts } from '../utils/search';
import { products } from '../data/products';
import { SearchBar } from './SearchBar';
import { CartPreview } from './CartPreview';
import { AuthModal } from './AuthModal';

export const Navbar: React.FC = () => {
  const { state } = useCart();
  const { setSearchQuery, setSearchResults } = useSearch();
  const { user, logout, isAuthenticated } = useAuth();
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchProducts(products, query);
    setSearchResults(results);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <Store className="h-6 w-6 text-indigo-600" />
                <span className="font-semibold text-xl">TechStore</span>
              </Link>
              <div className="hidden md:block">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-600">{user?.email}</span>
                  <Link
                    to="/favorites"
                    className="text-gray-700 hover:text-indigo-600 flex items-center space-x-1"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="hidden sm:inline">Favorites</span>
                  </Link>
                  <Link
                    to="/orders"
                    className="text-gray-700 hover:text-indigo-600 flex items-center space-x-1"
                  >
                    <Clock className="h-5 w-5" />
                    <span className="hidden sm:inline">Orders</span>
                  </Link>
                  <div
                    className="relative"
                    onMouseEnter={() => setShowCartPreview(true)}
                    onMouseLeave={() => setShowCartPreview(false)}
                  >
                    <Link
                      to="/cart"
                      className="relative inline-flex items-center p-2 text-gray-700 hover:text-indigo-600"
                    >
                      <ShoppingCart className="h-6 w-6" />
                      {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {itemCount}
                        </span>
                      )}
                    </Link>
                    {showCartPreview && (
                      <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                        <CartPreview />
                      </div>
                    )}
                  </div>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-indigo-600 flex items-center space-x-1"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden py-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </nav>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};