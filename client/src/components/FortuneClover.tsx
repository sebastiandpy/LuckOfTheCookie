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
  // Randomly choose between pixel art characters for 80s vibe
  const pixelChars = ["🍀", "★", "✦", "■", "▲", "□", "◊", "●", "▢"];
  const randomIndex = Math.floor(Math.random() * pixelChars.length);
  const pixelChar = pixelChars[randomIndex];
  
  // Random rotation for extra fun
  const rotation = Math.floor(Math.random() * 360);
  
  // Random color from 80s/Stranger Things palette
  const retroColors = ["#FF00FF", "#00FFFF", "#FF0000", "#00FF00", "#8800FF", "#FF00AA"];
  const randomColorIndex = Math.floor(Math.random() * retroColors.length);
  const color = retroColors[randomColorIndex];
  
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
        opacity: 0.7,
        transform: `rotate(${rotation}deg)`,
        filter: `drop-shadow(0 0 5px ${color})`,
        fontFamily: 'monospace',
        textShadow: `0 0 8px ${color}`,
        // Pixel art rendering
        imageRendering: 'pixelated',
        fontWeight: 'bold'
      }}
    >
      {pixelChar}
    </div>
  );
}
