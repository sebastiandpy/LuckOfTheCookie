interface FortuneCloverProps {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
}

export default function FortuneClover({ 
  size, 
  top, 
  left, 
  right, 
  bottom, 
  delay 
}: FortuneCloverProps) {
  return (
    <div 
      className="fixed animate-sparkle" 
      style={{ 
        top, 
        left, 
        right, 
        bottom, 
        fontSize: `${size}px`, 
        color: '#4CAF50', 
        animationDelay: `${delay}s`,
        zIndex: -1,
        opacity: 0.6,
      }}
    >
      🍀
    </div>
  );
}
