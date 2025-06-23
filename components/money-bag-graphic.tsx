export function MoneyBagGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className={className}>
      <g transform="rotate(10 50 50)">
        <circle cx="50" cy="50" r="48" className="fill-accent-yellow"/>
        <path d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10Z" className="fill-accent-peach"/>
        <text className="fill-text-primary font-mono uppercase" style={{ fontSize: '8px', letterSpacing: '0.1px' }} textAnchor="middle">
            <tspan x="50" y="45">spendle</tspan>
            <tspan x="50" y="58">squads</tspan>
            <tspan x="50" y="71">spendle</tspan>
        </text>
        <path d="M50 25 C 45 25, 40 30, 40 35 L 40 45 L 60 45 L 60 35 C 60 30, 55 25, 50 25 Z" className="fill-text-primary" />
        <circle cx="50" cy="58" r="12" className="fill-text-primary" />
        <text className="fill-highlight-bright font-sans" style={{ fontSize: '12px' }} textAnchor="middle" x="50" y="62">$</text>
      </g>
    </svg>
  );
} 