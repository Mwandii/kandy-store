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
      name: "Bath Time",
      image: "https://images.unsplash.com/photo-1621483942660-48b49739ac3b?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1766918780914-e19d9de76d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHN0b3JlfGVufDB8fDB8fHww",
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
    image: "https://images.unsplash.com/photo-1635258559918-ed56f88004de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhYnklMjBib3R0bGVzfGVufDB8fDB8fHww",
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
    image: "https://images.unsplash.com/photo-1737065183310-aef762bd011c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

// Mock data for shop by age group
export const ageGroupsMock = [
  {
    id: 1,
    ageRange: "0–6 Months",
    subtitle: "Newborn essentials",
    itemCount: "1,200+ items",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    ageRange: "6–12 Months",
    subtitle: "Growing baby needs",
    itemCount: "980+ items",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    ageRange: "1–2 Years",
    subtitle: "Toddler favorites",
    itemCount: "1,450+ items",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    ageRange: "2+ Years",
    subtitle: "Active kids items",
    itemCount: "2,100+ items",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=600&fit=crop",
  },
];
// Mock data for categories and their products
export const categoriesMock = [
  {
    id: 1,
    name: "Baby Clothing",
    slug: "baby-clothing",
    description: "Soft, comfortable clothing for your little one",
    icon: "👕",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    itemCount: 245,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    name: "Toys & Games",
    slug: "toys-games",
    description: "Educational and fun toys for development",
    icon: "🧸",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
    itemCount: 189,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    name: "Feeding Essentials",
    slug: "feeding",
    description: "Bottles, bibs, and feeding accessories",
    icon: "🍼",
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=400&h=400&fit=crop",
    itemCount: 156,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "Nursery Furniture",
    slug: "nursery-furniture",
    description: "Cribs, changing tables, and more",
    icon: "🛏️",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
    itemCount: 87,
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 5,
    name: "Bath & Skincare",
    slug: "bath-skincare",
    description: "Gentle products for baby's delicate skin",
    icon: "🛁",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=400&fit=crop",
    itemCount: 134,
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 6,
    name: "Diapers & Wipes",
    slug: "diapers-wipes",
    description: "Everything for diaper changes",
    icon: "🧷",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
    itemCount: 98,
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: 7,
    name: "Strollers & Carriers",
    slug: "strollers-carriers",
    description: "Safe and comfortable transport",
    icon: "🚼",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
    itemCount: 72,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 8,
    name: "Baby Safety",
    slug: "baby-safety",
    description: "Monitors, gates, and safety gear",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=400&fit=crop",
    itemCount: 115,
    color: "from-red-500 to-pink-500"
  }
];

// Mock products by category
export const productsByCategoryMock = {
  1: [ // Baby Clothing
    {
      id: 101,
      name: "Organic Cotton Onesie Set",
      brand: "Little Angels",
      rating: 4.8,
      reviewCount: 342,
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
      badges: [{ text: "Best Seller", color: "red" }],
      categoryId: 1
    },
    {
      id: 102,
      name: "Baby Romper with Hat",
      brand: "Tiny Treasures",
      rating: 4.6,
      reviewCount: 187,
      price: 24.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
      badges: [{ text: "New", color: "red" }],
      categoryId: 1
    },
    {
      id: 103,
      name: "Winter Baby Jacket",
      brand: "Baby Bliss",
      rating: 4.9,
      reviewCount: 256,
      price: 44.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=500&fit=crop",
      badges: [{ text: "SAVE 25%", color: "red" }],
      categoryId: 1
    },
    {
      id: 104,
      name: "Newborn Sleep Gown",
      brand: "Sweet Dreams",
      rating: 4.7,
      reviewCount: 198,
      price: 19.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
      badges: [],
      categoryId: 1
    }
  ],
  2: [ // Toys & Games
    {
      id: 201,
      name: "Soft Plush Teddy Bear",
      brand: "Tiny Treasures",
      rating: 4.9,
      reviewCount: 456,
      price: 18.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
      badges: [{ text: "Popular", color: "red" }],
      categoryId: 2
    },
    {
      id: 202,
      name: "Stacking Rings Toy",
      brand: "GrowBig Kids",
      rating: 4.7,
      reviewCount: 234,
      price: 14.99,
      originalPrice: 19.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
      badges: [{ text: "SAVE 25%", color: "red" }],
      categoryId: 2
    },
    {
      id: 203,
      name: "Musical Activity Cube",
      brand: "Baby Bliss",
      rating: 4.8,
      reviewCount: 312,
      price: 34.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
      badges: [{ text: "New", color: "red" }],
      categoryId: 2
    }
  ],
  3: [ // Feeding Essentials
    {
      id: 301,
      name: "Anti-Colic Baby Bottles Set",
      brand: "Baby Bliss",
      rating: 4.8,
      reviewCount: 523,
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=500&h=500&fit=crop",
      badges: [{ text: "Best Seller", color: "red" }],
      categoryId: 3
    },
    {
      id: 302,
      name: "Silicone Baby Bibs",
      brand: "Little Angels",
      rating: 4.6,
      reviewCount: 189,
      price: 12.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
      badges: [],
      categoryId: 3
    }
  ],
  4: [ // Nursery Furniture
    {
      id: 401,
      name: "Convertible Baby Crib",
      brand: "Sweet Dreams",
      rating: 4.9,
      reviewCount: 287,
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
      badges: [{ text: "SAVE 25%", color: "red" }],
      categoryId: 4
    },
    {
      id: 402,
      name: "Changing Table with Storage",
      brand: "Tiny Treasures",
      rating: 4.7,
      reviewCount: 156,
      price: 179.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
      badges: [{ text: "New", color: "red" }],
      categoryId: 4
    }
  ],
  5: [ // Bath & Skincare
    {
      id: 501,
      name: "Baby Bath Towel Set",
      brand: "Little Angels",
      rating: 4.9,
      reviewCount: 501,
      price: 19.99,
      originalPrice: 25.99,
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&h=500&fit=crop",
      badges: [{ text: "Popular", color: "red" }],
      categoryId: 5
    },
    {
      id: 502,
      name: "Organic Baby Shampoo",
      brand: "Baby Bliss",
      rating: 4.8,
      reviewCount: 423,
      price: 14.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&h=500&fit=crop",
      badges: [{ text: "Best Seller", color: "red" }],
      categoryId: 5
    }
  ],
  6: [ // Diapers & Wipes
    {
      id: 601,
      name: "Premium Diapers Size 3",
      brand: "Baby Bliss",
      rating: 4.7,
      reviewCount: 678,
      price: 39.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=500&fit=crop",
      badges: [{ text: "SAVE 20%", color: "red" }],
      categoryId: 6
    }
  ],
  7: [ // Strollers & Carriers
    {
      id: 701,
      name: "Lightweight Travel Stroller",
      brand: "Tiny Treasures",
      rating: 4.8,
      reviewCount: 345,
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=500&fit=crop",
      badges: [{ text: "Best Seller", color: "red" }],
      categoryId: 7
    }
  ],
  8: [ // Baby Safety
    {
      id: 801,
      name: "Baby Monitor with Camera",
      brand: "Sweet Dreams",
      rating: 4.9,
      reviewCount: 432,
      price: 129.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=500&fit=crop",
      badges: [{ text: "New", color: "red" }],
      categoryId: 8
    }
  ]
};