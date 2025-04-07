import { useState, useCallback } from "react";

const fortunes = [
  // Y2K and Windows XP era quotes
  "You are about to experience a moment of pure happiness.exe!",
  "Windows to new opportunities are opening for you!",
  "Your future is loading... please wait... SUCCESS!",
  "It appears you've found the shortcut to good fortune!",
  "You are running the latest version of happiness.dll",
  "Error 404: Problems not found in your future!",
  "You have successfully installed Good_Luck.exe on your life!",
  "You've received an instant message from the universe: 'You rock!'",
  "No firewalls can block the good fortune coming your way!",
  "Your digital destiny is being saved to Cloud9!",
  
  // Early 2000s internet references
  "You've Got Mail! It's a package of good luck!",
  "Your dial-up connection to happiness is upgrading to broadband!",
  "AFK for a moment? Life will wait for you to return!",
  "Your Myspace Top 8 are all rooting for your success!",
  "Your AIM away message should read 'Currently achieving dreams'",
  "Buffering... buffering... your good fortune has loaded!",
  "Your life just got a system upgrade! Reboot and enjoy!",
  "Your personal bandwidth is expanding - download more dreams!",
  "Your Geocities page of life is the coolest on the web!",
  "Like your favorite Flash game, you're simple but amazing!",
  
  // Early 2000s pop culture
  "Your future's so bright, you need Matrix sunglasses!",
  "You're the star of your own reality show, and ratings are through the roof!",
  "Like your old Nokia phone, you're practically indestructible!",
  "You're as cool as downloading music on Napster (but legal)!",
  "Your potential is bigger than your first iPod's storage!",
  "You've been voted off Anxiety Island - welcome to Success Beach!",
  "Your life's playlist is full of nothing but bangers!",
  "You're going to shine brighter than bedazzled jeans!",
  "You're the flip phone of people - reliable, beloved, and iconic!",
  "Like Britney said: your toxic relationships are over, and your strength is stronger!",
  
  // MSN Messenger / AOL style
  "~*~*~ YoUr DrEaMs ArE cOmInG tRuE ~*~*~",
  ">>>> Good luck is headed your way! <<<<",
  "::*:. You are special in every way .::*::",
  "-=*=- A smile from you brightens everyone's day! -=*=-",
  "~!~ EvErYtHiNg Is GoInG tO bE oK ~!~",
  ".:*~*:. Today is YOUR day! .:*~*:.",
  "((( Sending positive vibes your way! )))",
  "<3 <3 <3 You are loved more than you know! <3 <3 <3",
  "\\\\// Success is just around the corner! \\\\//",
  "**!.. Your happiness matters most ..!**",
  
  // Microsoft Windows references
  "Task Manager says: All your dreams are responding perfectly!",
  "System update: Your luck has been upgraded to version 2.0!",
  "Recycle Bin: Your worries have been permanently deleted!",
  "Your potential requires no defragmentation - it's perfectly organized!",
  "You've successfully installed JOY.exe - no restart required!",
  "Clipboard: Your future has been copied and is ready to paste!",
  "Your happiness is now set as the default program!",
  "You've unlocked administrator privileges for your own destiny!",
  "Your personal firewall has blocked all negativity!",
  "Auto-save enabled: Your progress in life will never be lost!",
  
  // Early social media/Y2K phrases
  "Friendster would like you to know: Good things are coming!",
  "Away Message: Currently finding amazing opportunities!",
  "Your Xanga blog of life is getting tons of positive comments!",
  "Your fortune has been shared with everyone in your network!",
  "You've been tagged in a photo called 'Awesome People'!",
  "BRB, just grabbing all the success that's meant for you!",
  "Consider this a digital hug when you need it most!",
  "TTYL - Today Tells You 'Lovely things are coming!'",
  "IDK why you worry - your future is incredibly bright!",
  "LOL - Lots Of Luck coming your way!",
  
  // More inspirational Y2K style messages
  "Lucky green four-leaf clover energy surrounds you today!",
  "The universe is sending you a smiley face emoticon! :)",
  "Congratulations! You're the 1,000,000th visitor to Good Fortune!",
  "Your personal happiness counter is about to roll over to infinity!",
  "The chat room of life is talking about how amazing you are!",
  "Your happiness is not a trial version - it's the full package!",
  "Like a screensaver, you're most beautiful when in motion!",
  "Your cookie settings have been updated to accept only good fortune!",
  "In the game of life, you're the final boss of awesome!",
  "System scan complete: No problems found in your future!",
  
  // Back to the Future quotes/references
  "Your future isn't written yet. No one's is. Your future is whatever you make it.",
  "If you put your mind to it, you can accomplish anything.",
  "1.21 gigawatts of opportunity are coming your way!",
  "Great Scott! Your potential is reaching 88mph!",
  "Roads? Where you're going, you don't need roads. Your path is uniquely yours.",
  "Nobody calls you chicken. You face challenges head-on.",
  "You're as reliable as a DeLorean with a full tank of plutonium.",
  "Why don't you make like a tree and grow your success!",
  
  // Star Wars quotes/references
  "Do or do not. There is no try. Your success awaits.",
  "The Force will be with you. Always. Even on tough days.",
  "This is the way. Stay true to yourself and find your path.",
  "Never tell yourself the odds. Your potential is limitless.",
  "Trust your feelings - they'll lead you to amazing places.",
  "You're the chosen one of your own story.",
  "The dark side has cookies, but your path has authentic joy.",
  "You will find that many of the truths you cling to depend greatly on your own point of view.",
  "In my experience, there's no such thing as luck... except what's coming your way right now!",
  
  // Marvel references
  "With great power comes great opportunity. Use it wisely.",
  "You're stronger than you know. That's your superpower.",
  "I can do this all day. And so can you, when it matters most.",
  "You're worthy - no magic hammer required.",
  "Part of the journey is the end... but your best chapter is just beginning.",
  "Whatever it takes - you've got the determination to succeed.",
  "You will never be a god... but you can be an awesome human being.",
  "That's my secret, I'm always awesome. You are too.",
  "We're in the endgame now, and you're positioned to win.",
  "Whatever it takes - you've got the determination to succeed.",
  
  // Olivia Rodrigo inspired
  "Brutal? Maybe. But you've got this, and it's gonna be sweet.",
  "You're happier than ever when you stay true to yourself.",
  "Don't let anyone step on your glow-up. Keep shining.",
  "Good 4 you, focusing on your growth. It never goes out of style.",
  "Jealousy, jealousy? Not with your bright future ahead.",
  "Even after heartbreak, you come out stronger like a butterfly.",
  "It's brutal out here sometimes, but you'll make it through stronger.",
  "Just like getting your driver's license, this achievement feels amazing.",
  "Sure, it might be deja vu, but it's your moment to shine unique and bright.",
  
  // Stray Kids inspired
  "You make your own rules. No one can stop you now.",
  "Even on days filled with thunderous challenges, you'll find your way.",
  "You're the star walking through the mirror of your own destiny.",
  "Your potential is limitless, stretching to the horizon and beyond.",
  "God's menu of opportunities is wide open for you to sample.",
  "Your passion burns like a red hot chili pepper. Never let it cool.",
  "Back door or front door - you'll find the entrance to success.",
  "You're building your own kingdom brick by brick.",
  "Double knot your determination - it'll never come undone.",
  "Stay in the zone! Your success is about to level up!",
  
  // K-pop/K-drama inspired
  "Your dynamite personality will light up any room.",
  "Ice cream sweet success is coming your way.",
  "When life gives you sour candy, make sweet lemonade.",
  "Your talents have that butter-smooth quality people appreciate.",
  "Even in black and white moments, you find colorful solutions.",
  "Like a spring day after winter, your breakthrough is coming.",
  "Love yourself and accept all the good things coming your way.",
  "Your heart is as big as the galaxy. It will take you far.",
  "Like a true K-drama ending, your happiness is guaranteed.",
  "Fighting! Your hard work will pay off in amazing ways.",
  
  // Filipino-inspired quotes
  "Bahala na! Trust the universe to guide your path with good fortune.",
  "May your day be filled with saya and good fortune!",
  "Bayanihan spirit lives in you - lifting others as you rise.",
  "Mabuhay! You're living life to the fullest and it shows!",
  "Like a warm bowl of sinigang, comfort and joy await you.",
  "May your luck overflow like the sweetness of halo-halo!",
  "Kaya mo 'yan! You've got this, believe in yourself!",
  "Shine brighter than the parols at Christmas - your light is beautiful!",
  "Utang na loob: The universe owes you good fortune, and it's paying back now!",
  "You have the resilient spirit of a true Pinoy - nothing can stop you!",
  "Walang imposible! Nothing is impossible with your determination!",
  "Pusong Pinoy: Your kind heart brings good karma back to you.",
  
  // Gen Z slang/references
  "No cap - your future's looking extra bright.",
  "You're giving main character energy and we're here for it.",
  "That thing you're worried about? It's cheugy. Let it go.",
  "Keep that rizz going strong. You're more capable than you know.",
  "Your vibe check results are elite. Keep up the positive energy.",
  "Big yikes to doubts. You're about to slay your goals.",
  "You're about to go from mid to elite tier in your chosen field.",
  "Sheesh! Your potential is living rent-free in everyone's mind.",
  "It's giving success. Periodt.",
  "You understood the assignment. Now go ace it.",
  "The universe is simping for your success. We stan.",
  "Your glow-up era starts now. And that's on periodt.",
  "Bestie, your future is about to be so fire.",
  "This isn't a POV, it's the truth: you're going places.",
  "It's giving winner energy, ngl.",
  "Stay booked and busy with things that matter.",
  
  // Classic movie quotes/references
  "Life is like a box of chocolates. Yours is filled with the good ones.",
  "May the odds be ever in your favor today and beyond.",
  "Here's looking at you, kid. You've got this.",
  "To infinity and beyond - that's where your potential reaches.",
  "You're gonna need a bigger boat for all your future achievements.",
  "Nobody puts your talents in a corner.",
  "Just keep swimming - success is on the horizon.",
  "You're the king/queen of the world at whatever you choose to pursue.",
  "There's no place like home, but the journey you're on is just as magical.",
  "After all, tomorrow is another day - and it will be wonderful!",
  "You had me at hello - your future is instantly bright.",
  "Show me the money! Success is headed your way.",
  "Hasta la vista, problems. You're terminating obstacles left and right.",
  
  // Additional Y2K messaging
  "You're booting up for a great day. System check: All good!",
  "Downloading positive vibes... 100% complete!",
  "You've unlocked the Easter egg of happiness!",
  "Your personal antivirus has blocked all negativity today.",
  "Connecting to the server of success... Connection established!",
  "Right-click > Save As... 'Amazing_Future.now'",
  "File > New > Incredible_Opportunity.doc",
  "Click 'Accept' on the good fortune cookies agreement.",
  "You're the GIF that keeps on giving! Animating success daily.",
  "Ctrl+Alt+Delete your doubts. Rebooting with confidence!"
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const generateFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, generateFortune };
}
