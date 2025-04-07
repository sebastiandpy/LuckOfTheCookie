export default function Footer() {
  return (
    <footer className="text-center mt-12 pb-4">
      <div className="inline-block bg-black bg-opacity-70 px-4 py-2 rounded-sm border border-[#00FFFF]">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-[#FF00FF] rounded-full animate-pulse"></div>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'VT323, monospace',
              color: '#00FFFF',
              textShadow: '0 0 3px rgba(0,255,255,0.7)'
            }}
          >
            made by sebastiandpy :)
          </p>
          <div className="w-3 h-3 bg-[#FFFF00] rounded-full animate-pulse"></div>
        </div>
        <div className="mt-1 text-[10px] text-white opacity-70" style={{ fontFamily: 'VT323, monospace' }}>
          © 2000-2025 • WINDOWS ME COMPATIBLE
        </div>
      </div>
    </footer>
  );
}
