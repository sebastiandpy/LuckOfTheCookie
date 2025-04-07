export default function Footer() {
  return (
    <footer className="text-center mt-8 sm:mt-12 pb-2 sm:pb-4">
      {/* Arcade cabinet control panel */}
      <div className="inline-block bg-black bg-opacity-70 px-2 sm:px-4 py-2 rounded-sm border border-[#FF00FF] shadow-[0_0_10px_rgba(255,0,255,0.2)]">
        <div className="flex items-center justify-center gap-2">
          {/* Arcade cabinet button lights */}
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF00FF] rounded-full glow-button"></div>
          <p className="terminal-text text-xs sm:text-sm text-[#FF00FF]" style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.5)' }}>
            made by sebastiandpy :)
          </p>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FF00FF] rounded-full glow-button"></div>
        </div>
        
        {/* Arcade system specs section */}
        <div className="mt-2 border-t border-[#550055] pt-1">
          <div className="text-[8px] sm:text-[10px] text-[#00FFFF] terminal-text">
            <span className="animate-pulse">SYSTEM STATUS:</span> CREDITS LOADED • <span>ARCADE VERSION:</span> 1.2.5
          </div>
          <div className="text-[8px] sm:text-[10px] text-[#FFFF00] opacity-70 terminal-text">
            © 1984-2025 • FORTUNE DETECTOR ARCADE • HIGH SCORE: 99999
          </div>
        </div>
      </div>
      
      {/* Arcade instructions at bottom of cabinet */}
      <div className="mt-2 text-[7px] sm:text-[8px] text-center text-[#FF00FF] terminal-text opacity-60">
        INSERT COIN TO PLAY • MULTIPLE TOKENS FOR ADDITIONAL FORTUNES • NO REFUNDS
      </div>
      
      {/* Signature etched in arcade cabinet */}
      <div className="mt-3 text-[6px] text-center text-[#777777] opacity-30 terminal-text">
        SEBASTIANDPY ARCADE SYSTEMS • MODEL FD-8401 • MANUFACTURED IN DIMENSION C-137
      </div>
    </footer>
  );
}
