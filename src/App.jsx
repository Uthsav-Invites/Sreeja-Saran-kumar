import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import CouplePortraitSection from './components/CouplePortraitSection';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import FallingPetals from './components/FallingPetals';
import { INVITATION_CONFIG } from './config/invitationConfig';
import { FaMusic, FaPause } from 'react-icons/fa';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const { ui } = INVITATION_CONFIG;

  useEffect(() => {
    if (showEnvelope) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [showEnvelope]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log('Audio play error:', e));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleStartMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Autoplay handled by user interaction:', e));
    }
  };

  return (
    <>
      {/* Traditional Andhra Royal Envelope Overlay */}
      <AnimatePresence>
        {showEnvelope && (
          <EnvelopeOverlay
            key="envelope"
            onOpenComplete={() => setShowEnvelope(false)}
            onStartMusic={handleStartMusic}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#EFE6D5] flex flex-col font-telugu selection:bg-[#820A24] selection:text-[#FAF3E6]">
        
        {/* Subtle Ambient Background Warmth */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A15B] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#820A24] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Traditional Rose Petals Shower (పుష్ప వృష్టి) */}
        <FallingPetals count={18} className="fixed inset-0 z-40 pointer-events-none" />

        {/* Music Toggle - Traditional Antique Gold & Maroon with Telugu Tooltips & Aria */}
        <button
          onClick={toggleMusic}
          className={`fixed top-4 right-4 z-[9990] p-3 rounded-full shadow-xl border-[1.5px] border-[#C5A15B] transition-all duration-300 backdrop-blur-md cursor-pointer ${
            isPlaying
              ? 'bg-[#820A24] text-[#FAF3E6] hover:bg-[#630519]'
              : 'bg-[#FDF9F0]/95 text-[#820A24] hover:bg-[#FAF3E6] animate-bounce'
          }`}
          aria-label={isPlaying ? ui.musicAriaPause : ui.musicAriaPlay}
          title={isPlaying ? ui.musicTitlePlaying : ui.musicTitlePaused}
        >
          {isPlaying ? (
            <FaPause size={14} className="animate-[spin_4s_linear_infinite]" />
          ) : (
            <FaMusic size={14} />
          )}
        </button>

        {/* Background Audio (మంగళ వాయిద్యం) */}
        <audio
          ref={audioRef}
          src={INVITATION_CONFIG.audio.src}
          loop
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Main Invitation Stream - Card Container */}
        <main className="relative z-10 flex flex-col w-full mx-auto max-w-[560px] shadow-[0_0_50px_rgba(72,52,36,0.12)] bg-[#FAF3E6] min-h-screen border-l border-r border-[#C5A15B]/40 overflow-x-hidden">
          
          {/* Section A: Main Traditional Telugu Invitation Card */}
          <HeroSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Section B: Meet the Couple (వధూవరుల పరిచయం) */}
          <CoupleSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Section C: Muhurtham and Venue (శుభ ముహూర్తం మరియు వేదిక) */}
          <DetailsSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Couple Portrait Card (శుభ బంధం) */}
          <CouplePortraitSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Section D: Invitation Message (శుభ సందేశం) & Section F: Footer (శుభమస్తు) */}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
