import { useState, useEffect } from "react";
import pixelCookieImage from "../assets/pixel-cookie.png";
import useFortuneMessage from "../hooks/useFortuneMessage";

export default function FortuneCookie() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedFortune, setTypedFortune] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { fortune, getNewFortune } = useFortuneMessage();
  
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
      getNewFortune();
    }
  };

  const handleGetNewFortune = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-center">
      {/* Mobile-friendly Click Prompt */}
      {!isOpen && (
        <div className="text-center mb-4">
          {/* Clear, high-contrast message for better readability */}
          <div className="mx-auto max-w-fit p-2 bg-black border-2 border-[#00FF00] shadow-[0_0_10px_rgba(0,255,0,0.6)]">
            <p className="text-base md:text-lg text-[#00FF00] terminal-text font-bold">
              <span className="inline-block w-3 h-3 bg-[#FF00FF] mr-2 animate-pulse"></span>
              <span>TAP THE COOKIE</span>
              <span className="blinking-cursor ml-1">█</span>
              <span className="inline-block w-3 h-3 bg-[#00FFFF] ml-2 animate-pulse"></span>
            </p>
          </div>
          
          {/* Direction arrow */}
          <div className="flex justify-center mt-1">
            <div className="text-[#00FF00] animate-bounce text-2xl">▼</div>
          </div>
        </div>
      )}

      {/* Cookie Image (Closed) with better tap target for mobile */}
      {!isOpen && (
        <div 
          className="inline-block cursor-pointer relative"
          onClick={handleOpenCookie}
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 255, 0, 0.8))',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Subtle pulse animation to draw attention */}
          <div className="pixel-art animate-pulse-subtle">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie" 
              className="w-48 md:w-56 h-auto"
              style={{ imageRendering: 'pixelated' }} 
            />
          </div>
          
          {/* Retro CRT scanning line effect */}
          <div className="absolute inset-0 pointer-events-none opacity-40 scanning-line"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%)',
              backgroundSize: '4px 4px',
            }}
          ></div>
          
          {/* Glow effect to show it's clickable */}
          <div className="absolute inset-0 rounded-full bg-[#00FF00] opacity-10 animate-ping-slow pointer-events-none"></div>
        </div>
      )}
      
      {/* Cookie Image (Open) */}
      {isOpen && (
        <div className="animate-fade-in relative mb-4">
          <div className="pixel-art transform rotate-45">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie Open" 
              className="w-48 md:w-56 h-auto"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 10px rgba(229, 9, 20, 0.7))'
              }} 
            />
          </div>
        </div>
      )}

      {/* Fortune Message - 80s Computer Terminal */}
      {isOpen && (
        <div className="animate-fade-in mt-4 p-3 bg-black rounded-sm border-2 border-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          {/* Status bar for computer feel */}
          <div className="flex justify-between items-center text-xs text-[#00FF00] terminal-text mb-2 px-1">
            <span>FORTUNE #{Math.floor(Math.random() * 8999) + 1000}</span>
            <span className="animate-pulse">READING...</span>
          </div>
          
          {/* The actual fortune message */}
          <div className="text-left p-3 bg-[#001100] border border-[#00FF00]">
            <p className="retro-text text-base md:text-xl leading-relaxed">
              {typedFortune}
              <span className={isTyping ? "animate-pulse" : "opacity-0"}>█</span>
            </p>
          </div>
        </div>
      )}

      {/* Action Button - CRT Style, more mobile-friendly */}
      {isOpen && (
        <div className="text-center mt-6 animate-fade-in">
          <button 
            className="retro-button py-3 px-6 text-base font-bold bg-[#000000] border-2 border-[#00FF00] text-[#00FF00] hover:bg-[#003300] shadow-[0_0_8px_rgba(0,255,0,0.5)]"
            onClick={handleGetNewFortune}
          >
            GENERATE NEW FORTUNE
          </button>
        </div>
      )}
    </div>
  );
}
