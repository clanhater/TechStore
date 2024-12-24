import React from 'react';
import { ProductCard } from './ProductCard';
import { useSearch } from '../context/SearchContext';
import { useCategories } from '../hooks/useCategories';

export const ProductList: React.FC = () => {
  const { searchResults, searchQuery } = useSearch();
  const { filteredProducts, selectedCategory } = useCategories();

  const displayProducts = searchQuery ? searchResults : filteredProducts;

  if (displayProducts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">
          No products found {searchQuery && `for "${searchQuery}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};