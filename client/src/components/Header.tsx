export default function Header() {
  return (
    <header className="text-center mb-8 p-4">
      <div className="inline-block">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-2 tracking-widest rgb-offset stranger-title"
          style={{ 
            fontFamily: '"Press Start 2P", cursive',
            letterSpacing: '0.15em',
          }}
        >
          FORTUNE DETECTOR
        </h1>
      </div>
      <p 
        className="text-md mt-4 mb-3 retro-text crt-flicker"
      >
        C:\&gt; RUN DETECTOR.EXE <span className="blinking-cursor">_</span>
      </p>
      <div className="mt-3 mb-2 flex justify-center gap-2">
        <div className="h-1 w-20 bg-[#E50914] animate-pulse"></div>
        <div className="h-1 w-20 bg-[#00FF00] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-1 w-20 bg-[#E50914] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </header>
  );
}
