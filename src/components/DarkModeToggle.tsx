import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

export const DarkModeToggle = ({ className = "" }: { className?: string }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex justify-center z-50 ${className}`}>
      <motion.button
        onClick={toggleDarkMode}
        className="group relative w-8 h-8 bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-full border border-white/30 dark:border-white/20 flex items-center justify-center cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut" 
        }}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-rose-400/20 via-transparent to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          initial={{ opacity: 0 }}
        />
        
        {/* Rotating background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-orange-300/20 opacity-0 rounded-full"
          animate={{ 
            opacity: isDarkMode ? 0 : [0, 0.5, 0],
            scale: isDarkMode ? 0.8 : [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 opacity-0 rounded-full"
          animate={{ 
            opacity: isDarkMode ? [0, 0.5, 0] : 0,
            scale: isDarkMode ? [0.8, 1.2, 0.8] : 0.8
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Icons with smooth transition */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <motion.div
            animate={{
              opacity: isDarkMode ? 1 : 0,
              rotate: isDarkMode ? 0 : 90,
              scale: isDarkMode ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="absolute flex items-center justify-center w-full h-full"
          >
            <Moon className="w-3 h-3 text-indigo-300 drop-shadow-sm" />
          </motion.div>
          
          <motion.div
            animate={{
              opacity: isDarkMode ? 0 : 1,
              rotate: isDarkMode ? -90 : 0,
              scale: isDarkMode ? 0.5 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute flex items-center justify-center w-full h-full"
          >
            <Sun className="w-3 h-3 text-yellow-500 drop-shadow-sm" />
          </motion.div>
        </div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />

        {/* Decorative ring */}
        <motion.div
          className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Subtle sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(1)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
              style={{
                left: `65%`,
                top: `25%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.button>

      {/* Mode indicator text - removed for more compact design */}
    </div>
  );
};