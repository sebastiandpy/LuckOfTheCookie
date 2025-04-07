import { useState, useCallback } from "react";

const fortunes = [
  "Your friendship algorithm is stronger than BASIC. You'll go far.",
  "When faced with a locked door, remember: Friends don't lie, but passwords do change.",
  "You don't need psychic powers to see that good things are coming your way.",
  "Like a Dungeons & Dragons campaign, your future holds treasure beyond imagination.",
  "Your potential has reached level 11 on a scale of 1-10. Pretty rad!",
  "ERROR_SUCCESS: Your happiness protocol has been successfully activated.",
  "The Upside Down's got nothing on your positive mindset.",
  "Your mental firewall is impenetrable. No mind flayer can bring you down.",
  "Even the Demogorgon would be impressed by your courage. Keep it up!",
  "Your life's code has no syntax errors. Everything's compiling perfectly.",
  "SCANNING... Multiple awesome traits detected in your personality matrix.",
  "You're the hero of your own 8-bit adventure. Press START to continue winning.",
  "Your future loading... ███████████████████ 100% COMPLETE. It's radical!",
  "SYS MSG: 640K of luck should be enough for anyone.",
  "Like saving the Princess, your goals are achievable with persistence.",
  "Even at 300 baud, your potential connects quickly to success.",
  "Transmission received from future self: 'Everything worked out awesomely!'",
  "Your determination is stronger than a Nokia 3310. Practically unbreakable.",
  "You have the cheat code for happiness: ↑↑↓↓←→←→BA",
  "Life's arcade game is set to free play mode for you today.",
  "The oracle predicts: 'Insert coin for bonus round of unexpected joy'",
  "ALERT: Your awesomeness levels exceed normal parameters!",
  "Like a high score that can't be beaten, your success is written in the stars.",
  "Your brain is more powerful than a Commodore 64 - use it to create magic!",
  "May your coffee be hot and your BASIC never GOTO errors.",
  "The answer to your question is 42, and also 'yes, go for it!'",
  "A glitch in the Matrix has loaded extra luck into your day.",
  "You've found the Konami code to unlocking your potential!",
  "You're more precious than finding a clean tape to record on.",
  "SYSTEM REPORT: You're totally radical, no malfunction detected."
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const getNewFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, getNewFortune };
}
