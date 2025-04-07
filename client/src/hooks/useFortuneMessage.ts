import { useState, useCallback } from "react";

const fortunes = [
  // 80s/Retro Computing
  "Your friendship algorithm is stronger than BASIC. You'll go far.",
  "Even at 300 baud, your potential connects quickly to success.",
  "The answer to your question is 42, and also 'yes, go for it!'",
  "Your brain is more powerful than a Commodore 64 - use it to create magic!",
  
  // Stranger Things references
  "The Upside Down's got nothing on your positive mindset.",
  "Your mental firewall is impenetrable. No mind flayer can bring you down.",
  "When faced with a locked door, remember: Friends don't lie.",
  
  // Back to the Future quotes/references
  "Your future isn't written yet. No one's is. Your future is whatever you make it.",
  "Roads? Where you're going, you don't need roads. Your path is uniquely yours.",
  "If you put your mind to it, you can accomplish anything.",
  "1.21 gigawatts of opportunity are coming your way!",
  
  // Star Wars quotes/references
  "Do or do not. There is no try. Your success awaits.",
  "The Force will be with you. Always. Even on tough days.",
  "This is the way. Stay true to yourself and find your path.",
  "Never tell yourself the odds. Your potential is limitless.",
  
  // Marvel references
  "With great power comes great opportunity. Use it wisely.",
  "You're stronger than you know. That's your superpower.",
  "Even the strongest avengers needed friends. Lean on yours.",
  "Sometimes we lose, sometimes we win. But we always have another chance.",
  "I can do this all day. And so can you, when it matters most.",
  
  // Classic movie quotes
  "Life is like a box of chocolates. Yours is filled with the good ones.",
  "May the odds be ever in your favor today and beyond.",
  "Here's looking at you, kid. You've got this.",
  "To infinity and beyond - that's where your potential reaches.",
  
  // Modern lyrics inspired (not direct quotes)
  "It's brutal out here sometimes, but you'll make it through stronger.",
  "You're happier than ever when you stay true to yourself.",
  "Don't let anyone step on your glow-up. Keep shining.",
  "Good for you, focusing on personal growth. It never goes out of style.",
  "Drivers license? Where you're headed is all internal growth.",
  
  // Modern pop culture
  "Even in a multiverse of possibilities, you're exceptional in every one.",
  "You don't need plot armor to succeed - you've got real determination.",
  "Your character arc is just getting to the good part. Stay tuned.",
  "Main character energy: you've got it. Use it wisely."
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const getNewFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, getNewFortune };
}
