import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div
        style={{
          padding: "36px 20px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#a0a8c0",
          letterSpacing: "-0.01em",
        }}
      >
        No products found
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}