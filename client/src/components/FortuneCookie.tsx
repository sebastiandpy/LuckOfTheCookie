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
      const computerBeep = new Audio("data:audio/wav;base64,UklGRrwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZgAAAAAAAAAAAAAAAAAAAAA/v7+//7+/v/+/v7/AAAAAAEBAQECAgICAwMDAwQEBAQFBQUFBgYGBgcHBwcICAgICQkJCQoKCgoLCwsLCgoKCgkJCQkICAgIBwcHBwYGBgYFBQUFBAQEBAMDAwMCAgICAQEBAQAAAAD+/v7//v7+//7+/v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==");
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
      {/* Terminal Prompt */}
      {!isOpen && (
        <div className="text-center mb-4">
          <div className="terminal-text text-[#00FF00] mb-2">
            <span>C:\HAWKINS\FORTUNE&gt; </span>
            <span className="animate-pulse">EXECUTE FORTUNE_QUEST.EXE</span>
          </div>
          <p className="text-sm text-[#E50914] rgb-offset eighties-text">
            CLICK TO PROCEED
          </p>
          <div className="flex justify-center mt-2">
            <div className="w-6 h-6 border border-[#00FF00] animate-pulse flex justify-center items-center">
              <span className="text-[#00FF00]">▼</span>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Image (Closed) */}
      {!isOpen && (
        <div 
          className="inline-block cursor-pointer relative mb-4"
          onClick={handleOpenCookie}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.7))',
            transition: 'all 0.3s ease'
          }}
        >
          <div className="pixel-art">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie" 
              className="w-40 h-auto"
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
        </div>
      )}
      
      {/* Cookie Image (Open) */}
      {isOpen && (
        <div className="animate-fade-in relative mb-4">
          <div className="pixel-art transform rotate-45">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie Open" 
              className="w-40 h-auto"
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
        <div className="animate-fade-in mt-6 p-4 bg-black rounded-sm border-2 border-[#00FF00] shadow-[0_0_15px_rgba(0,255,0,0.5)]">
          <div className="mb-2 flex justify-between text-[#00FF00] text-xs terminal-text">
            <span>FORTUNE_QUEST.DAT</span>
            <span>ID: {Math.floor(Math.random() * 9000) + 1000}</span>
          </div>
          
          {/* Loading bar animation for computer feel */}
          <div className="h-1 bg-[#111] mb-4 overflow-hidden">
            <div className="h-full bg-[#00FF00]" style={{
              width: isTyping ? `${(typedFortune.length / fortune.length) * 100}%` : '100%',
              transition: 'width 0.1s linear'
            }}></div>
          </div>
          
          <div className="text-left p-2 bg-[#001100] border border-[#00FF00]">
            <p className="retro-text text-xl">
              {typedFortune}
              <span className={isTyping ? "animate-pulse" : "opacity-0"}>█</span>
            </p>
          </div>
          
          <div className="mt-2 flex justify-between items-center text-xs terminal-text text-[#00FF00]">
            <span>BUFFER: OK</span>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      )}

      {/* Action Button - CRT Style */}
      {isOpen && (
        <div className="text-center mt-6 animate-fade-in">
          <button 
            className="retro-button"
            onClick={handleGetNewFortune}
          >
            $ RUN FORTUNE.EXE --NEW
          </button>
          
          {/* Easter Egg References */}
          <div className="mt-3 text-[#FF00FF] text-[10px] terminal-text screen-flicker">
            {Math.random() > 0.7 ? "The gate is opening..." : 
              Math.random() > 0.5 ? "Friends don't lie" : 
                Math.random() > 0.3 ? "Avoid the Demogorgon" :
                  "Eleven is watching"}
          </div>
          
          {/* Retro computer processing indicators */}
          <div className="mt-1 flex justify-center items-center gap-1">
            <div className="h-1 w-3 bg-[#00FFFF] animate-pulse"></div>
            <div className="h-1 w-5 bg-[#FF00FF] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-1 w-3 bg-[#00FFFF] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
