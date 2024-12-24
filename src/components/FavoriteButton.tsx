import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { Product } from '../data/products';

interface FavoriteButtonProps {
  product: Product;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product, className = '' }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { isAuthenticated } = useAuth();
  
  const isFavorite = favorites.some(p => p.id === product.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when used in ProductCard
    if (!isAuthenticated) {
      alert('Please log in to add items to favorites');
      return;
    }
    
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
      />
    </button>
  );
};