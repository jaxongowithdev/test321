import { useState, useRef, useEffect } from 'react';
import { WeddingHeader } from './components/WeddingHeader';
import { CoupleNames } from './components/CoupleNames';
import { OurStorySection } from './components/OurStorySection';
import { WeddingGallery } from './components/WeddingGallery';
import { WeddingDetails } from './components/WeddingDetails';
import { MapSection } from './components/MapSection';
import { RSVPForm } from './components/RSVPForm';
import { WeddingGift } from './components/WeddingGift';
import { ThankYouSection } from './components/ThankYouSection';
import { Footer } from './components/Footer';

import { FireworksEffect } from './components/FireworksEffect';
import { MusicPlayer } from './components/MusicPlayer';
import { DarkModeProvider } from './components/DarkModeContext';
import { Toaster } from "sonner";

export default function App() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [fireworksActive, setFireworksActive] = useState(false);
  const [fireworksCounter, setFireworksCounter] = useState(0);
  const coupleNamesRef = useRef<HTMLDivElement>(null);

  const triggerFireworks = () => {
    if (!fireworksActive) {
      setFireworksActive(true);
      // Trigger first fireworks immediately
      setShowFireworks(true);
      setFireworksCounter(prev => prev + 1);
      setTimeout(() => setShowFireworks(false), 3000);
    }
  };

  // Set up recurring fireworks every 5 seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (fireworksActive) {
      interval = setInterval(() => {
        setShowFireworks(true);
        setFireworksCounter(prev => prev + 1);
        
        // Turn off fireworks after 3 seconds
        setTimeout(() => setShowFireworks(false), 3000);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [fireworksActive]);

  return (
    <DarkModeProvider>
      {/* Fireworks Effect */}
      {showFireworks && (
        <FireworksEffect trigger={showFireworks} key={fireworksCounter} />
      )}
      
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        {/* Header Section */}
        <WeddingHeader />
        
        {/* Couple Names Section with Fireworks Trigger */}
        <CoupleNames ref={coupleNamesRef} onInView={triggerFireworks} />

        {/* Other Sections */}
        <OurStorySection />
        <WeddingGallery />
        <WeddingDetails />
        <MapSection />
        <RSVPForm />
        <WeddingGift />
        <ThankYouSection />
          
        {/* Footer */}
        <Footer />
      </div>

      {/* Music Player - Fixed at bottom */}
      <MusicPlayer />
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--background)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)',
          },
          className: 'font-sans',
        }}
      />
    </DarkModeProvider>
  );
}