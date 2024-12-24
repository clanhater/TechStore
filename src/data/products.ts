export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userId: "user1",
        userName: "John Doe",
        rating: 5,
        comment: "Amazing sound quality and comfortable to wear!",
        date: "2024-03-01"
      }
    ]
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking, notifications, and a beautiful OLED display. Water-resistant and long battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60",
    category: "Wearables",
    rating: 4.2,
    reviews: []
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    description: "Professional-grade digital camera with 4K video capabilities and advanced autofocus system. Includes multiple lens options.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
    category: "Cameras",
    rating: 4.8,
    reviews: []
  },
  {
    id: 4,
    name: "Laptop Pro",
    description: "Powerful laptop with the latest processor, dedicated graphics, and a stunning display. Perfect for work and entertainment.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
    category: "Computers",
    rating: 4.6,
    reviews: []
  },
  {
    id: 5,
    name: "Bluetooth Portable Speaker",
    description: "Compact and powerful Bluetooth speaker with long battery life and water resistance.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1573164574236-55fd678f815d?w=800&auto=format&fit=crop&q=60",
    category: "Audio",
    rating: 4.3,
    reviews: [
      {
        id: 1,
        userId: "user2",
        userName: "Jane Smith",
        rating: 4,
        comment: "Great sound for its size, but a bit heavy.",
        date: "2024-02-15"
      }
    ]
  },
  {
    id: 6,
    name: "Smartphone Mount for Cars",
    description: "Universal smartphone mount with 360-degree rotation and secure grip.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: "user3",
        userName: "Alex Johnson",
        rating: 5,
        comment: "Holds my phone securely, even on bumpy roads.",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 7,
    name: "4K Ultra HD Smart TV",
    description: "55-inch Smart TV with stunning 4K Ultra HD resolution and built-in streaming apps.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1542826438-5ec3196f7379?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
    rating: 4.6,
    reviews: [
      {
        id: 1,
        userId: "user4",
        userName: "Emily Davis",
        rating: 4,
        comment: "Great picture quality, but the remote feels cheap.",
        date: "2024-01-25"
      }
    ]
  },
  {
    id: 8,
    name: "Ergonomic Office Chair",
    description: "Comfortable and adjustable office chair with lumbar support and breathable mesh.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1605542831295-456bb4b3a96d?w=800&auto=format&fit=crop&q=60",
    category: "Furniture",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userId: "user5",
        userName: "Chris Brown",
        rating: 5,
        comment: "My back pain is gone after using this chair!",
        date: "2024-02-28"
      }
    ]
  },
  {
    id: 9,
    name: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with responsive switches and customizable lighting effects.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587202372775-b47e00a502bc?w=800&auto=format&fit=crop&q=60",
    category: "Gaming",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userId: "user6",
        userName: "Taylor Wilson",
        rating: 4,
        comment: "Great for gaming, but the keys are a bit loud.",
        date: "2024-02-20"
      }
    ]
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1592503255038-fd0cafe96271?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
    rating: 4.4,
    reviews: [
      {
        id: 1,
        userId: "user7",
        userName: "Jordan Lee",
        rating: 5,
        comment: "Charges quickly and looks sleek on my desk.",
        date: "2024-01-15"
      }
    ]
  },
  {
    id: 11,
    name: "Adjustable Dumbbells Set",
    description: "Space-saving dumbbells with adjustable weights for versatile workouts.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1583454110558-4b31cebb3b81?w=800&auto=format&fit=crop&q=60",
    category: "Fitness",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: "user8",
        userName: "Sam Walker",
        rating: 5,
        comment: "Perfect for my home gym, easy to adjust.",
        date: "2024-02-12"
      }
    ]
  },
  {
    id: 12,
    name: "Stainless Steel Water Bottle",
    description: "Insulated water bottle keeps beverages hot or cold for hours.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1573185153086-0e76aa256405?w=800&auto=format&fit=crop&q=60",
    category: "Lifestyle",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        userId: "user9",
        userName: "Kelly Martinez",
        rating: 5,
        comment: "Keeps my drinks cold all day, highly recommend!",
        date: "2024-03-05"
      }
    ]
  },
  {
    id: 13,
    name: "Cordless Stick Vacuum Cleaner",
    description: "Lightweight and powerful vacuum cleaner with long-lasting battery and HEPA filter.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1591307270303-3a75305cc9b0?w=800&auto=format&fit=crop&q=60",
    category: "Home Appliances",
    rating: 4.3,
    reviews: [
      {
        id: 1,
        userId: "user10",
        userName: "Max Harper",
        rating: 4,
        comment: "Great suction power, but battery life could be better.",
        date: "2024-01-20"
      }
    ]
  }
];