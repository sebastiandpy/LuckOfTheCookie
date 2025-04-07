import { useState, useEffect } from "react";
import pixelCookieImage from "../assets/pixel-cookie.png";
import useFortuneMessage from "../hooks/useFortuneMessage";

export default function FortuneCookie() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedFortune, setTypedFortune] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { fortune, generateFortune } = useFortuneMessage();
  
  // Typewriter effect
  useEffect(() => {
    if (isOpen && fortune) {
      setIsTyping(true);
      setTypedFortune("");
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= fortune.length) {
          setTypedFortune(fortune.substring(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 40); // typing speed
      
      return () => clearInterval(typeInterval);
    }
  }, [isOpen, fortune]);

  const handleOpenCookie = () => {
    if (!isOpen) {
      // Add computer processing sound effect
      const computerBeep = new Audio("data:audio/wav;base64,UklGRrwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZgAAAAAAAAAAAAAAAAAAAAA/v7+//7+/v/+/v7/AAAAAAEBAQECAgICAwMDAwQEBAQFBQUFBgYGBgcHBwcICAgICQkJCQoKCgoLCwsLCgoKCgkJCQkICAgIBwcHBwYGBgYFBQUFBAQEBAMDAwMCAgICAQEBAQAAAAD+/v7//v7+//v7+//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==");
      computerBeep.volume = 0.2;
      computerBeep.play();
      
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
    <div className="text-center">
      {/* Matrix-style prompt */}
      {!isOpen && (
        <div className="text-center mb-2 sm:mb-4">
          {/* Matrix-inspired tap instruction */}
          <div className="mx-auto max-w-fit p-1 sm:p-2 bg-black border border-[#00FF00] shadow-[0_0_10px_rgba(0,255,0,0.6)]">
            <p className="text-sm sm:text-base text-[#00FF00] terminal-text font-bold px-2 py-1">
              <span className="animate-pulse">TAP TO REVEAL FORTUNE</span>
              <span className="blinking-cursor ml-1">█</span>
            </p>
          </div>
          
          {/* Direction arrow */}
          <div className="flex justify-center">
            <div className="text-[#00FF00] animate-bounce text-xl">▼</div>
          </div>
        </div>
      )}

      {/* Cookie Image (Closed) with Matrix theme */}
      {!isOpen && (
        <div 
          className="inline-block cursor-pointer relative"
          onClick={handleOpenCookie}
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 255, 0, 0.8))',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Matrix-style glow effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#00FF00] opacity-40 animate-pulse"></div>
          
          {/* Subtle pulse animation to draw attention */}
          <div className="pixel-art animate-pulse-subtle">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie" 
              className="w-36 sm:w-40 md:w-48 h-auto cookie-glow"
              style={{ 
                imageRendering: 'pixelated',
              }} 
            />
          </div>
          
          {/* Matrix-style scan lines */}
          <div className="absolute inset-0 pointer-events-none opacity-40 scanning-line"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%)',
              backgroundSize: '4px 4px',
            }}
          ></div>
          
          {/* Matrix-style pulse glow */}
          <div className="absolute inset-0 rounded-full bg-[#00FF00] opacity-15 animate-ping-slow pointer-events-none"></div>
          
          {/* Digital Matrix code raining effect */}
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 text-[#00FF00] text-xs animate-matrix-rain"
                 style={{ animationDuration: '2s' }}>10110</div>
            <div className="absolute top-0 left-2/3 text-[#00FF00] text-xs animate-matrix-rain"
                 style={{ animationDuration: '3s', animationDelay: '0.5s' }}>01001</div>
          </div>
        </div>
      )}
      
      {/* Cookie Image (Open with crack effect) */}
      {isOpen && (
        <div className="animate-fade-in relative mb-2 sm:mb-4">
          {/* Crack/Break animation */}
          <div className="absolute inset-0 z-10 cookie-crack"></div>
          
          {/* Cookie that's been opened */}
          <div className="pixel-art transform scale-110">
            <div className="relative">
              {/* Left half of cookie */}
              <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden transform -rotate-20 origin-right"
                   style={{ animation: 'cookieBreakLeft 0.5s ease-out forwards' }}>
                <img 
                  src={pixelCookieImage} 
                  alt="Pixel Fortune Cookie Left" 
                  className="w-36 sm:w-40 md:w-48 h-auto"
                  style={{ 
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.7))'
                  }} 
                />
              </div>
              
              {/* Right half of cookie */}
              <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden transform rotate-20 origin-left"
                   style={{ animation: 'cookieBreakRight 0.5s ease-out forwards' }}>
                <img 
                  src={pixelCookieImage} 
                  alt="Pixel Fortune Cookie Right" 
                  className="w-36 sm:w-40 md:w-48 h-auto transform translate-x-[-100%]"
                  style={{ 
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.7))'
                  }} 
                />
              </div>
            </div>
          </div>
          
          {/* Matrix-style digital reveal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="text-[#00FF00] terminal-text text-xs animate-glitch"
                 style={{ textShadow: '0 0 8px #00FF00' }}>
              FORTUNE REVEALED
            </div>
          </div>
        </div>
      )}

      {/* Fortune Message - Matrix terminal style */}
      {isOpen && (
        <div className="animate-fade-in mt-2 sm:mt-4 p-2 sm:p-3 bg-black rounded-sm border-2 border-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          {/* Matrix-style status bar */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#00FF00] terminal-text mb-1 sm:mb-2 px-1">
            <span>DECODING SIGNAL <span className="animate-pulse">...</span></span>
            <span className="blinking-cursor">█</span>
          </div>
          
          {/* Matrix style message display */}
          <div className="relative">
            {/* The actual fortune message */}
            <div className="text-left p-2 sm:p-3 bg-[#001100] border border-[#00FF00]">
              <p className="retro-text text-sm sm:text-base md:text-lg leading-relaxed">
                {typedFortune}
                <span className={isTyping ? "animate-pulse" : "opacity-0"}>█</span>
              </p>
            </div>
            
            {/* Matrix code scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.1) 0px, rgba(0, 255, 0, 0.1) 1px, transparent 1px, transparent 2px)',
                backgroundSize: '100% 2px'
              }}
            ></div>
            
            {/* Digital code falling animation */}
            <div className="absolute top-0 right-2 opacity-20 pointer-events-none h-full overflow-hidden">
              <div className="text-[8px] text-[#00FF00] terminal-text animate-matrix-rain"
                   style={{ animationDuration: '5s', animationDelay: '0.1s' }}>10101</div>
            </div>
            <div className="absolute top-0 left-2 opacity-20 pointer-events-none h-full overflow-hidden">
              <div className="text-[8px] text-[#00FF00] terminal-text animate-matrix-rain"
                   style={{ animationDuration: '4s', animationDelay: '1s' }}>01010</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Button - Matrix style */}
      {isOpen && (
        <div className="text-center mt-3 sm:mt-4 animate-fade-in">
          <button 
            className="py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold bg-[#000000] border-2 border-[#00FF00] text-[#00FF00] hover:bg-[#003300] shadow-[0_0_8px_rgba(0,255,0,0.5)] terminal-text"
            onClick={handleGetNewFortune}
            style={{ textShadow: '0 0 5px rgba(0, 255, 0, 0.7)' }}
          >
            GENERATE NEW FORTUNE
          </button>
        </div>
      )}
    </div>
  );
}
