interface DividerProps {
  fromColor: string;
  toColor: string;
}

export default function Divider({ fromColor, toColor }: DividerProps) {
  return (
    <div className="section-divider" style={{ backgroundColor: toColor }}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,0 C300,60 900,60 1200,0 L1200,0 L0,0 Z" fill={fromColor} />
      </svg>
    </div>
  );
}
