import { motion } from 'motion/react';

interface CornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
}

export const CornerOrnament = ({ position, delay = 0 }: CornerOrnamentProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-3 left-3 md:top-4 md:left-4';
      case 'top-right':
        return 'top-3 right-3 md:top-4 md:right-4 rotate-90';
      case 'bottom-left':
        return 'bottom-3 left-3 md:bottom-4 md:left-4 rotate-270';
      case 'bottom-right':
        return 'bottom-3 right-3 md:bottom-4 md:right-4 rotate-180';
      default:
        return 'top-3 left-3 md:top-4 md:left-4';
    }
  };

  return (
    <motion.div
      className={`absolute ${getPositionClasses()} w-8 h-8 md:w-10 md:h-10 opacity-80 pointer-events-none`}
      initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
      whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1, 
        delay: delay,
        type: "spring",
        stiffness: 120,
        damping: 20 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        opacity: 1,
        transition: { 
          duration: 0.2,
          ease: "easeOut"
        }
      }}
    >
      {/* Dragon Phoenix Wedding Ornament */}
      <svg
        viewBox="0 0 60 60"
        fill="none"
        className="w-full h-full text-rose-600 dark:text-rose-300"
        style={{
          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 16px rgba(236, 72, 153, 0.25))',
        }}
      >
        {/* Elegant corner frame */}
        <path
          d="M4 4L4 20C4 28 10 34 18 34L34 34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M4 4L20 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        
        {/* Dragon Head (masculine energy) */}
        <g transform="translate(10, 8)">
          {/* Dragon head outline */}
          <path
            d="M0 4C2 2 6 2 8 4C10 6 8 8 6 8C4 8 2 6 0 4Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Dragon eye */}
          <circle cx="6" cy="4" r="0.8" fill="currentColor" opacity="0.9" />
          <circle cx="6.3" cy="3.7" r="0.3" fill="white" opacity="0.8" />
          
          {/* Dragon whiskers */}
          <path
            d="M8 3C10 2 12 3 10 4"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M8 5C10 6 12 5 10 4"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Dragon horn */}
          <path
            d="M4 2C5 0 6 1 5 2"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
        
        {/* Phoenix Wings (feminine energy) */}
        <g transform="translate(8, 18)">
          {/* Large wing feathers */}
          <path
            d="M0 0C4 -2 8 2 6 6C4 8 0 6 0 0Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M2 2C6 0 10 4 8 8C6 10 2 8 2 2Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M4 4C8 2 12 6 10 10C8 12 4 10 4 4Z"
            fill="currentColor"
            opacity="0.4"
          />
          
          {/* Wing details */}
          <path
            d="M2 1C4 0 6 2 4 4"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M4 3C6 2 8 4 6 6"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M6 5C8 4 10 6 8 8"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
        
        {/* Dragon Body Flow */}
        <path
          d="M18 12C22 10 26 14 24 18C28 16 32 20 30 24C34 22 38 26 36 30"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
          fill="none"
        />
        
        {/* Dragon Scales Pattern */}
        <g opacity="0.4">
          <circle cx="20" cy="14" r="0.6" fill="currentColor" />
          <circle cx="22" cy="16" r="0.5" fill="currentColor" />
          <circle cx="24" cy="18" r="0.6" fill="currentColor" />
          <circle cx="26" cy="20" r="0.5" fill="currentColor" />
          <circle cx="28" cy="22" r="0.6" fill="currentColor" />
          <circle cx="30" cy="24" r="0.5" fill="currentColor" />
        </g>
        
        {/* Phoenix Tail Feathers */}
        <g transform="translate(25, 25)">
          {/* Long flowing feathers */}
          <path
            d="M0 0C6 -2 12 4 8 10C4 12 -2 6 0 0Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M2 2C8 0 14 6 10 12C6 14 0 8 2 2Z"
            fill="currentColor"
            opacity="0.4"
          />
          
          {/* Feather texture */}
          <path
            d="M2 0C4 1 6 0 8 2"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M4 2C6 3 8 2 10 4"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M6 4C8 5 10 4 12 6"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
        
        {/* Harmony Symbol (Yin-Yang inspired) */}
        <g transform="translate(18, 18)">
          <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.3" />
          <path
            d="M-3 0C-1.5 -1.5 1.5 1.5 3 0C1.5 1.5 -1.5 -1.5 -3 0Z"
            fill="currentColor"
            opacity="0.6"
          />
          <circle cx="-1" cy="0" r="0.5" fill="currentColor" opacity="0.8" />
          <circle cx="1" cy="0" r="0.5" fill="white" opacity="0.8" />
        </g>
        
        {/* Traditional Cloud Patterns */}
        <path
          d="M32 8C34 6 36 8 34 10C36 8 38 10 36 12"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          fill="none"
        />
        <path
          d="M8 32C6 34 8 36 10 34C8 36 10 38 12 36"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          fill="none"
        />
        
        {/* Auspicious Coins */}
        <g transform="translate(38, 6)">
          <circle cx="0" cy="0" r="2" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6" />
          <rect x="-0.8" y="-0.8" width="1.6" height="1.6" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.7" />
        </g>
        <g transform="translate(6, 38)">
          <circle cx="0" cy="0" r="2" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6" />
          <rect x="-0.8" y="-0.8" width="1.6" height="1.6" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.7" />
        </g>
        
        {/* Flowing Energy Lines */}
        <path
          d="M42 10C44 8 46 10 44 12C46 10 48 12 46 14"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M10 42C8 44 10 46 12 44C10 46 12 48 14 46"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        
        {/* Prosperity Pearls */}
        <circle cx="40" cy="4" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="4" cy="40" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="44" cy="8" r="0.6" fill="currentColor" opacity="0.6" />
        <circle cx="8" cy="44" r="0.6" fill="currentColor" opacity="0.6" />
        
        {/* Blessing Stars */}
        <g transform="translate(46, 6)" opacity="0.5">
          <path d="M0,-1.5L0.3,-0.3L1.5,0L0.3,0.3L0,1.5L-0.3,0.3L-1.5,0L-0.3,-0.3Z" fill="currentColor" />
        </g>
        <g transform="translate(6, 46)" opacity="0.5">
          <path d="M0,-1.5L0.3,-0.3L1.5,0L0.3,0.3L0,1.5L-0.3,0.3L-1.5,0L-0.3,-0.3Z" fill="currentColor" />
        </g>
      </svg>
    </motion.div>
  );
};