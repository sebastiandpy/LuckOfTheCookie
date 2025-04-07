import FortuneContainer from "./components/FortuneContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FortuneClover from "./components/FortuneClover";
import { useEffect, useState } from "react";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black font-mono relative overflow-hidden">
      {/* Retro 80s Stars Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Starfield effect */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Retro Scanlines Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
          backgroundSize: '4px 4px',
        }}
      ></div>
      
      {/* RGB Offset Effect for text is now in index.css */}
      
      {/* Stranger Things inspired cursor - flashlight effect */}
      <div 
        className="fixed w-60 h-60 z-50 pointer-events-none" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(220, 0, 45, 0.2) 0%, rgba(80, 10, 165, 0.15) 40%, transparent 70%)',
          boxShadow: '0 0 30px rgba(180, 20, 20, 0.3), 0 0 50px rgba(90, 20, 120, 0.2)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          mixBlendMode: 'screen',
        }}
      ></div>
      
      {/* Background Decorative Elements - Pixel Clovers */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <FortuneClover size={20} top="10%" left="10%" delay={0} />
        <FortuneClover size={14} top="15%" right="15%" delay={0.5} />
        <FortuneClover size={16} bottom="20%" left="20%" delay={1} />
        <FortuneClover size={18} bottom="15%" right="8%" delay={1.5} />
        <FortuneClover size={12} top="40%" left="5%" delay={2} />
        <FortuneClover size={15} top="30%" right="5%" delay={2.5} />
        <FortuneClover size={17} bottom="30%" left="50%" delay={3} />
        <FortuneClover size={22} top="5%" left="30%" delay={0.7} />
        <FortuneClover size={19} top="25%" right="25%" delay={1.2} />
        <FortuneClover size={16} bottom="10%" left="40%" delay={1.8} />
        <FortuneClover size={21} bottom="5%" right="30%" delay={2.3} />
        <FortuneClover size={13} top="50%" left="15%" delay={2.7} />
        <FortuneClover size={18} top="55%" right="18%" delay={3.2} />
        <FortuneClover size={15} bottom="40%" left="10%" delay={3.8} />
        <FortuneClover size={24} top="75%" right="45%" delay={4.2} />
      </div>

      {/* Retro Neon Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 retro-grid"></div>
      
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400 opacity-70 animate-pulse" 
          style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-blue-400 opacity-50 animate-pulse" 
          style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-blue-400 opacity-30 animate-pulse" 
          style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
        <Header />
        <FortuneContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
