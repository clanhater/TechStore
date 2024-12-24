import { Product } from '../data/products';

export const searchProducts = (products: Product[], query: string): Product[] => {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return products;
  
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};