import { useState, useCallback } from "react";

const fortunes = [
  "You're doing better than you think.",
  "Take it slow, you're growing.",
  "Someone is grateful for you today.",
  "A quiet moment will bring you peace.",
  "Kindness you give comes back in quiet ways.",
  "It's okay to rest—you don't have to do it all today.",
  "You make things better just by being here.",
  "Breathe. Everything doesn't need to be figured out today.",
  "Small joys matter more than they seem.",
  "🫶 You are loved, even on the hard days.",
  "Let go of what you can't control—it's not yours to carry.",
  "Something lovely is on its way to you.",
  "Lightness will return, keep going.",
  "Be gentle with yourself, like you would be with a friend.",
  "Your presence is a quiet kind of magic."
];

export default function useFortuneMessage() {
  const [fortune, setFortune] = useState("");

  const getNewFortune = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return { fortune, getNewFortune };
}
