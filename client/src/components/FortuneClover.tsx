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
  // Randomly choose between clover, star, sparkle, or heart for Y2K vibe
  const y2kEmojis = ["🍀", "⭐", "✨", "💫", "💖"];
  const randomIndex = Math.floor(Math.random() * y2kEmojis.length);
  const emoji = y2kEmojis[randomIndex];
  
  // Random rotation for extra fun
  const rotation = Math.floor(Math.random() * 360);
  
  // Random color from Y2K palette
  const y2kColors = ["#FF00FF", "#00FFFF", "#FFFF00", "#00FF00", "#FF3366"];
  const randomColorIndex = Math.floor(Math.random() * y2kColors.length);
  const color = y2kColors[randomColorIndex];
  
  return (
    <div 
      className="fixed animate-sparkle" 
      style={{ 
        top, 
        left, 
        right, 
        bottom, 
        fontSize: `${size}px`, 
        color: color, 
        animationDelay: `${delay}s`,
        zIndex: -1,
        opacity: 0.8,
        transform: `rotate(${rotation}deg)`,
        filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.7))',
        textShadow: '0 0 5px rgba(255,255,255,0.5)'
      }}
    >
      {emoji}
    </div>
  );
}
