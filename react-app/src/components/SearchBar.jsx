export default function SearchBar({ value, onChange }) {
  return (
    <div
      style={{
        /* ensure the search bar can grow but stays centered and doesn't change height */
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.75)",
        boxShadow: "0 4px 24px 0 rgba(180,185,220,0.13)",
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "14px",
      }}
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7.5" stroke="#a0a8c0" strokeWidth="1.8" />
        <path d="M17 17l3.5 3.5" stroke="#a0a8c0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="What would you like to find today?"
        style={{
          flex: 1,
          border: "none",
          background: "transparent",
          outline: "none",
          fontSize: "15px",
          fontFamily: "'DM Sans', sans-serif",
          color: "#2d3250",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          padding: "10px 0",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "4px", opacity: 0.45 }}>
        <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#6b7280" }}>⌘</span>
        <span style={{ fontSize: "12px", color: "#6b7280" }}>+</span>
        <span style={{ fontSize: "12px", color: "#6b7280" }}>╱</span>
      </div>
    </div>
  );
}