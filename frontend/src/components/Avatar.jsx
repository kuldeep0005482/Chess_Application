export default function Avatar({ initials, ring, size = 38 }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 rounded-[11px] font-mono font-semibold text-white"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
        boxShadow: ring ? "0 0 0 2px rgba(124,92,255,0.6)" : "none",
      }}
    >
      {initials}
    </div>
  );
}
