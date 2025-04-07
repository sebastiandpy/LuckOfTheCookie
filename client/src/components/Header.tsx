export default function Header() {
  return (
    <header className="text-center mb-4 sm:mb-6 p-2 sm:p-4">
      {/* Arcade Cabinet Marquee */}
      <div className="inline-block relative">
        {/* Backlit marquee effect */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#330033] to-[#110011] z-0 border border-[#220022]"></div>
        
        {/* Title with neon glow */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest relative z-10"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            letterSpacing: '0.15em',
            color: '#FF00FF',
            textShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF',
          }}
        >
          FORTUNE DETECTOR
        </h1>
        
        {/* Arcade cabinet light blinks */}
        <div className="absolute -top-1 left-4 w-2 h-2 rounded-full bg-[#FFFF00] opacity-80 glow-button"></div>
        <div className="absolute -top-1 right-4 w-2 h-2 rounded-full bg-[#FFFF00] opacity-80 glow-button"></div>
      </div>
      
      {/* Arcade boot text */}
      <div className="mt-3 mb-2 px-2 py-1 inline-block bg-black border border-[#00FFFF]">
        <p className="text-xs sm:text-sm text-[#00FFFF] terminal-text crt-flicker">
          ASTROHACK OS v4.8.4 <span className="blinking-cursor">█</span>
        </p>
      </div>
      
      {/* Insert coin message */}
      <div className="mt-3 mb-2 flex justify-center gap-1 sm:gap-2">
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#FF00FF] animate-pulse"></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FFFF] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#FFFF00] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FFFF] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#FF00FF] animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      {/* Arcade machine game instructions */}
      <div className="text-[10px] sm:text-xs text-[#FFFF00] terminal-text mt-2 screen-flicker">
        PRESS START BUTTON • INSERT COIN • RECEIVE FORTUNE
      </div>
    </header>
  );
}
