import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPreview: React.FC = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  if (itemCount === 0) {
    return (
      <div className="p-4">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4 w-80">
      <div className="space-y-4">
        {state.items.slice(0, 3).map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-12 w-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </p>
              <p className="text-sm text-gray-500">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {state.items.length > 3 && (
        <p className="mt-2 text-sm text-gray-500">
          And {state.items.length - 3} more items...
        </p>
      )}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="font-medium text-gray-900">
          Total: ${state.total.toFixed(2)}
        </p>
        <Link
          to="/cart"
          className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};