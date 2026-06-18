/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  storeName: string;
  affiliateUrl: string;
  featured: boolean;
  badge: string;
};

export type TSocialLinks = {
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  tagline?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCTALabel?: string;
  heroImage?: string;
  shopCTALabel?: string;
  categories?: string[];
  products?: TProduct[];
  featuredSectionTitle?: string;
  allProductsSectionTitle?: string;
  footerText?: string;
  footerDisclaimer?: string;
  socialLinks?: TSocialLinks;
  showFeaturedSection?: boolean;
  productsPerRow?: number;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "JohnCarefulness",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#2D6A4F",
    secondary: "#F4A261",
    accent: "#52B788",
  },
  tagline: "Curated products you can trust",
  heroTitle: "Discover Products You'll Love",
  heroSubtitle: "Hand-picked recommendations from trusted stores — find exactly what you need without the endless searching.",
  heroCTALabel: "Shop Now",
  heroImage: "",
  shopCTALabel: "Shop Now",
  categories: ["All", "Electronics", "Home & Kitchen", "Fashion", "Beauty", "Sports", "Books"],
  featuredSectionTitle: "Top Picks For You",
  allProductsSectionTitle: "Browse All Products",
  footerText: "JohnCarefulness — Your trusted source for curated product recommendations.",
  footerDisclaimer: "As an affiliate, we may earn a commission from qualifying purchases made through links on this site, at no extra cost to you.",
  socialLinks: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
  },
  showFeaturedSection: true,
  productsPerRow: 3,
  products: [
    {
      id: "p1",
      name: "Sony WH-1000XM5 Wireless Headphones",
      description: "Industry-leading noise cancellation with up to 30 hours battery life. Perfect for commutes and work-from-home.",
      price: "$279.99",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      category: "Electronics",
      storeName: "Amazon",
      affiliateUrl: "https://amazon.com",
      featured: true,
      badge: "Best Seller",
    },
    {
      id: "p2",
      name: "Instant Pot Duo 7-in-1",
      description: "Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer all in one.",
      price: "$89.99",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      category: "Home & Kitchen",
      storeName: "Amazon",
      affiliateUrl: "https://amazon.com",
      featured: true,
      badge: "Top Pick",
    },
    {
      id: "p3",
      name: "Kindle Paperwhite (2024)",
      description: "300 ppi glare-free display, waterproof, 3 months of battery life. The best e-reader on the market.",
      price: "$139.99",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      category: "Electronics",
      storeName: "Amazon",
      affiliateUrl: "https://amazon.com",
      featured: false,
      badge: "",
    },
    {
      id: "p4",
      name: "Levi's 511 Slim Fit Jeans",
      description: "Classic slim fit with just the right amount of stretch for all-day comfort. Available in multiple washes.",
      price: "$59.50",
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      category: "Fashion",
      storeName: "Levi's",
      affiliateUrl: "https://levis.com",
      featured: false,
      badge: "",
    },
    {
      id: "p5",
      name: "CeraVe Moisturizing Cream",
      description: "Developed with dermatologists. Provides 24-hour hydration with 3 essential ceramides and hyaluronic acid.",
      price: "$18.99",
      imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80",
      category: "Beauty",
      storeName: "Ulta",
      affiliateUrl: "https://ulta.com",
      featured: true,
      badge: "Dermatologist Pick",
    },
    {
      id: "p6",
      name: "Hydro Flask 32 oz Water Bottle",
      description: "TempShield insulation keeps drinks cold 24 hours, hot 12 hours. Durable stainless steel, BPA-free.",
      price: "$44.95",
      imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      category: "Sports",
      storeName: "REI",
      affiliateUrl: "https://rei.com",
      featured: false,
      badge: "",
    },
    {
      id: "p7",
      name: "Atomic Habits by James Clear",
      description: "The #1 New York Times bestseller. A proven framework for improving 1% every day through tiny changes.",
      price: "$14.99",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
      category: "Books",
      storeName: "Amazon",
      affiliateUrl: "https://amazon.com",
      featured: false,
      badge: "#1 Bestseller",
    },
    {
      id: "p8",
      name: "Anker 65W USB-C Charger",
      description: "Compact, fast-charging 65W GaN charger. Charges MacBook, iPad, and iPhone simultaneously.",
      price: "$35.99",
      imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      category: "Electronics",
      storeName: "Amazon",
      affiliateUrl: "https://amazon.com",
      featured: false,
      badge: "Editor's Choice",
    },
    {
      id: "p9",
      name: "Dyson V15 Detect Cordless Vacuum",
      description: "Laser technology reveals hidden dust. Automatically adapts suction across carpet and hard floors.",
      price: "$699.99",
      imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
      category: "Home & Kitchen",
      storeName: "Dyson",
      affiliateUrl: "https://dyson.com",
      featured: true,
      badge: "Premium Pick",
    },
  ],
};
