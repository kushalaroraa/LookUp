export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "36px",
      }}
    >
      <nav
        style={{
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.78)",
          boxShadow: "0 4px 24px 0 rgba(180,185,220,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
          padding: "10px 32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 650,
            color: "#1e2a5e",
            letterSpacing: "-0.03em",
          }}
        >
          Look
        </span>
        <span
          style={{
            fontSize: "15px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            color: "#7b87c0",
            letterSpacing: "-0.03em",
          }}
        >
          Up
        </span>
      </nav>
    </div>
  );
}