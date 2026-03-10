export default function ProductItem({ product }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 20px",
        transition: "background 0.18s, transform 0.12s",
        borderRadius: "12px",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.45)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span
          style={{
            fontSize: "14.5px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            color: "#1e2a5e",
            letterSpacing: "-0.01em",
          }}
        >
          {product.name}
        </span>
        <span
          style={{
            fontSize: "12px",
            fontFamily: "'DM Sans', sans-serif",
            color: "#9ba3bf",
            fontWeight: 400,
          }}
        >
          {product.category}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          style={{
            fontSize: "13.5px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            color: "#3d4f8a",
            letterSpacing: "-0.01em",
          }}
        >
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#b0b7cc", fontSize: "16px", cursor: "pointer" }}>···</span>
          <span
            style={{
              color: "#b0b7cc",
              fontSize: "13px",
              cursor: "pointer",
              transform: "rotate(-45deg)",
              display: "inline-block",
            }}
          >
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}