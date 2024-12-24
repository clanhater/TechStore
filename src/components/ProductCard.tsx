import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { FavoriteButton } from './FavoriteButton';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <FavoriteButton product={product} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-xl font-bold text-indigo-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};