import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [prevSeconds, setPrevSeconds] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevSeconds(timeLeft.seconds);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <motion.div 
        className={`text-center ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-bodoni text-rose-300 text-xl md:text-2xl tracking-wider">
          🎉 Ngày đặc biệt đã tới! 🎉
        </div>
      </motion.div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Ngày' },
    { value: timeLeft.hours, label: 'Giờ' },
    { value: timeLeft.minutes, label: 'Phút' },
    { value: timeLeft.seconds, label: 'Giây' }
  ];

  return (
    <motion.div 
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Countdown Title */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="font-sans text-rose-300 text-lg md:text-xl tracking-[0.3em] uppercase mb-2">
          Countdown
        </div>
        <div className="font-script text-white/80 text-xl md:text-2xl">
          Đến ngày trọng đại
        </div>
      </motion.div>

      {/* Countdown Display */}
      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-3 md:p-5 overflow-hidden group"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7 + (index * 0.15),
              type: "spring",
              stiffness: 120,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-rose-400/20 via-transparent to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />
            
            {/* Number with AnimatePresence for smooth transitions */}
            <div className="relative font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-1 tracking-tight min-h-[2rem] md:min-h-[3rem] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${unit.label}-${unit.value}`}
                  initial={{ y: unit.label === 'Giây' ? -30 : 20, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: unit.label === 'Giây' && unit.value !== prevSeconds ? [1, 1.2, 1] : 1
                  }}
                  exit={{ y: unit.label === 'Giây' ? 30 : -20, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Label */}
            <div className="relative font-sans text-xs md:text-sm text-rose-300/90 tracking-wider uppercase">
              {unit.label}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-rose-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-rose-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-rose-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-rose-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="flex items-center justify-center mt-6 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2 h-2 bg-rose-400 rounded-full"
        />
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"></div>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="mt-4 font-sans text-white/60 text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        Chúng tôi rất mong được gặp bạn
      </motion.div>
    </motion.div>
  );
}