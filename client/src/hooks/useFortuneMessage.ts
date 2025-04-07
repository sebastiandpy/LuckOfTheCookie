import { useState, useCallback } from "react";

const fortunes = [
  // 80s/Retro Computing
  "Your friendship algorithm is stronger than BASIC. You'll go far.",
  "Even at 300 baud, your potential connects quickly to success.",
  "The answer to your question is 42, and also 'yes, go for it!'",
  "Your brain is more powerful than a Commodore 64 - use it to create magic!",
  "WARNING: Success overflow error. Your potential exceeds system limits.",
  "Loading happiness.exe...........................100% COMPLETE",
  
  // Stranger Things references
  "The Upside Down's got nothing on your positive mindset.",
  "Your mental firewall is impenetrable. No mind flayer can bring you down.",
  "When faced with a locked door, remember: Friends don't lie.",
  "In a world full of Demogorgons, be an Eleven.",
  "Sometimes, all you need is a good friend and a box of Eggos.",
  "Your future is so bright, it's lighting up the Christmas lights.",
  
  // Back to the Future quotes/references
  "Your future isn't written yet. No one's is. Your future is whatever you make it.",
  "Roads? Where you're going, you don't need roads. Your path is uniquely yours.",
  "If you put your mind to it, you can accomplish anything.",
  "1.21 gigawatts of opportunity are coming your way!",
  "Great Scott! Your potential is reaching 88mph!",
  "Nobody calls you chicken. You face challenges head-on.",
  "You're as reliable as a DeLorean with a full tank of plutonium.",
  
  // Star Wars quotes/references
  "Do or do not. There is no try. Your success awaits.",
  "The Force will be with you. Always. Even on tough days.",
  "This is the way. Stay true to yourself and find your path.",
  "Never tell yourself the odds. Your potential is limitless.",
  "You're the chosen one of your own story.",
  "These aren't the droids you're looking for, but the opportunities you seek are just ahead.",
  "The dark side has cookies, but your path has authentic joy.",
  "Trust your feelings - they'll lead you to amazing places.",
  
  // Marvel references
  "With great power comes great opportunity. Use it wisely.",
  "You're stronger than you know. That's your superpower.",
  "Even the strongest avengers needed friends. Lean on yours.",
  "Sometimes we lose, sometimes we win. But we always have another chance.",
  "I can do this all day. And so can you, when it matters most.",
  "You're worthy - no magic hammer required.",
  "The real infinity stones are the talents inside you.",
  "In the endgame of life, you'll come out on top.",
  "On your left! Good things are coming up fast.",
  
  // Classic movie quotes/references
  "Life is like a box of chocolates. Yours is filled with the good ones.",
  "May the odds be ever in your favor today and beyond.",
  "Here's looking at you, kid. You've got this.",
  "To infinity and beyond - that's where your potential reaches.",
  "You had me at 'hello world' - your code for success is flawless.",
  "You're gonna need a bigger boat for all your future achievements.",
  "Nobody puts your talents in a corner.",
  "Just keep swimming - success is on the horizon.",
  "You're the king of the world at whatever you choose to pursue.",
  
  // Olivia Rodrigo inspired (not direct quotes)
  "It's brutal out here sometimes, but you'll make it through stronger.",
  "You're happier than ever when you stay true to yourself.",
  "Don't let anyone step on your glow-up. Keep shining.",
  "Good for you, focusing on personal growth. It never goes out of style.",
  "Drivers license? Where you're headed is all internal growth.",
  "Deja vu? No, this is a brand new day with fresh opportunities.",
  "Don't let jealousy jealousy get in your way. You've got this.",
  "Even after heartbreak, you come out stronger like a butterfly.",
  "You've got that sour attitude toward negativity and sweet approach to challenges.",
  "Your hope is like a traitor's gate - always open to new possibilities.",
  
  // Stray Kids inspired (not direct quotes)
  "You make your own rules. No one can stop you now.",
  "Even on days filled with thunderous challenges, you'll find your way.",
  "You're the star walking through the mirror of your own destiny.",
  "Your potential is limitless, stretching to the horizon and beyond.",
  "God's Menu of opportunities is wide open for you to sample.",
  "Your passion burns like a red hot chili pepper. Never let it cool.",
  "Back door or front door - you'll find the entrance to success.",
  "You're building your own kingdom brick by brick.",
  "Double knot your determination - it'll never come undone.",
  "Hellevator? No thanks. You're rising to the top your own way.",
  
  // K-pop inspired (not direct quotes)
  "Your dynamite personality will light up any room.",
  "Ice cream sweet success is coming your way.",
  "When life gives you sour grapes, make sweet lemonade.",
  "Your talents have that butter-smooth quality people appreciate.",
  "Even in black and white moments, you find colorful solutions.",
  "Your energy is a shot of adrenaline to everyone around you.",
  "Fake love? Not in your future. Authentic connections await.",
  "You're the main character in your own idol story.",
  "Like a spring day after winter, your breakthrough is coming.",
  
  // Modern pop culture
  "Even in a multiverse of possibilities, you're exceptional in every one.",
  "You don't need plot armor to succeed - you've got real determination.",
  "Your character arc is just getting to the good part. Stay tuned.",
  "Main character energy: you've got it. Use it wisely.",
  "You're not a side quest - you're the whole game.",
  "Your life has better writing than Game of Thrones' final season.",
  "Power up! Your next level achievements are loading.",
  "No need for cheat codes - you're winning this game fairly.",
  "Achievement unlocked: Awesome Future Ahead",
  "Like a perfect TikTok algorithm, you're connecting with your destiny.",
  
  // More inspirational quotes
  "Your playlist of success has unlimited skips and no ads.",
  "The algorithm of life has recommended greatness for your future.",
  "You're streaming success in high definition, no buffering needed.",
  "Your potential is downloading at fiber optic speeds.",
  "Like the best playlist, your life hits all the right notes.",
  "When life auto-plays the next episode, it'll be even better than the last.",
  "No spoilers needed - your future storyline is epic.",
  "Your life's rating? Five stars, highly recommended, would experience again."
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const getNewFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, getNewFortune };
}
