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
  // Random rotation for Windows XP style fun
  const rotation = Math.floor(Math.random() * 40) - 20; // -20 to +20 degrees
  
  // Y2K style colors - light greens only (good luck theme)
  const y2kGreenColors = ["#75ad75", "#91c391", "#66aa66", "#4c9e4c", "#338833"];
  const randomColorIndex = Math.floor(Math.random() * y2kGreenColors.length);
  const color = y2kGreenColors[randomColorIndex];
  
  return (
    <div 
      className="fixed floating-clover" 
      style={{ 
        top, 
        left, 
        right, 
        bottom,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        zIndex: 1,
        opacity: 0.6,
        transform: `rotate(${rotation}deg)`,
        filter: 'none',
        pointerEvents: 'none'
      }}
    >
      <img 
        src="/pixel-clover.svg" 
        alt="Clover"
        width={size}
        height={size}
        style={{
          filter: `hue-rotate(${Math.random() * 20 - 10}deg) brightness(${0.9 + Math.random() * 0.3})`,
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
}
