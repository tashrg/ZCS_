"use client"; // Ensures the component is only used on the client side

import { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Default to playing state
  const [hasFinished, setHasFinished] = useState(false); // Track if audio has finished playing
  const audioRef = useRef<HTMLAudioElement | null>(null); // Add proper typing
  const hasAttemptedAutoplay = useRef(false);

  useEffect(() => {
    const audio = new Audio('/bg-music.mp3');
    audio.loop = false;
    audio.volume = 0.3;

    const handleEnded = () => {
      setIsPlaying(false);
      setHasFinished(true);
    };

    audio.addEventListener('ended', handleEnded);
    audioRef.current = audio;

    const attemptPlay = () => {
      if (!audioRef.current || !document.body) return;

      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.log("Autoplay failed, trying again on user interaction:", error);
        setIsPlaying(false);
      });
    };

    if (!hasAttemptedAutoplay.current) {
      hasAttemptedAutoplay.current = true;
      attemptPlay();
    }

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else if (!hasFinished) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Audio playback failed:", error);
      });
    } else {
      alert("Please refresh the page to play the audio again.");
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={togglePlay}
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center"
        aria-label={isPlaying ? "Mute background music" : hasFinished ? "Audio finished (refresh to play again)" : "Play background music"}
        disabled={hasFinished}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          {/* Speaker body */}
          <path
            d="M3,7 L6,7 L10,3 L10,17 L6,13 L3,13 L3,7 Z"
            fill={isPlaying ? "#3B82F6" : hasFinished ? "#D1D5DB" : "#6B7280"}
            stroke={isPlaying ? "#3B82F6" : hasFinished ? "#D1D5DB" : "#6B7280"}
            strokeWidth="1"
          />

          {/* Sound waves when playing */}
          {isPlaying && (
            <>
              <path
                d="M13,7 C14.3,8.5 14.3,11.5 13,13"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16,4 C18.7,6.7 18.7,13.3 16,16"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          )}

          {/* Mute line when not playing */}
          {!isPlaying && !hasFinished && (
            <path
              d="M13,7 L17,13"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}

          {/* "X" mark when finished */}
          {hasFinished && (
            <>
              <path
                d="M13,7 L17,13"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M17,7 L13,13"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </button>
    </div>
  );
};

export default BackgroundMusic;
