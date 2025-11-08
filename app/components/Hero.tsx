"use client"; // The Hero Section must be a client component to use the hook

import { Music2, Volume2, VolumeX } from "lucide-react"; // Icons
import { useAudioPlayer } from "../hooks/useAudioPlayer"; // Import the new hook

// The Music Player Button Component
const MusicPlayerToggle = () => {
  // Use the hook to manage state for the background track
  const { isPlaying, togglePlay, isReady } = useAudioPlayer(
    "/background_track.mp3"
  );

  // Display a loading state if the audio hasn't fully loaded yet
  if (!isReady) {
    return (
      <button
        disabled
        className="absolute top-0 right-0 lg:top-10 lg:right-10 
                   bg-gray-800 text-gray-400 text-sm px-3 py-1.5 rounded-full 
                   flex items-center space-x-1 cursor-wait"
      >
        <Music2 className="w-3 h-3 animate-spin" />
        <span>Loading Audio...</span>
      </button>
    );
  }

  return (
    // Replicating the distinct, small, floating button style
    <button
      onClick={togglePlay}
      className="absolute top-0 right-0 lg:top-10 lg:right-10 
                 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-full 
                 shadow-lg hover:bg-gray-700 transition-colors duration-300 
                 flex items-center space-x-1"
    >
      {/* Conditionally render the icon and text */}
      {isPlaying ? (
        <>
          <Volume2 className="w-3 h-3" />
          <span>Pause Music</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3 h-3" />
          <span>Play Music</span>
        </>
      )}
    </button>
  );
};

export function HeroSection() {
  return (
    // The Hero Section now requires the 'use client' directive at the top
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 max-w-7xl mx-auto px-4">
      {/* The functional music player toggle */}
      <MusicPlayerToggle />

      <div className="flex flex-col space-y-4">
        {/* The first line of text - we'll update this to be Taahirah's intro */}
        <p className="text-lg text-gray-400 font-mono tracking-wider">
          Hello! I am
        </p>

        {/* The main name and title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white">
          Taahirah Denmark
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-400">
          I engineer AI-powered systems.
        </h2>

        {/* The description paragraph */}
        <p className="max-w-xl text-lg text-gray-300 pt-4">
          A dedicated{" "}
          <strong className="text-accent-dark">AI Systems Engineer</strong> and
          Full Stack Developer, I specialize in building, optimizing, and
          deploying complex, real-time machine learning applications, from local
          LLM orchestrators to large-scale data pipelines.
        </p>

        {/* Example Call to Action Button */}
        <div className="pt-6">
          <a
            href="#connect"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-lg 
                       bg-accent-dark text-white shadow-xl 
                       hover:bg-opacity-90 transition-all duration-300"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
}
