import { useEffect, useRef } from "react";
import music from "../music/music_dark.mp3";

const Music = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startMusic = () => {
      audioRef.current = new Audio(music);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.play();
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return null;
};

export default Music;
