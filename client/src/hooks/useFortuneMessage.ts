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
  "System scan complete: No problems found in your future!"
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const generateFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, generateFortune };
}
