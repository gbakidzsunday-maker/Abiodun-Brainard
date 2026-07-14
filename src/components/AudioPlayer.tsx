import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EPISODES_DATA } from "../data";
import { Play, Pause, SkipForward, SkipBack, Volume2, Headphones, Sparkles, Clock } from "lucide-react";
import podcastStudioBg from "../assets/images/podcast_studio_hero_1784036803404.jpg";

export default function AudioPlayer() {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(120); // Simulated 2 mins for demo
  const [volume, setVolume] = useState(80);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const currentEpisode = EPISODES_DATA[currentEpisodeIndex];

  // Simulated playback progress
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(timerRef.current!);
            return 0;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, duration]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    setProgress(0);
    setCurrentEpisodeIndex((prev) => (prev + 1) % EPISODES_DATA.length);
  };

  const handleBack = () => {
    setProgress(0);
    setCurrentEpisodeIndex((prev) => (prev - 1 + EPISODES_DATA.length) % EPISODES_DATA.length);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <section id="podcast" className="py-24 bg-[#F9FAFB] border-t border-zinc-200 relative px-6 overflow-hidden">
      {/* Absolute image background under darkened glass overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={podcastStudioBg}
          alt="DOAC Studio"
          className="w-full h-full object-cover blur-xs scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/90 to-[#F9FAFB]" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary of DOAC */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FFBF00]/10 border border-[#FFBF00]/25 px-3.5 py-1.5 rounded-full">
              <Headphones className="w-4 h-4 text-[#FFBF00] animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-zinc-950 uppercase font-bold">
                THE DIARY OF A CEO
              </span>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-black text-zinc-900 tracking-tight uppercase leading-none">
              Europe's Biggest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-[#FFBF00]">
                Podcast
              </span>
            </h2>

            <p className="font-sans text-zinc-600 text-sm md:text-base font-normal leading-relaxed">
              Started in a small bedroom with a single microphone, <em>The Diary Of A CEO</em> is now a global media giant. Abiodun sits down with experts, business leaders, neuroscientists, and icons to uncover their unedited truths and actionable philosophies.
            </p>

            {/* Podcast Stats list */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                <span className="block font-sans text-2xl font-black text-zinc-900">15M+</span>
                <span className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">Monthly Downloads</span>
              </div>
              <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                <span className="block font-sans text-2xl font-black text-zinc-900">#1</span>
                <span className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest block mt-1">In Spotify & Apple</span>
              </div>
            </div>
          </div>

          {/* Interactive Player Console */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Animated wave overlay behind playing player */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-zinc-900 to-[#FFBF00]" />

              {/* Episode selector tabs */}
              <div className="flex space-x-2 border-b border-zinc-100 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
                {EPISODES_DATA.map((ep, idx) => (
                  <button
                    id={`ep-select-${ep.id}`}
                    key={ep.id}
                    onClick={() => {
                      setCurrentEpisodeIndex(idx);
                      setProgress(0);
                    }}
                    className={`font-sans text-xs uppercase tracking-wider py-1.5 px-3 rounded-full transition-all whitespace-nowrap ${
                      currentEpisodeIndex === idx
                        ? "bg-zinc-950 text-white font-bold border border-zinc-950"
                        : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100"
                    }`}
                  >
                    {ep.guest}
                  </button>
                ))}
              </div>

              {/* Active Episode Details */}
              <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="font-sans text-xs font-bold text-[#FFBF00] uppercase tracking-widest block">
                    {currentEpisode.guestRole}
                  </span>
                  <h3 className="font-sans text-lg md:text-2xl font-black text-zinc-900 mt-1 leading-snug">
                    {currentEpisode.title}
                  </h3>
                  <p className="font-sans text-zinc-600 text-xs md:text-sm font-normal leading-relaxed mt-2.5">
                    {currentEpisode.summary}
                  </p>
                </div>
              </div>

              {/* Interactive simulated waveform */}
              <div className="my-8 h-12 flex items-end justify-between gap-[2px]">
                {Array.from({ length: 40 }).map((_, idx) => {
                  // Generate visual wave pattern that dances if isPlaying
                  const height = isPlaying
                    ? Math.sin(idx * 0.3 + progress * 0.5) * 15 + 25 + Math.random() * 8
                    : Math.sin(idx * 0.15) * 12 + 18;
                  const isActive = idx / 40 < progress / duration;

                  return (
                    <div
                      key={idx}
                      className={`w-full rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-t from-zinc-900 to-[#FFBF00]"
                          : "bg-zinc-100"
                      }`}
                      style={{ height: `${Math.max(4, height)}%` }}
                    />
                  );
                })}
              </div>

              {/* Progress and Timeline */}
              <div className="space-y-2">
                <input
                  id="podcast-seek-bar"
                  type="range"
                  min="0"
                  max={duration}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full accent-[#FFBF00] cursor-pointer h-1.5 rounded-lg bg-zinc-200 appearance-none"
                />
                <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatTime(progress)}</span>
                  </div>
                  <span>{currentEpisode.duration} total</span>
                </div>
              </div>

              {/* Controls Console */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 mt-4 border-t border-zinc-100">
                {/* Speed Controls */}
                <div className="flex items-center bg-zinc-100 border border-zinc-200 rounded-full p-1 self-start sm:self-center">
                  {[1, 1.25, 1.5, 2].map((speed) => (
                    <button
                      id={`speed-btn-${speed}x`}
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`font-mono text-2xs uppercase tracking-wider py-1 px-2.5 rounded-full transition-all ${
                        playbackSpeed === speed
                          ? "bg-[#FFBF00] text-black font-bold"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>

                {/* Main Player Buttons */}
                <div className="flex items-center space-x-6">
                  <button
                    id="podcast-prev-btn"
                    onClick={handleBack}
                    className="p-2 text-zinc-500 hover:text-zinc-950 transition-colors"
                  >
                    <SkipBack className="w-6 h-6" />
                  </button>

                  <button
                    id="podcast-toggle-play-btn"
                    onClick={togglePlay}
                    className="p-5 bg-zinc-900 hover:bg-[#FFBF00] text-white hover:text-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-zinc-900/10"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <button
                    id="podcast-next-btn"
                    onClick={handleNext}
                    className="p-2 text-zinc-500 hover:text-zinc-950 transition-colors"
                  >
                    <SkipForward className="w-6 h-6" />
                  </button>
                </div>

                {/* Volume slider */}
                <div className="hidden sm:flex items-center space-x-2.5 w-24">
                  <Volume2 className="w-4 h-4 text-zinc-500" />
                  <input
                    id="podcast-volume-slider"
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-zinc-500 cursor-pointer h-1 rounded-lg bg-zinc-200 appearance-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
