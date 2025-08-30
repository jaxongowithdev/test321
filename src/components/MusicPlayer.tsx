import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  customAudioUrl?: string;
  customFileName?: string;
}

// Vinyl Record Component
const VinylRecord = ({ 
  isPlaying, 
  autoplayBlocked, 
  hasAttemptedAutoplay, 
  hasError, 
  onTogglePlay 
}: {
  isPlaying: boolean;
  autoplayBlocked: boolean;
  hasAttemptedAutoplay: boolean;
  hasError: boolean;
  onTogglePlay: () => void;
}) => {
  return (
    <motion.div
      className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer group select-none flex items-center justify-center"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onTogglePlay();
      }}
      onMouseDown={(e) => e.preventDefault()}
      onTouchStart={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      animate={{ 
        rotate: isPlaying ? 360 : 0,
        scale: autoplayBlocked && !hasAttemptedAutoplay ? [1, 1.05, 1] : 1
      }}
      transition={{ 
        type: autoplayBlocked && !hasAttemptedAutoplay ? "tween" : undefined,
        duration: isPlaying ? 3 : autoplayBlocked ? 1.5 : 0.5,
        repeat: isPlaying ? Infinity : autoplayBlocked ? Infinity : 0,
        ease: isPlaying ? "linear" : "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ 
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      {/* Actual Vinyl Record - Centered in touch zone */}
      <div className="relative w-16 h-16 md:w-20 md:h-20">
          {/* Vinyl Record Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full shadow-2xl">
            {/* Vinyl grooves */}
            <div className="absolute inset-1 border border-gray-700/40 rounded-full"></div>
            <div className="absolute inset-3 border border-gray-600/20 rounded-full"></div>
          </div>

          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden">
              {/* Vinyl center hole */}
              <div className="w-1.5 h-1.5 bg-black rounded-full z-10"></div>
              
              {/* Song title around the center (only visible on larger screens) */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center">
                <motion.div
                  className="absolute inset-1 flex items-center justify-center"
                  animate={{ rotate: isPlaying ? -360 : 0 }}
                  transition={{ 
                    duration: isPlaying ? 6 : 0.5,
                    repeat: isPlaying ? Infinity : 0,
                    ease: isPlaying ? "linear" : "easeOut"
                  }}

                >
                  <div className="text-[3px] text-white/80 tracking-wider transform -rotate-90 whitespace-nowrap overflow-hidden">
                    {hasError ? "DEMO" : "GLENN"}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Play/Pause Icon Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
            style={{
              opacity: !isPlaying ? 0.9 : 0
            }}
            whileHover={{ opacity: 1 }}
            initial={{ opacity: !isPlaying ? 0.9 : 0 }}
            animate={{ opacity: !isPlaying ? 0.9 : 0 }}
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20">
              <Play className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" />
            </div>
          </motion.div>

          {/* Pause Icon on Hover when Playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity duration-200"
              initial={{ opacity: 0 }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20">
                <Pause className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </motion.div>
          )}

          {/* Glow Effect when Playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-rose-500/20 rounded-full blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                type: "tween",
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          )}

          {/* Autoplay Blocked Indicator */}
          {autoplayBlocked && !isPlaying && (
            <motion.div
              className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                type: "tween",
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          )}
        </div>


    </motion.div>
  );
};

// Music Notes Component
const MusicNotes = ({ isPlaying }: { isPlaying: boolean }) => {
  if (!isPlaying) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 text-rose-400"
          initial={{ 
            x: 10,
            y: 10,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: [-10, 20, -12],
            y: [-18, -35, -25],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            type: "tween",
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut"
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          ♪
        </motion.div>
      ))}
    </div>
  );
};

export const MusicPlayer = ({ customAudioUrl, customFileName }: MusicPlayerProps = {}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentAudioUrl] = useState<string | null>(customAudioUrl || null);
  const [currentSongName] = useState<string>(customFileName || 'Glenn Medeiros');
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [hasAttemptedAutoplay, setHasAttemptedAutoplay] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Simple tone generator for demo
  const generateTone = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = [523.25, 587.33, 659.25, 698.46, 783.99]; // C-D-E-F-G
      let currentFreq = 0;
      
      oscillator.frequency.setValueAtTime(frequencies[currentFreq], audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      
      oscillator.start();
      
      const interval = setInterval(() => {
        currentFreq = (currentFreq + 1) % frequencies.length;
        if (oscillator.frequency) {
          oscillator.frequency.setValueAtTime(frequencies[currentFreq], audioContext.currentTime);
        }
      }, 400);
      
      setTimeout(() => {
        clearInterval(interval);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.stop(audioContext.currentTime + 0.1);
      }, 2500);
      
    } catch (error) {
      console.log('Tone generation failed:', error);
    }
  };

  // Music URLs
  const getAudioSources = () => {
    if (currentAudioUrl) {
      return [currentAudioUrl];
    }
    
    return [
      "/music/wedding-song.mp3",
      "/music/nothing-gonna-change.mp3",
      "https://audio-previews.elements.envatousercontent.com/files/246006400/preview.mp3",
      "https://www.bensound.com/bensound-music/bensound-romantic.mp3",
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
    ];
  };
  
  const musicUrls = getAudioSources();
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedData = () => {
        setIsLoaded(true);
        setHasError(false);
      };
      
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      const handleError = () => {
        if (currentUrlIndex < musicUrls.length - 1) {
          setCurrentUrlIndex(prev => prev + 1);
        } else {
          setHasError(true);
          setIsLoaded(false);
        }
      };
      
      const handleCanPlay = () => {
        setIsLoaded(true);
        setHasError(false);
        setIsInitialized(true);
        
        // Ngay lập tức thử autoplay khi audio sẵn sàng
        if (!hasAttemptedAutoplay && !isPlaying) {
          setTimeout(() => attemptAutoplay(), 100);
        }
      };
      
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      
      return () => {
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [currentUrlIndex, musicUrls.length]);

  // Immediate autoplay effect - thử ngay khi component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAttemptedAutoplay && isLoaded && !hasError) {
        attemptAutoplay();
      }
    }, 500); // Giảm từ 2000ms xuống 500ms

    return () => clearTimeout(timer);
  }, [isLoaded, hasError, hasAttemptedAutoplay]);

  // Aggressive autoplay attempt on component mount
  useEffect(() => {
    const initTimer = setTimeout(() => {
      if (!hasAttemptedAutoplay && !isPlaying) {
        attemptAutoplay();
      }
    }, 1000);

    return () => clearTimeout(initTimer);
  }, []);

  // User interaction to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      if (autoplayBlocked && !isPlaying && hasAttemptedAutoplay) {
        attemptAutoplay();
      }
    };

    // Listen for any user interaction to try autoplay again
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [autoplayBlocked, isPlaying, hasAttemptedAutoplay]);

  const togglePlay = async () => {
    if (!isLoaded && !hasError) {
      return;
    }
    
    if (isPlaying) {
      setIsPlaying(false);
      const audio = audioRef.current;
      if (audio && !hasError) {
        audio.pause();
      }
      return;
    }

    setIsPlaying(true);
    
    if (autoplayBlocked) {
      setAutoplayBlocked(false);
    }
    
    const audio = audioRef.current;
    if (audio && !hasError) {
      try {
        audio.volume = 0.6;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (error) {
        setHasError(true);
        setIsPlaying(false);
        generateTone();
        setTimeout(() => setIsPlaying(false), 2500);
      }
    } else {
      generateTone();
      setTimeout(() => setIsPlaying(false), 2500);
    }
  };

  const attemptAutoplay = async () => {
    if (hasAttemptedAutoplay) return;
    
    setHasAttemptedAutoplay(true);
    const audio = audioRef.current;
    
    if (audio && !hasError) {
      try {
        // Đặt volume hơi cao hơn để dễ nghe
        audio.volume = 0.5;
        audio.currentTime = 0; // Bắt đầu từ đầu
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setAutoplayBlocked(false);
          console.log('🎵 Music autoplay thành công!');
        }
      } catch (error) {
        console.log('🚫 Autoplay bị chặn:', error);
        setAutoplayBlocked(true);
        setIsPlaying(false);
        
        // Hiện warning để user biết cần click
        setTimeout(() => {
          console.log('💡 Click vào đĩa nhạc để phát nhạc!');
        }, 1000);
      }
    }
  };

  return (
    <div 
      data-music-player
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]" 

    >
      {/* Hidden Audio Element */}
      {!hasError && (
        <audio
          ref={audioRef}
          loop
          preload="auto"
          autoPlay={true}
          playsInline
          muted={false}
          src={musicUrls[currentUrlIndex]}
          onCanPlayThrough={() => {
            if (!hasAttemptedAutoplay) {
              attemptAutoplay();
            }
          }}
        />
      )}

      {/* Vinyl Record Player Only */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <VinylRecord
          isPlaying={isPlaying}
          autoplayBlocked={autoplayBlocked}
          hasAttemptedAutoplay={hasAttemptedAutoplay}
          hasError={hasError}
          onTogglePlay={togglePlay}
        />

        {/* Music Note Particles when Playing */}
        <MusicNotes isPlaying={isPlaying} />
      </motion.div>
    </div>
  );
};