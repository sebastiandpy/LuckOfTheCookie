export default function Header() {
  return (
    <header className="text-center mb-8 p-4">
      <div className="relative inline-block">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-2 tracking-widest rgb-offset stranger-title"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            letterSpacing: '0.15em',
          }}
        >
          FORTUNE QUEST
        </h1>
        <div className="absolute -top-2 -right-2 animate-pulse">
          <span className="text-sm bg-[#232323] text-[#00FF00] px-2 py-1 border border-[#00FF00] terminal-text" 
            style={{ textShadow: '0 0 5px rgba(0,255,0,0.7)' }}>
            v1.11.84
          </span>
        </div>
      </div>
      <p 
        className="text-md mt-4 mb-3 retro-text crt-flicker"
      >
        C:\&gt; RUN FORTUNE.EXE --UPSIDE-DOWN=FALSE <span className="blinking-cursor">_</span>
      </p>
      <div className="mt-3 mb-2 flex justify-center gap-2">
        <div className="h-1 w-20 bg-[#E50914] animate-pulse"></div>
        <div className="h-1 w-20 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-1 w-20 bg-[#E50914] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <p className="text-xs text-[#00FF00] terminal-text">
        Loading database... Neural network activated... Demogorgon check: SAFE
      </p>
      <div className="mt-3 text-[#FF00FF] text-xs animate-pulse terminal-text">
        * WARNING: Strange signals detected from Hawkins Laboratory *
      </div>
    </header>
  );
}
