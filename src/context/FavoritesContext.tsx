import React, { createContext, useContext, useReducer } from 'react';
import { Product } from '../data/products';

interface FavoritesState {
  favorites: Product[];
}

type FavoritesAction =
  | { type: 'ADD_TO_FAVORITES'; payload: Product }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: number };

const FavoritesContext = createContext<{
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
} | null>(null);

const favoritesReducer = (
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      if (state.favorites.some(p => p.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: [] });

  const addToFavorites = (product: Product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: productId });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};