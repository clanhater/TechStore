import React from 'react';
import { Clock, Package } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'delivered' | 'processing' | 'shipped';
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
}

// Mock data for demonstration
const mockOrders: Order[] = [
  {
    id: '1',
    date: '2024-03-10',
    total: 499.98,
    status: 'delivered',
    items: [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        quantity: 1,
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60"
      },
      {
        id: 2,
        name: "Smart Watch Pro",
        quantity: 1,
        price: 199.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60"
      }
    ]
  }
];

export const OrderHistory: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-500 capitalize">
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};