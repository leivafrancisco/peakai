interface LogoProps {
  size?: number;
  className?: string;
  dark?: boolean;
}

export default function Logo({ size = 1, className = "", dark = true }: LogoProps) {
  const tileSize = 40 * size;
  const wordmarkColor = dark ? "#ffffff" : "#080E1A";

  return (
    <span className={`inline-flex items-center gap-${size > 0.8 ? "3" : "2.5"} ${className}`}>
      {/* Mark — blue gradient tile with mountain glyph */}
      <svg
        width={tileSize}
        height={tileSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="tileBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0077FF" />
            <stop offset="100%" stopColor="#0066DD" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#tileBg)" />
        {/* Mountain path — white base */}
        <path
          d="M8 28L16 12L20 21L32 8"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Mint accent on rising segment */}
        <path
          d="M16 12L20 21"
          stroke="#00F5C4"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: `${Math.round(20 * size)}px`,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: wordmarkColor,
            lineHeight: 1,
          }}
        >
          Peak<span style={{ color: "#0077FF" }}>AI</span>
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: `${Math.round(8 * size)}px`,
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: dark ? "rgba(255,255,255,0.4)" : "#94a3b8",
            textTransform: "uppercase",
            marginTop: "3px",
          }}
        >
          by Innovate with Peak
        </span>
      </span>
    </span>
  );
}
