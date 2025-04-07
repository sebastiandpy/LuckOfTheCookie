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
      {/* Arcade Style Click Prompt */}
      {!isOpen && (
        <div className="text-center mb-2 sm:mb-4">
          {/* Arcade cabinet style button prompt */}
          <div className="mx-auto max-w-fit p-1 sm:p-2 bg-black border border-[#FF00FF] shadow-[0_0_10px_rgba(255,0,255,0.6)]">
            <p className="text-sm sm:text-base text-[#FF00FF] terminal-text font-bold px-2 py-1">
              <span className="animate-pulse">[ INSERT COIN ]</span>
              <span className="blinking-cursor ml-1">█</span>
            </p>
          </div>
          
          {/* Arcade inspired tap instruction */}
          <div className="mt-2 mx-auto max-w-fit p-1 bg-black border border-[#00FF00] shadow-[0_0_8px_rgba(0,255,0,0.6)]">
            <p className="text-xs sm:text-sm text-[#00FF00] terminal-text font-bold">
              <span className="inline-block w-2 h-2 bg-[#00FFFF] mr-1 animate-pulse"></span>
              <span>TAP COOKIE TO PLAY</span>
              <span className="inline-block w-2 h-2 bg-[#00FFFF] ml-1 animate-pulse"></span>
            </p>
          </div>
          
          {/* Direction arrow */}
          <div className="flex justify-center">
            <div className="text-[#00FF00] animate-bounce text-xl">▼</div>
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
          {/* Arcade style coin slot glow */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 rounded-sm bg-[#FF00FF] opacity-30 animate-pulse"></div>
          
          {/* Subtle pulse animation to draw attention */}
          <div className="pixel-art animate-pulse-subtle">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie" 
              className="w-36 sm:w-40 md:w-48 h-auto"
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
          
          {/* "High Score" arcade-style text below cookie */}
          <div className="absolute -bottom-4 left-0 right-0 text-center">
            <div className="text-[10px] text-[#00FFFF] terminal-text animate-pulse">
              HIGH SCORE: 9999
            </div>
          </div>
        </div>
      )}
      
      {/* Cookie Image (Open) */}
      {isOpen && (
        <div className="animate-fade-in relative mb-2 sm:mb-4">
          <div className="pixel-art transform rotate-45">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie Open" 
              className="w-36 sm:w-40 md:w-48 h-auto"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 10px rgba(229, 9, 20, 0.7))'
              }} 
            />
          </div>
          
          {/* Arcade style "Winner!" text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <div className="text-[#FFFF00] terminal-text text-xs animate-pulse font-bold"
                 style={{ textShadow: '0 0 8px #FFFF00' }}>
              WINNER!
            </div>
          </div>
        </div>
      )}

      {/* Fortune Message - Arcade terminal style with mobile optimization */}
      {isOpen && (
        <div className="animate-fade-in mt-2 sm:mt-4 p-2 sm:p-3 bg-black rounded-sm border-2 border-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          {/* Arcade-style status bar */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#00FF00] terminal-text mb-1 sm:mb-2 px-1">
            <span>FORTUNE #<span className="animate-pulse">{Math.floor(Math.random() * 8999) + 1000}</span></span>
            <span className="animate-pulse">JACKPOT!</span>
          </div>
          
          {/* Arcade style scan line effect over message */}
          <div className="relative">
            {/* The actual fortune message */}
            <div className="text-left p-2 sm:p-3 bg-[#001100] border border-[#00FF00]">
              <p className="retro-text text-sm sm:text-base md:text-lg leading-relaxed">
                {typedFortune}
                <span className={isTyping ? "animate-pulse" : "opacity-0"}>█</span>
              </p>
            </div>
            
            {/* Arcade scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 2px)',
                backgroundSize: '100% 2px'
              }}
            ></div>
          </div>
          
          {/* Arcade style scoring */}
          <div className="mt-1 text-[10px] text-[#FFFF00] terminal-text flex justify-end px-1">
            <span className="animate-pulse">SCORE: +1000 POINTS</span>
          </div>
        </div>
      )}

      {/* Action Button - Arcade style "Insert Coin" button for mobile */}
      {isOpen && (
        <div className="text-center mt-3 sm:mt-4 animate-fade-in">
          <button 
            className="arcade-button py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold bg-[#000000] border border-[#FF00FF] text-[#FF00FF] hover:bg-[#300030] shadow-[0_0_8px_rgba(255,0,255,0.5)] terminal-text"
            onClick={handleGetNewFortune}
            style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.7)' }}
          >
            INSERT COIN FOR NEW FORTUNE
          </button>
          
          {/* Arcade style credit counter */}
          <div className="mt-2 text-[10px] text-[#00FFFF] terminal-text">
            <span className="animate-pulse">CREDITS REMAINING: ∞</span>
          </div>
        </div>
      )}
    </div>
  );
}
