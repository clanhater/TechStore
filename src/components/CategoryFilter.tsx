import React from 'react';
import { useCategories } from '../hooks/useCategories';

export const CategoryFilter: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = useCategories();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          !selectedCategory
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};