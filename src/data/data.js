 export const categories = [
    {
      id: "1",
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
      itemCount: "2,450+ items"
    },
    {
      id: "2",
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
      itemCount: "1,890+ items"
    },
    {
      id: "3",
      name: "Feeding",
      image: "https://images.unsplash.com/photo-1623707430616-d9f956bcac2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGZlZWRlciUyMGJvdHRsZXN8ZW58MHx8MHx8fDA%3D",
      itemCount: "980+ items"
    },
    {
      id: "4",
      name: "Nursery",
      image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=400&h=400&fit=crop",
      itemCount: "1,230+ items"
    },
    {
      id: "5",
      name: "Gear",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
      itemCount: "1,560+ items"
    },
    {
      id: "6",
      name: "Bath",
      image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=400&fit=crop",
      itemCount: "720+ items"
    }
  ];

  export const mockVendors = [
  {
    id: 1,
    name: "Little Angels Store",
    category: "Organic Baby Clothing",
    rating: 4.8,
    reviewCount: 2340,
    products: 450,
    customers: 234000,
    coverImage:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop",
    logoIcon: "https://images.unsplash.com/photo-1600563093202-337471bde37e?w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Baby Bliss Shop",
    category: "Premium Toys & Gear",
    rating: 4.7,
    reviewCount: 1890,
    products: 380,
    customers: 189000,
    coverImage:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop",
    logoIcon: "https://images.unsplash.com/photo-1684287861055-1d1da39c156b?w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tiny Treasures",
    category: "Nursery Essentials",
    rating: 4.9,
    reviewCount: 3120,
    products: 520,
    customers: 312000,
    coverImage:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop",
    logoIcon: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Snuggle Nest",
    category: "Bedding & Comfort",
    rating: 4.6,
    reviewCount: 1540,
    products: 210,
    customers: 97000,
    coverImage:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1200&auto=format&fit=crop",
    logoIcon: "https://images.unsplash.com/photo-1571389244484-49a5cd4abc5d?w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "GrowBig Kids",
    category: "Educational Toys",
    rating: 4.3,
    reviewCount: 870,
    products: 160,
    customers: 54000,
    coverImage:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1200&auto=format&fit=crop",
    logoIcon: "https://images.unsplash.com/photo-1633533452206-8ab246b00e30?w=500&auto=format&fit=crop",
  },
];


// Mock data for trending products
export const trendingProductsMock = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
    name: "Organic Cotton Onesie",
    brand: "Little Angels",
    rating: 4.5,
    reviewCount: 234,
    price: 24.99,
    originalPrice: 34.99,
    badges: [
      { text: "Best Seller", color: "red" },
      { text: "SAVE 29%", color: "red" }
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
    name: "Premium Soft Teddy Bear",
    brand: "Tiny Treasures",
    rating: 4.8,
    reviewCount: 456,
    price: 18.99,
    originalPrice: null,
    badges: [
      { text: "New", color: "red" }
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=500&h=500&fit=crop",
    name: "Complete Feeding Set",
    brand: "Baby Bliss",
    rating: 4.6,
    reviewCount: 189,
    price: 29.99,
    originalPrice: 39.99,
    badges: [
      { text: "Sale", color: "red" },
      { text: "SAVE 25%", color: "red" }
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
    name: "Musical Nursery Mobile",
    brand: "Sweet Dreams",
    rating: 4.7,
    reviewCount: 312,
    price: 34.99,
    originalPrice: null,
    badges: [
      { text: "Trending", color: "red" }
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&h=500&fit=crop",
    name: "Baby Bath Towel Set",
    brand: "Little Angels",
    rating: 4.9,
    reviewCount: 501,
    price: 19.99,
    originalPrice: 25.99,
    badges: [
      { text: "Popular", color: "red" },
      { text: "SAVE 23%", color: "red" }
    ]
  }
];