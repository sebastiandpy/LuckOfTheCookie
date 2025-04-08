import { useState } from "react";
import useFortuneMessage from "./hooks/useFortuneMessage";
import FortuneClover from "./components/FortuneClover";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { fortune, generateFortune } = useFortuneMessage();
  
  const handleOpenCookie = () => {
    if (!isOpen) {
      setIsOpen(true);
      generateFortune();
    }
  };
  
  const handleGetNewFortune = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
      generateFortune();
    }, 300);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#d8f0d8] to-[#c7e6c7] overflow-hidden">
      {/* Windows XP-style desktop background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" 
             style={{
               opacity: 0.05,
               backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23338833' fill-opacity='0.2'/%3E%3C/svg%3E\")",
             }}
        ></div>
      </div>
      
      {/* Lucky clovers floating in background */}
      <FortuneClover size={16} top="8%" left="5%" delay={0} />
      <FortuneClover size={12} top="15%" right="8%" delay={1} />
      <FortuneClover size={18} bottom="10%" left="7%" delay={2} />
      <FortuneClover size={14} bottom="20%" right="6%" delay={1.5} />
      <FortuneClover size={20} top="40%" left="3%" delay={3} />
      <FortuneClover size={10} top="25%" right="4%" delay={2.5} />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Windows XP-style header title */}
        <header className="text-center mb-8">
          <div className="bg-[#75ad75] inline-block px-6 py-3 rounded-lg shadow-md border-2 border-[#4c9e4c] mb-3">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ 
                fontFamily: '"Comic Sans MS", cursive',
                color: '#FFFFFF',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              luck of the day
            </h1>
          </div>
          
          {/* Windows XP subtitle */}
          <div className="mt-2 px-4 py-2 inline-block bg-white border border-[#4c9e4c] rounded-lg shadow-sm">
            <p className="text-sm sm:text-base"
               style={{ fontFamily: '"Comic Sans MS", cursive', color: '#338833' }}>
              ✨ your daily dose of good fortune ✨
            </p>
          </div>
        </header>
        
        <main className="flex flex-col items-center justify-center">
          {/* Fortune cookie container */}
          <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-6 mb-8 border-2 border-[#75ad75]">
            {!isOpen ? (
              /* Closed cookie with "tap to open" text */
              <div className="flex flex-col items-center">
                <p className="text-[#4c9e4c] mb-4" 
                   style={{ fontFamily: '"Comic Sans MS", cursive' }}>
                  tap to open
                </p>
                
                <div 
                  className="inline-block cursor-pointer y2k-glow"
                  onClick={handleOpenCookie}
                >
                  <img 
                    src="/cookie-closed.svg" 
                    alt="Fortune Cookie" 
                    className="w-48 h-auto transition-transform hover:scale-105"
                  />
                </div>
              </div>
            ) : (
              /* Open cookie with fortune message */
              <div className="flex flex-col items-center">
                <div className="mb-6 cookie-open-animation">
                  <img 
                    src="/cookie-open.svg" 
                    alt="Fortune Cookie Open" 
                    className="w-48 h-auto"
                  />
                </div>
                
                {/* Classic Windows-style message box */}
                <div className="w-full bg-[#f0f8f0] border border-[#75ad75] rounded-md p-4 mb-6">
                  <p 
                    className="text-center text-lg text-[#338833] fortune-message"
                    style={{ fontFamily: '"Comic Sans MS", cursive' }}
                  >
                    {fortune}
                  </p>
                </div>
                
                {/* Windows XP-style button */}
                <button 
                  className="windows-button bg-gradient-to-b from-[#91c391] to-[#75ad75] hover:from-[#75ad75] hover:to-[#5c9e5c] text-white font-bold py-2 px-6 rounded-lg border border-[#4c9e4c] shadow-sm"
                  onClick={handleGetNewFortune}
                  style={{ fontFamily: '"Comic Sans MS", cursive' }}
                >
                  open another cookie?
                </button>
              </div>
            )}
          </div>
        </main>
        
        {/* Footer with creator tag */}
        <footer className="text-center mt-8">
          <p className="text-xs text-[#4c9e4c]" style={{ fontFamily: '"Comic Sans MS", cursive' }}>
            made by sebastiandpy :)
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
