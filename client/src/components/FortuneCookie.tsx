import { useState } from "react";
import pixelCookieImage from "../assets/pixel-cookie.png";
import useFortuneMessage from "../hooks/useFortuneMessage";

export default function FortuneCookie() {
  const [isOpen, setIsOpen] = useState(false);
  const { fortune, getNewFortune } = useFortuneMessage();

  const handleOpenCookie = () => {
    if (!isOpen) {
      setIsOpen(true);
      getNewFortune();
    }
  };

  const handleGetNewFortune = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-center">
      {/* Tap Instructions */}
      {!isOpen && (
        <div className="text-center mb-4 animate-float">
          <p className="text-xl font-bold text-[#FF00FF] shadow-y2k" style={{ fontFamily: 'VT323, monospace' }}>
            tap to open
          </p>
          <div className="flex justify-center mt-2">
            <span className="text-lg animate-bounce-slow">👇</span>
          </div>
        </div>
      )}

      {/* Cookie Image (Closed) */}
      {!isOpen && (
        <div 
          className="inline-block cursor-pointer cookie-closed transition-transform relative"
          onClick={handleOpenCookie}
        >
          <div className="pixel-art">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie" 
              className="w-40 h-auto pixelated"
              style={{ imageRendering: 'pixelated' }} 
            />
          </div>
        </div>
      )}
      
      {/* Cookie Image (Open) */}
      {isOpen && (
        <div className="animate-fade-in relative">
          <div className="pixel-art transform rotate-45">
            <img 
              src={pixelCookieImage} 
              alt="Pixel Fortune Cookie Open" 
              className="w-40 h-auto pixelated"
              style={{ imageRendering: 'pixelated' }} 
            />
          </div>
        </div>
      )}

      {/* Fortune Message */}
      {isOpen && (
        <div className="animate-fade-in mt-6 p-4 bg-black bg-opacity-90 rounded-sm border-4 border-[#00FF00] shadow-[0_0_10px_#00FF00]">
          <div className="mb-2 flex justify-between text-[#00FF00] text-xs" style={{ fontFamily: 'VT323, monospace' }}>
            <span>FORTUNE.EXE</span>
            <span>MESSAGE.TXT</span>
          </div>
          <p 
            className="text-center text-xl text-[#00FF00]" 
            style={{ fontFamily: 'VT323, monospace', textShadow: '0 0 5px #00FF00' }}
          >
            {fortune}
          </p>
          <div className="mt-2 text-right text-xs text-[#00FF00]" style={{ fontFamily: 'VT323, monospace' }}>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      )}

      {/* Action Button */}
      {isOpen && (
        <div className="text-center mt-6 animate-fade-in">
          <button 
            className="y2k-button text-white font-bold px-6 py-2 rounded-none text-lg border-4 border-[#00FFFF]"
            onClick={handleGetNewFortune}
            style={{ fontFamily: 'VT323, monospace' }}
          >
            open another cookie?
          </button>
        </div>
      )}
    </div>
  );
}
