export default function Footer() {
  return (
    <footer className="text-center mt-12 pb-4">
      <div className="inline-block bg-black bg-opacity-70 px-4 py-2 rounded-sm border-t-2 border-l-2 border-r border-b border-[#FF00FF]">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-[#FF00FF] rounded-none animate-pulse"></div>
          <p className="retro-text text-sm">
            made by sebastiandpy :)
          </p>
          <div className="w-3 h-3 bg-[#FF00FF] rounded-none animate-pulse"></div>
        </div>
        <div className="mt-2 border-t border-[#00FFFF33] pt-1">
          <div className="text-[10px] text-[#8844AA] terminal-text">
            <span className="text-[#FF00FF]">STATUS:</span> MULTI-DIMENSIONAL ACCESS GRANTED • <span className="text-[#FF00FF]">SYSTEM:</span> ONLINE
          </div>
          <div className="text-[10px] text-white opacity-70 terminal-text">
            © 1984-2025 • DIMENSION C-137 • REALITY BRANCH #4402
          </div>
        </div>
      </div>
      <div className="mt-2 text-[8px] text-center text-[#00FFFF] terminal-text opacity-60">
        REALITY STABILIZERS ACTIVE • PLEASE STAY WITHIN DESIGNATED TEMPORAL BOUNDARIES
      </div>
    </footer>
  );
}
