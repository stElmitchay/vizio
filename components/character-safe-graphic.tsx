export function CharacterSafeGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className={className}>
      <path
        d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50s50-22.4 50-50S77.6 0 50 0zM30 40c0-5.5 4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10zM70 40c0-5.5 4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10zM25 65c-2.8 0-5 2.2-5 5s2.2 5 5 5h50c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z"
        className="fill-accent-purple"
      />
      <rect x="30" y="60" width="40" height="30" rx="4" className="fill-none stroke-text-primary" strokeWidth="2" />
      <circle cx="50" cy="75" r="7" className="fill-text-primary" />
      <path d="M50 68l0 14M45 75l10 0" className="stroke-text-primary" strokeWidth="2" />
    </svg>
  );
} 