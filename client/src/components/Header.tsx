export default function Header() {
  return (
    <header className="text-center mb-4 sm:mb-6 p-2 sm:p-4">
      {/* Matrix style title container */}
      <div className="inline-block relative px-4 py-2">
        {/* Matrix style background */}
        <div className="absolute inset-0 z-0 border-2 border-[#00FF00] bg-[#001100] shadow-[0_0_15px_rgba(0,255,0,0.4)]"></div>
        
        {/* 80s style title with Matrix glow */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest relative z-10"
          style={{ 
            fontFamily: '"VT323", monospace',
            letterSpacing: '0.1em',
            color: '#00FF00',
            textShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
          }}
        >
          FORTUNE DETECTOR
        </h1>
        
        {/* Matrix style digital glitch effect */}
        <div className="absolute top-1 left-4 w-2 h-1 bg-[#00FF00] opacity-60 animate-pulse"></div>
        <div className="absolute top-1 right-4 w-2 h-1 bg-[#00FF00] opacity-60 animate-pulse"></div>
      </div>
      
      {/* Matrix boot text */}
      <div className="mt-3 mb-2 px-2 py-1 inline-block bg-black border border-[#00FF00]">
        <p className="text-xs sm:text-sm text-[#00FF00] terminal-text crt-flicker">
          CONNECTING TO MATRIX <span className="blinking-cursor">█</span>
        </p>
      </div>
      
      {/* Matrix code separator */}
      <div className="mt-3 mb-2 flex justify-center gap-1 sm:gap-2">
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FF00] animate-pulse"></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      {/* Matrix style instructions */}
      <div className="text-[10px] sm:text-xs text-[#00FF00] terminal-text mt-2 screen-flicker">
        TAP THE COOKIE • RECEIVE WISDOM • FIND YOUR PATH
      </div>
    </header>
  );
}
