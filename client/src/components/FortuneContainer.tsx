import FortuneCookie from "./FortuneCookie";

export default function FortuneContainer() {
  return (
    <main className="max-w-md mx-auto p-1 rounded-sm">
      {/* Y2K Window Border */}
      <div className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] p-2 rounded-sm shadow-[0_0_20px_rgba(255,0,255,0.7)]">
        {/* Window Title Bar */}
        <div className="bg-[#0000AA] text-white p-1 flex justify-between items-center" style={{ fontFamily: 'VT323, monospace' }}>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-[#FFFF00] mr-2"></span>
            <span>FORTUNE.EXE</span>
          </div>
          <div className="flex gap-1">
            <button className="w-4 h-4 bg-white text-black text-xs flex items-center justify-center">_</button>
            <button className="w-4 h-4 bg-white text-black text-xs flex items-center justify-center">□</button>
            <button className="w-4 h-4 bg-white text-black text-xs flex items-center justify-center">×</button>
          </div>
        </div>
        
        {/* Window Content */}
        <div className="bg-[#000033] bg-opacity-90 p-6 rounded-sm">
          <FortuneCookie />
        </div>
        
        {/* Status Bar */}
        <div className="bg-[#C0C0C0] mt-1 p-1 text-xs flex justify-between" style={{ fontFamily: 'VT323, monospace' }}>
          <span>Ready</span>
          <span className="animate-pulse">Loading... 100%</span>
        </div>
      </div>
    </main>
  );
}
