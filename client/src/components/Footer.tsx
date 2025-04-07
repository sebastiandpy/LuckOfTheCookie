export default function Footer() {
  return (
    <footer className="text-center mt-8 sm:mt-12 pb-2 sm:pb-4">
      {/* Matrix Terminal Footer */}
      <div className="inline-block bg-black bg-opacity-70 px-2 sm:px-4 py-2 rounded-sm border border-[#00FF00] shadow-[0_0_10px_rgba(0,255,0,0.2)]">
        <div className="flex items-center justify-center gap-2">
          {/* Matrix binary indicators */}
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#00FF00] opacity-70 animate-pulse"></div>
          <p className="terminal-text text-xs sm:text-sm text-[#00FF00]" style={{ textShadow: '0 0 5px rgba(0, 255, 0, 0.5)' }}>
            made by sebastiandpy :)
          </p>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#00FF00] opacity-70 animate-pulse"></div>
        </div>
        
        {/* Matrix style system section */}
        <div className="mt-2 border-t border-[#003300] pt-1">
          <div className="text-[8px] sm:text-[10px] text-[#00FF00] terminal-text">
            <span className="animate-pulse">CONNECTION:</span> SECURE • <span>SIGNAL:</span> STRONG
          </div>
          <div className="text-[8px] sm:text-[10px] text-[#00FF00] opacity-70 terminal-text">
            © 1984-2025 • THE MATRIX HAS YOU • FOLLOW THE WHITE RABBIT
          </div>
        </div>
      </div>
      
      {/* Matrix digital rain effect */}
      <div className="mt-2 text-center overflow-hidden h-4 relative">
        <div className="absolute inset-0 flex justify-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="mx-0.5 text-[6px] text-[#00FF00] opacity-60 animate-matrix-rain" 
                 style={{ animationDuration: `${2 + i * 0.2}s`, animationDelay: `${i * 0.1}s` }}>
              1<br/>0<br/>1<br/>0
            </div>
          ))}
        </div>
      </div>
      
      {/* Creator signature */}
      <div className="mt-3 text-[6px] text-center text-[#00FF00] opacity-30 terminal-text">
        SEBASTIANDPY NETWORK • NODE C-137 • DIMENSION 42
      </div>
    </footer>
  );
}
