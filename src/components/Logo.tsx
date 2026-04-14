interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 1, className = "" }: LogoProps) {
  const w = 320 * size;
  const h = 120 * size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="peakGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F5C4" />
          <stop offset="100%" stopColor="#0077FF" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00F5C4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0077FF" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base triangle */}
      <polygon
        points="56,90 90,38 124,90"
        fill="url(#glowGrad)"
        stroke="url(#peakGrad)"
        strokeWidth="2.2"
        filter="url(#glow)"
      />
      {/* Inner peak accent */}
      <polygon points="72,90 90,55 108,90" fill="url(#peakGrad)" opacity="0.9" />

      {/* Circuit nodes */}
      <circle cx="90" cy="38" r="3.5" fill="#00F5C4" filter="url(#glow)" />
      <circle cx="56" cy="90" r="3" fill="#0077FF" filter="url(#glow)" />
      <circle cx="124" cy="90" r="3" fill="#0077FF" filter="url(#glow)" />

      {/* Horizontal circuit lines */}
      <line x1="124" y1="90" x2="140" y2="90" stroke="#0077FF" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
      <line x1="30" y1="90" x2="56" y2="90" stroke="#0077FF" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
      <line x1="90" y1="20" x2="90" y2="38" stroke="#00F5C4" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="90" cy="17" r="2" fill="#00F5C4" opacity="0.5" />

      {/* Wordmark */}
      <text
        x="152"
        y="76"
        fontFamily="'Syne', 'Trebuchet MS', sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="2"
        fill="white"
      >
        <tspan>PEAK </tspan>
        <tspan fill="url(#peakGrad)">AI</tspan>
      </text>
    </svg>
  );
}
