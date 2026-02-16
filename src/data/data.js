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

// Unified vendor data - used by both FeaturedVendors and AllVendorsPage
export const vendorsMock = [
  {
    id: 1,
    name: "Little Angels Store",
    slug: "little-angels-store",
    category: "Organic Baby Clothing",
    description: "Premium organic cotton clothing for newborns to toddlers. Sustainable, soft, and gentle on baby's skin.",
    rating: 4.8,
    reviewCount: 2340,
    products: 450,
    customers: 234000,
    coverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)", // For FeaturedVendors
    logoIcon: "👶",
    logoPlaceholder: "👶", // For FeaturedVendors (legacy)
    verified: true,
    location: "Nairobi, Kenya",
    established: "2019",
    responseTime: "Within 1 hour",
    tags: ["Organic", "Sustainable", "Premium"]
  },
  {
    id: 2,
    name: "Baby Bliss Shop",
    slug: "baby-bliss-shop",
    category: "Premium Toys & Gear",
    description: "Educational toys and premium baby gear designed to support your child's development at every stage.",
    rating: 4.7,
    reviewCount: 1890,
    products: 380,
    customers: 189000,
    coverImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
    logoIcon: "🧸",
    logoPlaceholder: "🧸",
    verified: true,
    location: "Mombasa, Kenya",
    established: "2020",
    responseTime: "Within 2 hours",
    tags: ["Educational", "Premium", "Safe"]
  },
  {
    id: 3,
    name: "Tiny Treasures",
    slug: "tiny-treasures",
    category: "Nursery Essentials",
    description: "Everything you need to create the perfect nursery. From cribs to decor, we've got you covered.",
    rating: 4.9,
    reviewCount: 3120,
    products: 520,
    customers: 312000,
    coverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    logoIcon: "🌟",
    logoPlaceholder: "🌟",
    verified: true,
    location: "Kisumu, Kenya",
    established: "2018",
    responseTime: "Within 30 minutes",
    tags: ["Furniture", "Decor", "Quality"]
  },
  {
    id: 4,
    name: "Snuggle Nest",
    slug: "snuggle-nest",
    category: "Bedding & Comfort",
    description: "Soft, breathable bedding and comfort products for peaceful sleep. Safety-tested and parent-approved.",
    rating: 4.6,
    reviewCount: 1540,
    products: 210,
    customers: 97000,
    coverImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    logoIcon: "🛏️",
    logoPlaceholder: "🛏️",
    verified: true,
    location: "Nakuru, Kenya",
    established: "2021",
    responseTime: "Within 3 hours",
    tags: ["Comfortable", "Safe", "Breathable"]
  },
  {
    id: 5,
    name: "GrowBig Kids",
    slug: "growbig-kids",
    category: "Educational Toys",
    description: "STEM-focused toys and games that make learning fun. Spark curiosity and creativity in your little ones.",
    rating: 4.3,
    reviewCount: 870,
    products: 160,
    customers: 54000,
    coverImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    logoIcon: "📚",
    logoPlaceholder: "📚",
    verified: true,
    location: "Eldoret, Kenya",
    established: "2022",
    responseTime: "Within 4 hours",
    tags: ["STEM", "Educational", "Creative"]
  },
  {
    id: 6,
    name: "Mama's Choice",
    slug: "mamas-choice",
    category: "Feeding Essentials",
    description: "Safe, BPA-free feeding products for babies. From bottles to bibs, quality you can trust.",
    rating: 4.8,
    reviewCount: 2100,
    products: 320,
    customers: 178000,
    coverImage: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    logoIcon: "🍼",
    logoPlaceholder: "🍼",
    verified: true,
    location: "Nairobi, Kenya",
    established: "2020",
    responseTime: "Within 1 hour",
    tags: ["BPA-Free", "Safe", "Trusted"]
  },
  {
    id: 7,
    name: "Happy Feet Store",
    slug: "happy-feet-store",
    category: "Baby Shoes & Accessories",
    description: "First walkers, soft sole shoes, and adorable accessories for tiny toes. Comfort meets style.",
    rating: 4.5,
    reviewCount: 1320,
    products: 280,
    customers: 142000,
    coverImage: "https://images.unsplash.com/photo-1514090458221-67548f52db36?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    logoIcon: "👟",
    logoPlaceholder: "👟",
    verified: true,
    location: "Thika, Kenya",
    established: "2021",
    responseTime: "Within 2 hours",
    tags: ["Comfortable", "Stylish", "Durable"]
  },
  {
    id: 8,
    name: "Pure & Gentle",
    slug: "pure-gentle",
    category: "Skincare & Bath",
    description: "Organic, hypoallergenic skincare products for baby's delicate skin. Dermatologist-tested and approved.",
    rating: 4.9,
    reviewCount: 2890,
    products: 180,
    customers: 256000,
    coverImage: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    logoIcon: "🛁",
    logoPlaceholder: "🛁",
    verified: true,
    location: "Mombasa, Kenya",
    established: "2019",
    responseTime: "Within 1 hour",
    tags: ["Organic", "Hypoallergenic", "Gentle"]
  },
  {
    id: 9,
    name: "Adventure Baby",
    slug: "adventure-baby",
    category: "Strollers & Carriers",
    description: "Lightweight, durable strollers and ergonomic carriers for parents on the go. Travel in comfort.",
    rating: 4.7,
    reviewCount: 1670,
    products: 95,
    customers: 124000,
    coverImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    logoIcon: "🚼",
    logoPlaceholder: "🚼",
    verified: true,
    location: "Nairobi, Kenya",
    established: "2020",
    responseTime: "Within 2 hours",
    tags: ["Lightweight", "Durable", "Ergonomic"]
  },
  {
    id: 10,
    name: "Safe Haven Baby",
    slug: "safe-haven-baby",
    category: "Safety & Monitoring",
    description: "Baby monitors, safety gates, and child-proofing solutions. Peace of mind for every parent.",
    rating: 4.6,
    reviewCount: 1450,
    products: 140,
    customers: 89000,
    coverImage: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    logoIcon: "🛡️",
    logoPlaceholder: "🛡️",
    verified: true,
    location: "Kisumu, Kenya",
    established: "2021",
    responseTime: "Within 3 hours",
    tags: ["Secure", "Reliable", "Peace of Mind"]
  },
  {
    id: 11,
    name: "Diaper Depot",
    slug: "diaper-depot",
    category: "Diapers & Wipes",
    description: "Premium diapers and wipes at wholesale prices. Bulk savings without compromising quality.",
    rating: 4.4,
    reviewCount: 3420,
    products: 85,
    customers: 445000,
    coverImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    logoIcon: "🧷",
    logoPlaceholder: "🧷",
    verified: true,
    location: "Nairobi, Kenya",
    established: "2018",
    responseTime: "Within 4 hours",
    tags: ["Wholesale", "Bulk", "Value"]
  },
  {
    id: 12,
    name: "Playful Minds",
    slug: "playful-minds",
    category: "Activity & Development",
    description: "Sensory toys, activity mats, and developmental aids. Support your baby's growth through play.",
    rating: 4.7,
    reviewCount: 1980,
    products: 340,
    customers: 167000,
    coverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=400&fit=crop",
    coverGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    logoIcon: "🎨",
    logoPlaceholder: "🎨",
    verified: true,
    location: "Eldoret, Kenya",
    established: "2020",
    responseTime: "Within 2 hours",
    tags: ["Developmental", "Sensory", "Educational"]
  }
];

// Legacy export for backward compatibility
export const mockVendors = vendorsMock;
export const allVendorsMock = vendorsMock;

// New Arrivals Mock Data - Products added in the last 30 days
export const newArrivalsMock = [
  {
    id: 201,
    name: "Organic Cotton Baby Romper Set",
    brand: "Little Angels",
    rating: 4.9,
    reviewCount: 156,
    price: 34.99,
    originalPrice: 45.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }, { text: "SAVE 24%", color: "red" }],
    categoryId: 1,
    category: "Baby Clothing",
    dateAdded: "2026-02-10",
    vendor: "Little Angels Store",
    description: "Ultra-soft organic cotton romper set. Perfect for sensitive skin."
  },
  {
    id: 202,
    name: "Interactive Learning Cube",
    brand: "GrowBig Kids",
    rating: 4.8,
    reviewCount: 234,
    price: 42.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "Best Seller", color: "red" }],
    categoryId: 2,
    category: "Toys & Games",
    dateAdded: "2026-02-12",
    vendor: "GrowBig Kids",
    description: "6-in-1 activity cube with lights, sounds, and textures for sensory development."
  },
  {
    id: 203,
    name: "Smart Baby Monitor Pro",
    brand: "Safe Haven Baby",
    rating: 4.9,
    reviewCount: 445,
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "SAVE $50", color: "red" }],
    categoryId: 8,
    category: "Baby Safety",
    dateAdded: "2026-02-08",
    vendor: "Safe Haven Baby",
    description: "HD video, night vision, two-way audio, and temperature monitoring."
  },
  {
    id: 204,
    name: "Bamboo Fiber Baby Towel Set",
    brand: "Pure & Gentle",
    rating: 4.8,
    reviewCount: 198,
    price: 24.99,
    originalPrice: 32.99,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }],
    categoryId: 5,
    category: "Bath & Skincare",
    dateAdded: "2026-02-14",
    vendor: "Pure & Gentle",
    description: "Super absorbent, hypoallergenic bamboo towel set. Includes hooded towel and washcloths."
  },
  {
    id: 205,
    name: "Convertible 3-in-1 Stroller",
    brand: "Adventure Baby",
    rating: 4.7,
    reviewCount: 312,
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "Premium", color: "red" }],
    categoryId: 7,
    category: "Strollers & Carriers",
    dateAdded: "2026-02-09",
    vendor: "Adventure Baby",
    description: "Lightweight aluminum frame. Converts to car seat carrier and bassinet."
  },
  {
    id: 206,
    name: "Silicone Feeding Set",
    brand: "Mama's Choice",
    rating: 4.9,
    reviewCount: 267,
    price: 29.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }],
    categoryId: 3,
    category: "Feeding Essentials",
    dateAdded: "2026-02-13",
    vendor: "Mama's Choice",
    description: "BPA-free silicone plates, bowls, and utensils. Dishwasher safe."
  },
  {
    id: 207,
    name: "Montessori Play Gym",
    brand: "Playful Minds",
    rating: 4.8,
    reviewCount: 189,
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "SAVE 20%", color: "red" }],
    categoryId: 2,
    category: "Activity & Development",
    dateAdded: "2026-02-11",
    vendor: "Playful Minds",
    description: "Wooden play gym with hanging toys. Promotes motor skill development."
  },
  {
    id: 208,
    name: "Memory Foam Crib Mattress",
    brand: "Snuggle Nest",
    rating: 4.7,
    reviewCount: 423,
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }],
    categoryId: 4,
    category: "Nursery Furniture",
    dateAdded: "2026-02-07",
    vendor: "Snuggle Nest",
    description: "Dual-sided: firm for infants, plush for toddlers. Waterproof cover included."
  },
  {
    id: 209,
    name: "Soft Sole First Walker Shoes",
    brand: "Happy Feet Store",
    rating: 4.6,
    reviewCount: 178,
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1514090458221-67548f52db36?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "Popular", color: "red" }],
    categoryId: 1,
    category: "Baby Shoes",
    dateAdded: "2026-02-15",
    vendor: "Happy Feet Store",
    description: "Flexible leather shoes designed for new walkers. Non-slip sole."
  },
  {
    id: 210,
    name: "Eco-Friendly Diaper Bundle",
    brand: "Diaper Depot",
    rating: 4.5,
    reviewCount: 567,
    price: 49.99,
    originalPrice: 64.99,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }, { text: "Eco", color: "green" }],
    categoryId: 6,
    category: "Diapers & Wipes",
    dateAdded: "2026-02-06",
    vendor: "Diaper Depot",
    description: "Biodegradable diapers and bamboo wipes. 200-piece bundle."
  },
  {
    id: 211,
    name: "Musical Mobile with Projector",
    brand: "Tiny Treasures",
    rating: 4.9,
    reviewCount: 312,
    price: 54.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }],
    categoryId: 4,
    category: "Nursery Essentials",
    dateAdded: "2026-02-12",
    vendor: "Tiny Treasures",
    description: "Soothing melodies and star projector. Remote control included."
  },
  {
    id: 212,
    name: "Organic Baby Lotion Set",
    brand: "Pure & Gentle",
    rating: 4.8,
    reviewCount: 289,
    price: 22.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }],
    categoryId: 5,
    category: "Bath & Skincare",
    dateAdded: "2026-02-13",
    vendor: "Pure & Gentle",
    description: "Lavender-scented lotion and body wash. Certified organic ingredients."
  },
  {
    id: 213,
    name: "Teething Toy Gift Set",
    brand: "Baby Bliss Shop",
    rating: 4.7,
    reviewCount: 245,
    price: 16.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }, { text: "SAVE 32%", color: "red" }],
    categoryId: 2,
    category: "Toys & Games",
    dateAdded: "2026-02-14",
    vendor: "Baby Bliss Shop",
    description: "Food-grade silicone teethers in various textures. Freezer-safe."
  },
  {
    id: 214,
    name: "Adjustable High Chair",
    brand: "Tiny Treasures",
    rating: 4.8,
    reviewCount: 398,
    price: 139.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }],
    categoryId: 4,
    category: "Nursery Furniture",
    dateAdded: "2026-02-10",
    vendor: "Tiny Treasures",
    description: "Grows with baby from 6 months to toddler. Easy-clean tray."
  },
  {
    id: 215,
    name: "Knit Baby Blanket Set",
    brand: "Snuggle Nest",
    rating: 4.9,
    reviewCount: 412,
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop",
    badges: [{ text: "New", color: "green" }],
    categoryId: 4,
    category: "Bedding & Comfort",
    dateAdded: "2026-02-11",
    vendor: "Snuggle Nest",
    description: "Breathable cotton knit blankets. Set of 3 in different sizes."
  },
  {
    id: 216,
    name: "Baby Carrier with Hip Seat",
    brand: "Adventure Baby",
    rating: 4.7,
    reviewCount: 356,
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=500&fit=crop",
    badges: [{ text: "New Arrival", color: "green" }, { text: "Ergonomic", color: "blue" }],
    categoryId: 7,
    category: "Strollers & Carriers",
    dateAdded: "2026-02-09",
    vendor: "Adventure Baby",
    description: "6 carrying positions. Lumbar support for parents."
  }
];