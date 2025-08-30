import { motion, MotionValue } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface FloatingElementsProps {
  y: MotionValue<number>;
}

export const FloatingElements = ({ y }: FloatingElementsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal floating hearts - reduced from 12 to 6 */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <Heart className="w-3 h-3 text-rose-300/30 fill-rose-300/20" />
        </motion.div>
      ))}

      {/* Minimal sparkles - reduced from 15 to 4 */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.4, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          <Sparkles className="w-2 h-2 text-rose-400/40" />
        </motion.div>
      ))}

      {/* Simple floating dots instead of complex shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-rose-300/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};