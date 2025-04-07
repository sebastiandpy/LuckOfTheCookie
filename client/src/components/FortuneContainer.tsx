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
        
        {/* Computer Title Bar - like an old DOS prompt */}
        <div className="bg-[#000000] text-[#00FF00] p-1 flex justify-between items-center border-b border-[#00FF00] terminal-text relative">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#00FF00] mr-2 animate-pulse"></span>
            <span className="crt-flicker">FORTUNEQUEST.SYS</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs mr-2">11.06.1985</span>
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
        
        {/* Computer Status Line */}
        <div className="bg-[#000000] mt-1 p-1 text-xs flex justify-between terminal-text border-t border-[#00FF00]">
          <span className="text-[#00FF00]">SECTOR 11 <span className="crt-flicker">SECURE</span></span>
          <div className="flex gap-2">
            <span className="text-[#E50914] animate-pulse">HAWKINS LAB</span>
            <span className="text-[#00FF00]">MEM: 640K</span>
          </div>
        </div>
        
        {/* Stranger Things Easter Egg Message */}
        <div className="mt-1 text-[8px] text-[#FF00FF] opacity-80 terminal-text overflow-hidden whitespace-nowrap">
          <span className="inline-block animate-pulse" style={{ animation: 'typewriter 10s steps(60) infinite' }}>
            &gt; CONNECTING TO UPSIDE DOWN... CONNECTION REFUSED... THE GATE IS CLOSED...
          </span>
        </div>
        
        {/* Computer Hardware Details */}
        <div className="mt-2 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#E50914] animate-pulse rounded-none"></div>
            <div className="w-2 h-2 bg-[#00FF00] animate-pulse rounded-none" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <div className="text-[8px] text-[#666666] terminal-text">MODEL 5150 • IBM-PC COMPATIBLE • BASIC v2.0</div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#00FF00] animate-pulse rounded-none" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-2 h-2 bg-[#E50914] animate-pulse rounded-none" style={{ animationDelay: '0.9s' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
