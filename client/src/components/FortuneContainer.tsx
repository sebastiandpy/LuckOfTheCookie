import FortuneCookie from "./FortuneCookie";

export default function FortuneContainer() {
  return (
    <main className="max-w-[95%] sm:max-w-md mx-auto p-1 rounded-sm">
      {/* 80s Arcade Cabinet - Mobile Optimized */}
      <div className="border-2 sm:border-4 border-[#550055] bg-[#000000] p-1 sm:p-2 rounded-sm shadow-[0_0_30px_rgba(255,0,255,0.4)] relative overflow-hidden">
        {/* Cabinet Wood Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23550055\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
               backgroundSize: '30px 30px'
             }}
        ></div>
        
        {/* Arcade Cabinet Screen Glow */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
             style={{ 
               background: 'radial-gradient(circle, rgba(255,0,255,0.2) 0%, rgba(0,0,0,0) 70%)' 
             }}></div>
        
        {/* Screen Scan Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-10"
          style={{
            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
            backgroundSize: '4px 4px',
          }}
        ></div>
        
        {/* Arcade Cabinet Marquee */}
        <div className="bg-[#000000] text-[#FF00FF] p-1 flex justify-between items-center border-b border-[#FF00FF] terminal-text relative">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#FFFF00] mr-1 sm:mr-2 animate-pulse"></span>
            <span className="crt-flicker text-xs sm:text-sm font-bold" style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.7)' }}>
              FORTUNE DETECTOR
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-xs">
            <span className="text-[#00FFFF]">HIGH SCORE</span>
            <span className="text-[#FFFF00] animate-pulse">9999</span>
          </div>
        </div>
        
        {/* Arcade Screen Content */}
        <div 
          className="bg-[#000000] p-2 sm:p-4 md:p-6 border border-[#333333] relative"
          style={{
            boxShadow: 'inset 0 0 30px rgba(255, 0, 255, 0.3)',
            backgroundImage: 'radial-gradient(circle at center, rgba(80, 0, 80, 0.2) 0%, transparent 80%)'
          }}
        >
          {/* Arcade style scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-10 z-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 0, 255, 0.15) 0px, rgba(255, 0, 255, 0.15) 1px, transparent 1px, transparent 2px)',
              backgroundSize: '100% 2px'
            }}
          ></div>
          
          {/* Random digital glitch elements */}
          <div className="absolute top-1/4 left-0 w-2 h-1 bg-[#FF00FF] opacity-80 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-3 h-1 bg-[#00FFFF] opacity-70 animate-pulse"
            style={{ animationDuration: '3.7s' }}></div>
          
          {/* Arcade joystick decorations for larger screens */}
          <div className="hidden sm:block absolute -left-6 bottom-10 w-3 h-12 bg-[#333333] rounded-l-md"></div>
          <div className="hidden sm:block absolute -right-6 bottom-10 w-3 h-12 bg-[#333333] rounded-r-md"></div>
          
          <FortuneCookie />
        </div>
        
        {/* Arcade Cabinet Control Panel */}
        <div className="bg-[#110011] mt-1 p-1 text-[10px] sm:text-xs flex justify-between terminal-text border-t border-[#FF00FF]"
             style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}>
          <span className="text-[#FF00FF] crt-flicker">INSERT COIN</span>
          <div className="flex gap-2">
            <span className="text-[#00FFFF]">CREDITS:</span>
            <span className="text-[#FFFF00] animate-pulse">∞</span>
          </div>
        </div>
        
        {/* Cabinet manufacturer label */}
        <div className="absolute bottom-0 right-1 text-[6px] text-[#777777] opacity-60">
          © SEBASTIANDPY
        </div>
      </div>
    </main>
  );
}
