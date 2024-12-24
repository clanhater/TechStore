import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FavoriteButton } from '../components/FavoriteButton';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { isAuthenticated } = useAuth();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('Please log in to add items to cart');
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-4 right-4">
            <FavoriteButton product={product} className="bg-white shadow-md" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-4 text-gray-600">{product.description}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-8 flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};