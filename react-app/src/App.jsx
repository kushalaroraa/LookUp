import { useState } from "react";
// Navbar removed per layout refactor — brand text kept in-place
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import products from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #dce4f5 0%, #e8ecf8 40%, #d8e0f2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 16px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* Brand name (kept) */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            <span
              style={{
                fontSize: "60px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 670,
                color: "#1e2a5e",
                letterSpacing: "-0.04em",
              }}
            >
              Look
            </span>
            <span
              style={{
                fontSize: "60px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 320,
                color: "#7b87c0",
                letterSpacing: "-0.04em",
              }}
            >
              Up
            </span>
          </div>

          {/* Search */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <SearchBar value={search} onChange={setSearch} />

            {/* Category Filter */}
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />

            {/* Product List — wider card */}
            <div
              style={{
                background: "rgba(255,255,255,0.52)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.72)",
                boxShadow: "0 8px 32px 0 rgba(180,185,220,0.16)",
                overflow: "hidden",
                padding: "20px",
              }}
            >
              <ProductList products={filtered} />
            </div>
          </div>

          {/* Result count */}
          <div
            style={{
              marginTop: "12px",
              textAlign: "right",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "#9ba3bf",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </>
  );
}