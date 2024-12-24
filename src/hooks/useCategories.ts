import { useState, useMemo } from 'react';
import { products } from '../data/products';

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const categorySet = new Set(products.map(product => product.category));
    return Array.from(categorySet);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts
  };
};