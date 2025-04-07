import { useState, useCallback } from "react";

const fortunes = [
  "Error 404: Bad luck not found. Only good vibes detected!",
  "Your future is loading... Progress: 98% awesome!",
  "You've been upgraded to the premium version of luck.exe!",
  "Windows has detected 100% cool vibes in your system.",
  "Buffering happiness... Connection successful!",
  "You are the glitter in the Y2K cosmic system <3",
  "All your dreams are belong to you! Make them happen!",
  "System scan complete: You're doing amazing sweetie!",
  "Your life.exe is running perfectly. No debug needed.",
  "You've just downloaded a lifetime supply of awesomeness!",
  "Worry.exe has been deleted from your system successfully.",
  "You're as rare as a bug-free Windows ME installation!",
  "AIM status: Currently blessed with good fortune.",
  "You've got mail! It's filled with good luck!",
  "Your vibe has been saved to My Documents as 'perfect.jpg'",
  "Scanning... No viruses found, only positive energy!",
  "New notification: Universe thinks you're incredible!",
  "Installing joy.exe - Please do not turn off your heart.",
  "Your day is buffering at 56k of pure happiness!",
  "Success.exe is running in the background of your life!",
  "You're more valuable than a rare Neopet!",
  "ALERT: Your happiness firewall is functioning perfectly!",
  "Downloading confidence... 100% complete!",
  "Disk cleanup complete: All doubts have been removed."
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const getNewFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, getNewFortune };
}
