import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to manage a simple audio player state.
 * @param src The source URL of the audio file.
 */
export const useAudioPlayer = (src: string) => {
  // We use a ref to hold the audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Initialize the audio element only once on mount
    if (!audioRef.current) {
      const audio = new Audio(src);
      // Set the audio to loop by default (typical for background music)
      audio.loop = true;
      audioRef.current = audio;

      // Ensure we're ready before allowing playback controls
      audio.oncanplay = () => setIsReady(true);

      // Update state if audio is paused externally
      audio.onpause = () => setIsPlaying(false);
      audio.onplay = () => setIsPlaying(true);
    }

    // Clean up function: pause and release resources on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Release the audio source
        audioRef.current = null;
      }
    };
  }, [src]);

  // Public toggle function
  const togglePlay = () => {
    if (!audioRef.current || !isReady) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Note: Browsers may restrict autoplay. User interaction (like a click) is required.
      audioRef.current.play().catch((error) => {
        console.error("Autoplay was prevented by the browser.", error);
        // Inform the user that they need to interact to start
        alert(
          "Audio playback requires a direct user interaction. Please click 'Play Music'."
        );
      });
    }
  };

  return { isPlaying, togglePlay, isReady };
};
