export default function Header() {
  return (
    <header className="text-center mb-8 p-4">
      <div className="relative inline-block">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-2 tracking-wider"
          style={{ 
            fontFamily: 'Comic Sans MS, Comic Neue, cursive',
            color: '#00FFFF',
            textShadow: '3px 3px 0 #FF00FF, -3px -3px 0 #FFFF00, 0 0 10px rgba(0,255,255,0.7)'
          }}
        >
          LUCK OF THE DAY.exe
        </h1>
        <div className="absolute -top-2 -right-2 animate-pulse">
          <span className="text-lg bg-[#FF00FF] text-white px-2 py-1 rounded-sm" 
            style={{ fontFamily: 'VT323, monospace' }}>
            v2.0
          </span>
        </div>
      </div>
      <p 
        className="text-md animate-sparkle"
        style={{ 
          fontFamily: 'VT323, monospace',
          color: '#FFFF00',
          textShadow: '1px 1px 0 #00FFFF, 0 0 5px rgba(255,255,255,0.7)'
        }}
      >
        &lt;// your daily dose of good fortune ✨ //&gt;
      </p>
      <div className="mt-3 flex justify-center gap-2">
        <div className="h-2 w-20 bg-[#FF00FF] animate-pulse rounded-sm"></div>
        <div className="h-2 w-20 bg-[#00FFFF] animate-pulse rounded-sm" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-2 w-20 bg-[#FFFF00] animate-pulse rounded-sm" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </header>
  );
}
