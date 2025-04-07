import FortuneCookie from "./FortuneCookie";

export default function FortuneContainer() {
  return (
    <main className="max-w-md mx-auto p-1 rounded-sm">
      {/* 80s Retro Computer Monitor */}
      <div className="border-4 border-[#444444] bg-[#000000] p-2 rounded-sm shadow-[0_0_30px_rgba(239,53,53,0.3)] relative">
        {/* Monitor Screen Glow Effect */}
        <div className="absolute inset-0 bg-[#E50914] opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        {/* Computer Scan Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-10"
          style={{
            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
            backgroundSize: '4px 4px',
          }}
        ></div>
        
        {/* Computer Title Bar - simplified */}
        <div className="bg-[#000000] text-[#00FF00] p-1 flex justify-between items-center border-b border-[#00FF00] terminal-text relative">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#00FF00] mr-2 animate-pulse"></span>
            <span className="crt-flicker">FORTUNE_DETECTOR.SYS</span>
          </div>
          <div className="flex items-center">
            <span className="blinking-cursor">█</span>
          </div>
        </div>
        
        {/* Computer Screen Content */}
        <div 
          className="bg-[#000000] p-6 border border-[#333333] relative"
          style={{
            boxShadow: 'inset 0 0 30px rgba(0, 255, 0, 0.2)',
            backgroundImage: 'radial-gradient(circle at center, rgba(0, 80, 0, 0.2) 0%, transparent 80%)'
          }}
        >
          {/* Random digital glitch element - small and subtle */}
          <div className="absolute top-1/4 left-0 w-2 h-1 bg-[#FF00FF] opacity-80 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-3 h-1 bg-[#00FFFF] opacity-70 animate-pulse"
            style={{ animationDuration: '3.7s' }}></div>
          
          <FortuneCookie />
        </div>
        
        {/* Computer Status Line - simplified */}
        <div className="bg-[#000000] mt-1 p-1 text-xs flex justify-between terminal-text border-t border-[#00FF00]">
          <span className="text-[#00FF00] crt-flicker">SYSTEM READY</span>
          <div className="flex gap-2">
            <span className="text-[#00FF00]">STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </main>
  );
}
