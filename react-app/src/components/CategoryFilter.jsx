const categories = ["All", "Electronics", "Clothing", "Home"];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        marginBottom: "14px",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            padding: "7px 18px",
            borderRadius: "100px",
            border:
              selected === cat
                ? "1.5px solid rgba(100,120,220,0.35)"
                : "1.5px solid rgba(200,205,225,0.45)",
            background:
              selected === cat
                ? "rgba(255,255,255,0.82)"
                : "rgba(255,255,255,0.38)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: selected === cat ? 600 : 400,
            color: selected === cat ? "#1e2a5e" : "#6b7280",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            boxShadow: selected === cat
              ? "0 2px 10px rgba(120,130,200,0.12)"
              : "none",
            transition: "all 0.18s ease",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}