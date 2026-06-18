import { useState, useMemo } from "react";
import { useConfigurables } from "~/modules/configurables";
import type { TProduct } from "~/modules/configurables/src/constants/configurables.default";
import { cn } from "~/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// ProductCard
// ─────────────────────────────────────────────────────────────────────────────
function ProductCard({
  product,
  shopCTALabel,
}: {
  product: TProduct;
  shopCTALabel: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
      }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        {!imgError && product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Category badge */}
        {product.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: "#52B788" }}>
            {product.category}
          </span>
        )}

        {/* Product badge (Best Seller, etc.) */}
        {product.badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: "#2D6A4F" }}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Store name */}
        {product.storeName && (
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#6B7280" }}>
            {product.storeName}
          </span>
        )}

        {/* Product name */}
        <h3 className="font-serif font-bold text-lg leading-snug line-clamp-2" style={{ color: "#1A1A2E" }}>
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#6B7280" }}>
            {product.description}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 gap-3">
          {product.price && (
            <span className="text-xl font-semibold" style={{ color: "#1A1A2E" }}>
              {product.price}
            </span>
          )}

          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#F4A261" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#E8894A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#F4A261";
            }}
          >
            {shopCTALabel || "Shop Now"}
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FeaturedBanner
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedBanner({
  heroTitle,
  heroSubtitle,
  heroCTALabel,
  heroImage,
  onCTAClick,
}: {
  heroTitle: string;
  heroSubtitle: string;
  heroCTALabel: string;
  heroImage?: string;
  onCTAClick: () => void;
}) {
  return (
    <section
      className="relative w-full overflow-hidden rounded-3xl"
      style={{ minHeight: "420px" }}
    >
      {/* Background */}
      {heroImage ? (
        <>
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(45,106,79,0.88) 0%, rgba(82,183,136,0.72) 100%)" }} />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2D6A4F 0%, #40916C 50%, #52B788 100%)" }}
        />
      )}

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 bg-white" />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full opacity-10 bg-white" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full min-h-[420px] px-8 md:px-16 py-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-widest uppercase">Curated for you</span>
        </div>

        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
          {heroTitle}
        </h1>

        <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-8">
          {heroSubtitle}
        </p>

        <button
          onClick={onCTAClick}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white uppercase tracking-wide text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          style={{ backgroundColor: "#F4A261" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#E8894A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#F4A261";
          }}
        >
          {heroCTALabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────────────────────────
function Navbar({
  appName,
  logoUrl,
  categories,
  activeCategory,
  onCategoryChange,
}: {
  appName: string;
  logoUrl: string;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / App Name */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {logoUrl && !logoUrl.startsWith("FILL_") ? (
              <img src={logoUrl} alt={appName} className="h-8 w-auto" />
            ) : (
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#2D6A4F" }}>
                {appName.charAt(0)}
              </div>
            )}
            <span className="font-serif font-bold text-xl" style={{ color: "#2D6A4F" }}>
              {appName}
            </span>
          </a>

          {/* Desktop categories */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                  activeCategory === cat
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
                style={activeCategory === cat ? { backgroundColor: "#2D6A4F" } : {}}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile categories dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { onCategoryChange(cat); setMenuOpen(false); }}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat ? "text-white" : "text-gray-600 bg-gray-100"
                )}
                style={activeCategory === cat ? { backgroundColor: "#2D6A4F" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CategoryFilter (horizontal scroll chips)
// ─────────────────────────────────────────────────────────────────────────────
function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeCategory === cat
              ? "text-white shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          )}
          style={activeCategory === cat ? { backgroundColor: "#2D6A4F" } : {}}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
function Footer({
  appName,
  footerText,
  footerDisclaimer,
  socialLinks,
}: {
  appName: string;
  footerText: string;
  footerDisclaimer: string;
  socialLinks?: { instagram?: string; facebook?: string; twitter?: string; youtube?: string };
}) {
  const year = new Date().getFullYear();

  const hasSocial = socialLinks && (
    socialLinks.instagram || socialLinks.facebook || socialLinks.twitter || socialLinks.youtube
  );

  return (
    <footer className="mt-24 border-t border-gray-200" style={{ backgroundColor: "#1A1A2E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="font-serif font-bold text-xl text-white">{appName}</span>
            {footerText && (
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{footerText}</p>
            )}
          </div>

          {hasSocial && (
            <div className="flex items-center gap-3">
              {socialLinks?.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {socialLinks?.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {socialLinks?.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {footerDisclaimer && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-500 leading-relaxed">{footerDisclaimer}</p>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-600">
          &copy; {year} {appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Index Page
// ─────────────────────────────────────────────────────────────────────────────
export default function IndexPage() {
  const { config, loading } = useConfigurables();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = config?.categories ?? ["All"];
  const products = config?.products ?? [];
  const showFeatured = config?.showFeaturedSection !== false;

  const featuredProducts = useMemo(
    () => products.filter((p: TProduct) => p.featured),
    [products]
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p: TProduct) => p.category === activeCategory);
  }, [products, activeCategory]);

  const shopCTALabel = config?.shopCTALabel || "Shop Now";

  // Grid column class based on productsPerRow
  const perRow = config?.productsPerRow ?? 3;
  const gridClass = perRow === 4
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : perRow === 2
    ? "grid-cols-1 sm:grid-cols-2"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F9F6F0" }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: "#2D6A4F", borderTopColor: "transparent" }} />
          <p className="text-sm font-medium" style={{ color: "#6B7280" }}>Loading...</p>
        </div>
      </div>
    );
  }

  const scrollToProducts = () => {
    document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F6F0" }}>
      {/* Navigation */}
      <Navbar
        appName={config?.appName || "JohnCarefulness"}
        logoUrl={config?.logoUrl || ""}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <FeaturedBanner
            heroTitle={config?.heroTitle || "Discover Products You'll Love"}
            heroSubtitle={config?.heroSubtitle || "Hand-picked recommendations from trusted stores."}
            heroCTALabel={config?.heroCTALabel || "Shop Now"}
            heroImage={config?.heroImage || ""}
            onCTAClick={scrollToProducts}
          />
        </section>

        {/* Featured Products */}
        {showFeatured && featuredProducts.length > 0 && (
          <section className="py-8" id="featured-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif font-bold text-2xl md:text-3xl" style={{ color: "#1A1A2E" }}>
                {config?.featuredSectionTitle || "Top Picks For You"}
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "#F4A261" }}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
            <div className={cn("grid gap-6", gridClass)}>
              {featuredProducts.map((product: TProduct) => (
                <ProductCard key={product.id} product={product} shopCTALabel={shopCTALabel} />
              ))}
            </div>
          </section>
        )}

        {/* All Products Section */}
        <section className="py-8" id="products-section">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="font-serif font-bold text-2xl md:text-3xl" style={{ color: "#1A1A2E" }}>
              {config?.allProductsSectionTitle || "Browse All Products"}
            </h2>
            <span className="text-sm font-medium" style={{ color: "#6B7280" }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Category filter chips */}
          <div className="mb-6">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className={cn("grid gap-6", gridClass)}>
              {filteredProducts.map((product: TProduct) => (
                <ProductCard key={product.id} product={product} shopCTALabel={shopCTALabel} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F0EDE7" }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ color: "#6B7280" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-2" style={{ color: "#1A1A2E" }}>
                No products found
              </h3>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Try selecting a different category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                Show All Products
              </button>
            </div>
          )}
        </section>

        {/* Trust badge strip */}
        <section className="py-12">
          <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            {[
              { icon: "🔒", label: "Secure Links", desc: "All affiliate links are vetted" },
              { icon: "✅", label: "Curated Picks", desc: "Carefully selected products" },
              { icon: "💬", label: "Honest Reviews", desc: "Straightforward descriptions" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-1.5">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>{item.label}</span>
                <span className="text-xs" style={{ color: "#6B7280" }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        appName={config?.appName || "JohnCarefulness"}
        footerText={config?.footerText || ""}
        footerDisclaimer={config?.footerDisclaimer || ""}
        socialLinks={config?.socialLinks}
      />
    </div>
  );
}
