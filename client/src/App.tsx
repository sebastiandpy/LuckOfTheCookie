import FortuneContainer from "./components/FortuneContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FortuneClover from "./components/FortuneClover";
import { useEffect, useState } from "react";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPowerOn, setIsPowerOn] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate arcade cabinet power up
    const timer = setTimeout(() => {
      setIsPowerOn(true);
    }, 800);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-black font-mono relative overflow-hidden ${isPowerOn ? 'power-up' : ''}`}>
      {/* Arcade Carpet Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Arcade floor texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23FF00FF' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
             }}
        ></div>
        
        {/* Arcade blinking lights */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full glow-button" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FF00FF', '#00FFFF', '#FFFF00'][i % 3],
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Retro Scanlines Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
          backgroundSize: '4px 4px',
        }}
      ></div>
      
      {/* Arcade Coin Slot Light */}
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-[#FFFF00] rounded-full opacity-20 glow-button z-50"></div>
      
      {/* Arcade Joystick Cursor */}
      <div 
        className="fixed w-50 h-50 z-50 pointer-events-none" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.2) 0%, rgba(0, 255, 255, 0.15) 30%, transparent 70%)',
          boxShadow: '0 0 20px rgba(255, 0, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          mixBlendMode: 'screen',
        }}
      ></div>
      
      {/* Arcade Cabinet Decorations - Token lights */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {!isPowerOn ? null : (
          <>
            <FortuneClover size={12} top="8%" left="12%" delay={0} />
            <FortuneClover size={10} top="15%" right="10%" delay={0.5} />
            <FortuneClover size={14} bottom="12%" left="18%" delay={1} />
            <FortuneClover size={11} bottom="14%" right="15%" delay={1.5} />
            <FortuneClover size={13} top="50%" left="5%" delay={2} />
            <FortuneClover size={9} top="30%" right="7%" delay={2.5} />
          </>
        )}
      </div>

      {/* Arcade Cabinet Frame */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#550055] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#550055] to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-[#550055] to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[#550055] to-transparent"></div>
      </div>
      
      {/* Power Flicker Effect */}
      {isPowerOn && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden screen-flicker">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FF00FF] opacity-30 animate-pulse" 
            style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#00FFFF] opacity-20 animate-pulse" 
            style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-[#FFFF00] opacity-15 animate-pulse" 
            style={{ animationDuration: '5s' }}></div>
        </div>
      )}

      <div className={`container mx-auto px-2 sm:px-4 pt-4 sm:pt-8 pb-8 sm:pb-16 relative z-10 ${!isPowerOn ? 'opacity-0' : 'animate-fade-in'}`}>
        <Header />
        <FortuneContainer />
        <Footer />
      </div>
      
      {/* Arcade cabinet buttons */}
      <div className="fixed bottom-2 left-0 w-full pointer-events-none z-20 flex justify-center">
        <div className="flex space-x-2 opacity-30">
          <div className="w-4 h-4 rounded-full bg-[#FF0000] glow-button"></div>
          <div className="w-4 h-4 rounded-full bg-[#00FF00] glow-button"
               style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 rounded-full bg-[#0000FF] glow-button"
               style={{ animationDelay: '0.4s' }}></div>
          <div className="w-4 h-4 rounded-full bg-[#FFFF00] glow-button"
               style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
