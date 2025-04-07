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
    <div className="min-h-screen bg-gradient-to-b from-[#9966CC] to-[#FF99CC] font-comic-sans relative overflow-hidden">
      {/* Y2K Stars Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[15%] left-[25%] w-3 h-3 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[25%] left-[65%] w-5 h-5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[65%] left-[85%] w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[85%] left-[15%] w-3 h-3 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[45%] left-[45%] w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Custom Y2K Cursor */}
      <div 
        className="fixed w-8 h-8 z-50 pointer-events-none" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'radial-gradient(circle, rgba(255,0,255,0.7) 0%, rgba(255,255,0,0.5) 70%, transparent 100%)',
          boxShadow: '0 0 10px #FF00FF, 0 0 20px #FFFF00',
          borderRadius: '50%',
        }}
      ></div>
      
      {/* Background Decorative Y2K Elements */}
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

      {/* Retro Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center'
        }}
      ></div>

      <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
        <Header />
        <FortuneContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
