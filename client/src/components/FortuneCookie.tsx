import { useState } from "react";
import ClosedCookie from "./illustrations/ClosedCookie";
import OpenCookie from "./illustrations/OpenCookie";
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
          <p className="text-xl text-dark-green shadow-y2k">tap to open</p>
          <div className="flex justify-center mt-2">
            <span className="text-lg animate-bounce-slow">👇</span>
          </div>
        </div>
      )}

      {/* Closed Cookie */}
      {!isOpen && (
        <div 
          className="inline-block cursor-pointer cookie-closed transition-transform"
          onClick={handleOpenCookie}
        >
          <ClosedCookie />
        </div>
      )}
      
      {/* Open Cookie */}
      {isOpen && (
        <div className="animate-fade-in">
          <OpenCookie />
        </div>
      )}

      {/* Fortune Message */}
      {isOpen && (
        <div className="animate-fade-in mt-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-md border border-light-green">
          <p className="text-center text-xl text-dark-green">{fortune}</p>
        </div>
      )}

      {/* Action Button */}
      {isOpen && (
        <div className="text-center mt-6 animate-fade-in">
          <button 
            className="y2k-button text-white px-6 py-2 rounded-full text-lg"
            onClick={handleGetNewFortune}
          >
            open another cookie?
          </button>
        </div>
      )}
    </div>
  );
}
