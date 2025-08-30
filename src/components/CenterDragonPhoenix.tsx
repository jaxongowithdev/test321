import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface CenterDragonPhoenixProps {
  delay?: number;
}

export const CenterDragonPhoenix = ({ delay = 0 }: CenterDragonPhoenixProps) => {
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    // Show ring exchange animation every 8 seconds
    const interval = setInterval(() => {
      setShowRing(true);
      setTimeout(() => setShowRing(false), 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-20 h-16 md:w-24 md:h-20 opacity-80 pointer-events-none z-10"
      initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
      whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 15 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1, 
        opacity: 1,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
    >
      {/* Couple with Heart and Ring Exchange */}
      <svg
        viewBox="0 0 120 80"
        fill="none"
        className="w-full h-full text-rose-600 dark:text-rose-300"
        style={{
          filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
        }}
      >
        {/* Groom on the Left - Luxury Black Suit */}
        <g transform="translate(15, 15)">
          {/* Groom Head */}
          <circle cx="15" cy="15" r="12" fill="#fdbcb4" opacity="0.95" />
          
          {/* Groom Hair - Well styled */}
          <path d="M3 10 Q15 1 27 10 Q27 18 24 16 Q20 14 15 16 Q10 14 6 16 Q3 18 3 10" fill="#1a1a1a" opacity="0.9" />
          <path d="M8 8 Q15 3 22 8 Q20 12 15 12 Q10 12 8 8" fill="#2d3748" opacity="0.7" />
          
          {/* Groom Eyes */}
          <circle cx="11" cy="14" r="1.5" fill="#2d3748" />
          <circle cx="19" cy="14" r="1.5" fill="#2d3748" />
          {/* Eye highlights */}
          <circle cx="11.5" cy="13.5" r="0.5" fill="white" opacity="0.8" />
          <circle cx="19.5" cy="13.5" r="0.5" fill="white" opacity="0.8" />
          
          {/* Groom Eyebrows */}
          <path d="M9 12 Q11 11 13 12" stroke="#2d3748" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          <path d="M17 12 Q19 11 21 12" stroke="#2d3748" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          
          {/* Groom Nose */}
          <path d="M15 16 Q15.5 17 15 18" stroke="#2d3748" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
          
          {/* Groom Smile */}
          <path d="M11 19 Q15 22 19 19" stroke="#2d3748" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* White Dress Shirt */}
          <rect x="8" y="26" width="14" height="16" rx="6" fill="#ffffff" opacity="0.95" />
          <path d="M8 26 Q15 24 22 26 Q22 34 15 36 Q8 34 8 26" fill="#ffffff" opacity="0.9" />
          
          {/* Black Suit Jacket */}
          <path d="M6 28 Q15 25 24 28 L26 45 Q15 48 4 45 Z" fill="#1a1a1a" opacity="0.95" />
          <path d="M8 29 Q15 27 22 29 L24 44 Q15 46 6 44 Z" fill="#2d3748" opacity="0.9" />
          
          {/* Suit Jacket Lapels */}
          <path d="M8 29 Q12 27 15 30 Q18 27 22 29 L20 35 Q15 33 10 35 Z" fill="#1a1a1a" opacity="0.8" />
          
          {/* Suit Buttons */}
          <circle cx="15" cy="33" r="0.8" fill="#c0c0c0" opacity="0.9" />
          <circle cx="15" cy="37" r="0.8" fill="#c0c0c0" opacity="0.9" />
          <circle cx="15" cy="41" r="0.8" fill="#c0c0c0" opacity="0.9" />
          
          {/* Red Tie */}
          <path d="M13 28 L17 28 L16 42 Q15 43 14 42 Z" fill="#dc2626" opacity="0.9" />
          <path d="M13.5 28 L16.5 28 L15.5 41 Q15 42 14.5 41 Z" fill="#b91c1c" opacity="0.8" />
          {/* Tie pattern */}
          <circle cx="14.5" cy="31" r="0.3" fill="#fca5a5" opacity="0.6" />
          <circle cx="15.5" cy="34" r="0.3" fill="#fca5a5" opacity="0.6" />
          <circle cx="14.5" cy="37" r="0.3" fill="#fca5a5" opacity="0.6" />
          
          {/* Shirt collar */}
          <path d="M12 27 Q15 26 18 27 L17 30 Q15 29 13 30 Z" fill="#ffffff" stroke="#e5e5e5" strokeWidth="0.5" />
          
          {/* Suit jacket cuffs */}
          <rect x="6" y="32" width="3" height="8" rx="1.5" fill="#1a1a1a" opacity="0.9" />
          <rect x="21" y="32" width="3" height="8" rx="1.5" fill="#1a1a1a" opacity="0.9" />
          <circle cx="7.5" cy="34" r="0.4" fill="#c0c0c0" opacity="0.8" />
          <circle cx="22.5" cy="34" r="0.4" fill="#c0c0c0" opacity="0.8" />
          
          {/* Hands with shirt cuffs */}
          <circle cx="22" cy="32" r="5" fill="#fdbcb4" opacity="0.95" />
          <circle cx="8" cy="32" r="5" fill="#fdbcb4" opacity="0.95" />
          <rect x="19" y="29" width="6" height="3" rx="1.5" fill="#ffffff" opacity="0.9" />
          <rect x="5" y="29" width="6" height="3" rx="1.5" fill="#ffffff" opacity="0.9" />
          
          {/* Suit Pants */}
          <rect x="10" y="43" width="4" height="11" rx="2" fill="#1a1a1a" opacity="0.9" />
          <rect x="16" y="43" width="4" height="11" rx="2" fill="#1a1a1a" opacity="0.9" />
          {/* Pants crease */}
          <line x1="12" y1="43" x2="12" y2="54" stroke="#2d3748" strokeWidth="0.3" opacity="0.6" />
          <line x1="18" y1="43" x2="18" y2="54" stroke="#2d3748" strokeWidth="0.3" opacity="0.6" />
          
          {/* Leather Dress Shoes */}
          <ellipse cx="12" cy="56" rx="4" ry="2.5" fill="#1a1a1a" opacity="0.95" />
          <ellipse cx="18" cy="56" rx="4" ry="2.5" fill="#1a1a1a" opacity="0.95" />
          {/* Shoe shine */}
          <ellipse cx="12" cy="55" rx="2" ry="1" fill="#4a4a4a" opacity="0.7" />
          <ellipse cx="18" cy="55" rx="2" ry="1" fill="#4a4a4a" opacity="0.7" />
          
          {/* Pocket square */}
          <rect x="11" y="30" width="2" height="1.5" rx="0.2" fill="#ffffff" opacity="0.8" />
          <path d="M11 30 Q12 29.5 13 30" stroke="#e5e5e5" strokeWidth="0.3" />
        </g>
        
        {/* Bride on the Right - Luxury Wedding Dress */}
        <g transform="translate(75, 15)">
          {/* Bride Head */}
          <circle cx="15" cy="15" r="12" fill="#fdbcb4" opacity="0.95" />
          
          {/* Bride Hair - Elegant updo */}
          <path d="M3 10 Q15 1 27 10 Q27 20 22 18 Q20 15 15 18 Q10 15 8 18 Q3 20 3 10" fill="#8b4513" opacity="0.9" />
          <path d="M8 8 Q15 3 22 8 Q22 15 18 14 Q16 12 15 14 Q14 12 12 14 Q8 15 8 8" fill="#a0522d" opacity="0.8" />
          {/* Hair accessories */}
          <circle cx="12" cy="10" r="0.8" fill="#ffffff" opacity="0.9" />
          <circle cx="18" cy="10" r="0.8" fill="#ffffff" opacity="0.9" />
          <circle cx="15" cy="8" r="0.6" fill="#f9a8d4" opacity="0.8" />
          
          {/* Luxury Veil - Multiple layers */}
          <path d="M3 10 Q15 -2 27 10 Q40 18 35 30 Q28 26 15 30 Q2 26 -5 30 Q-10 18 3 10" fill="#ffffff" opacity="0.8" />
          <path d="M5 12 Q15 2 25 12 Q35 20 30 28 Q25 24 15 28 Q5 24 0 28 Q-5 20 5 12" fill="#ffffff" opacity="0.6" />
          <path d="M7 14 Q15 6 23 14 Q30 22 25 26 Q20 22 15 26 Q10 22 5 26 Q0 22 7 14" fill="#ffffff" opacity="0.4" />
          
          {/* Veil embellishments */}
          <circle cx="8" cy="16" r="0.4" fill="#f9a8d4" opacity="0.7" />
          <circle cx="22" cy="16" r="0.4" fill="#f9a8d4" opacity="0.7" />
          <circle cx="12" cy="20" r="0.3" fill="#f9a8d4" opacity="0.6" />
          <circle cx="18" cy="20" r="0.3" fill="#f9a8d4" opacity="0.6" />
          
          {/* Bride Eyes with makeup */}
          <circle cx="11" cy="14" r="1.5" fill="#2d3748" />
          <circle cx="19" cy="14" r="1.5" fill="#2d3748" />
          {/* Eye highlights */}
          <circle cx="11.5" cy="13.5" r="0.5" fill="white" opacity="0.9" />
          <circle cx="19.5" cy="13.5" r="0.5" fill="white" opacity="0.9" />
          {/* Eyelashes */}
          <path d="M9 13 Q11 12 13 13" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
          <path d="M17 13 Q19 12 21 13" stroke="#1a1a1a" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
          
          {/* Bride Smile with lipstick */}
          <path d="M11 19 Q15 22 19 19" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M12 19.5 Q15 21 18 19.5" fill="#dc2626" opacity="0.6" />
          
          {/* Wedding Dress - Luxury Multi-layer */}
          {/* Bodice */}
          <path d="M10 25 Q15 22 20 25 L22 38 Q15 40 8 38 Z" fill="#ffffff" opacity="0.98" />
          <path d="M11 26 Q15 24 19 26 L21 37 Q15 38 9 37 Z" fill="#f8fafc" opacity="0.9" />
          
          {/* Bodice lace details */}
          <path d="M11 27 Q13 26 15 27 Q17 26 19 27" stroke="#e2e8f0" strokeWidth="0.4" />
          <path d="M11 29 Q13 28 15 29 Q17 28 19 29" stroke="#e2e8f0" strokeWidth="0.4" />
          <path d="M11 31 Q13 30 15 31 Q17 30 19 31" stroke="#e2e8f0" strokeWidth="0.4" />
          <path d="M11 33 Q13 32 15 33 Q17 32 19 33" stroke="#e2e8f0" strokeWidth="0.4" />
          
          {/* Pearl beading on bodice */}
          <circle cx="12" cy="28" r="0.3" fill="#f1f5f9" opacity="0.9" />
          <circle cx="15" cy="27" r="0.3" fill="#f1f5f9" opacity="0.9" />
          <circle cx="18" cy="28" r="0.3" fill="#f1f5f9" opacity="0.9" />
          <circle cx="13" cy="30" r="0.3" fill="#f1f5f9" opacity="0.9" />
          <circle cx="17" cy="30" r="0.3" fill="#f1f5f9" opacity="0.9" />
          <circle cx="15" cy="32" r="0.3" fill="#f1f5f9" opacity="0.9" />
          
          {/* Bride Body */}
          <rect x="12" y="25" width="6" height="12" rx="3" fill="#fdbcb4" opacity="0.95" />
          
          {/* Ball Gown Skirt - Multiple layers */}
          {/* Outer layer */}
          <path d="M8 38 Q15 35 22 38 L32 52 Q15 58 -2 52 Z" fill="#ffffff" opacity="0.95" />
          {/* Middle layer */}
          <path d="M9 39 Q15 37 21 39 L30 51 Q15 56 0 51 Z" fill="#f8fafc" opacity="0.9" />
          {/* Inner layer */}
          <path d="M10 40 Q15 38 20 40 L28 50 Q15 54 2 50 Z" fill="#ffffff" opacity="0.85" />
          
          {/* Train extension */}
          <path d="M5 50 Q15 48 25 50 Q35 52 40 55 Q35 58 15 60 Q-5 58 -10 55 Q-5 52 5 50" fill="#ffffff" opacity="0.8" />
          
          {/* Lace trim on skirt */}
          <path d="M8 50 Q10 49 12 50 Q14 49 16 50 Q18 49 20 50 Q22 49 24 50" stroke="#e2e8f0" strokeWidth="0.6" />
          <path d="M6 52 Q8 51 10 52 Q12 51 14 52 Q16 51 18 52 Q20 51 22 52" stroke="#e2e8f0" strokeWidth="0.6" />
          
          {/* Embroidered flowers on dress */}
          <circle cx="11" cy="42" r="1.2" fill="#f9a8d4" opacity="0.7" />
          <circle cx="10.2" cy="41.2" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="11.8" cy="41.2" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="11" cy="40.5" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="11" cy="42.8" r="0.6" fill="#ec4899" opacity="0.6" />
          
          <circle cx="19" cy="44" r="1.2" fill="#f9a8d4" opacity="0.7" />
          <circle cx="18.2" cy="43.2" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="19.8" cy="43.2" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="19" cy="42.5" r="0.6" fill="#ec4899" opacity="0.6" />
          <circle cx="19" cy="44.8" r="0.6" fill="#ec4899" opacity="0.6" />
          
          {/* Bride Arms with elegant gloves */}
          <circle cx="8" cy="32" r="5" fill="#fdbcb4" opacity="0.95" />
          <circle cx="22" cy="32" r="5" fill="#fdbcb4" opacity="0.95" />
          {/* Satin gloves */}
          <circle cx="8" cy="32" r="4.5" fill="#ffffff" opacity="0.85" />
          <circle cx="22" cy="32" r="4.5" fill="#ffffff" opacity="0.85" />
          
          {/* Luxury Bouquet */}
          <circle cx="5" cy="36" r="5" fill="#f9a8d4" opacity="0.9" />
          {/* Roses */}
          <circle cx="3" cy="34" r="2.2" fill="#ec4899" opacity="0.9" />
          <circle cx="7" cy="34" r="2.2" fill="#ec4899" opacity="0.9" />
          <circle cx="5" cy="32" r="2.2" fill="#f472b6" opacity="0.9" />
          <circle cx="5" cy="38" r="2.2" fill="#ec4899" opacity="0.9" />
          <circle cx="2" cy="37" r="1.8" fill="#f472b6" opacity="0.8" />
          <circle cx="8" cy="37" r="1.8" fill="#f472b6" opacity="0.8" />
          {/* Baby's breath */}
          <circle cx="4" cy="31" r="0.4" fill="#ffffff" opacity="0.9" />
          <circle cx="6" cy="31" r="0.4" fill="#ffffff" opacity="0.9" />
          <circle cx="3" cy="39" r="0.4" fill="#ffffff" opacity="0.9" />
          <circle cx="7" cy="39" r="0.4" fill="#ffffff" opacity="0.9" />
          {/* Ribbons */}
          <rect x="3" y="40" width="4" height="8" rx="2" fill="#fbbf24" opacity="0.8" />
          <path d="M3 48 Q5 46 7 48 Q5 50 3 48" fill="#f59e0b" opacity="0.7" />
          
          {/* Jewelry */}
          {/* Necklace */}
          <path d="M11 26 Q15 25 19 26" stroke="#fbbf24" strokeWidth="0.8" />
          <circle cx="15" cy="26.5" r="0.6" fill="#fbbf24" opacity="0.9" />
          {/* Earrings */}
          <circle cx="9" cy="16" r="0.5" fill="#fbbf24" opacity="0.9" />
          <circle cx="21" cy="16" r="0.5" fill="#fbbf24" opacity="0.9" />
          
          {/* Designer Heels */}
          <ellipse cx="12" cy="56" rx="3.5" ry="2" fill="#ffffff" opacity="0.95" />
          <ellipse cx="18" cy="56" rx="3.5" ry="2" fill="#ffffff" opacity="0.95" />
          {/* Heel detail */}
          <rect x="11" y="56" width="0.5" height="3" fill="#e5e7eb" />
          <rect x="17" y="56" width="0.5" height="3" fill="#e5e7eb" />
          {/* Shoe embellishment */}
          <circle cx="12" cy="55" r="0.3" fill="#fbbf24" opacity="0.8" />
          <circle cx="18" cy="55" r="0.3" fill="#fbbf24" opacity="0.8" />
        </g>
        
        {/* Central Love Heart */}
        <g transform="translate(52, 25)">
          {/* Main Heart Shape */}
          <motion.path
            d="M0 8C0 4 4 0 8 2C12 0 16 4 16 8C16 12 8 20 8 20S0 12 0 8Z"
            fill="currentColor"
            opacity="0.9"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.9, 1, 0.9] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Heart Highlight */}
          <path
            d="M2 6C2 3 5 1 8 3C11 1 14 3 14 6C14 9 8 15 8 15S2 9 2 6Z"
            fill="white"
            opacity="0.3"
          />
          
          {/* Heart Center Glow */}
          <motion.circle 
            cx="8" 
            cy="8" 
            r="2" 
            fill="white" 
            opacity="0.2"
            animate={{ 
              r: [2, 3, 2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Tiny sparkles around heart */}
          <g opacity="0.8">
            <motion.circle 
              cx="4" 
              cy="4" 
              r="0.5" 
              fill="currentColor"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0 
              }}
            />
            <motion.circle 
              cx="12" 
              cy="4" 
              r="0.5" 
              fill="currentColor"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3 
              }}
            />
            <motion.circle 
              cx="2" 
              cy="10" 
              r="0.3" 
              fill="currentColor"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6 
              }}
            />
            <motion.circle 
              cx="14" 
              cy="10" 
              r="0.3" 
              fill="currentColor"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9 
              }}
            />
            <motion.circle 
              cx="8" 
              cy="2" 
              r="0.3" 
              fill="currentColor"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2 
              }}
            />
          </g>
        </g>
        
        {/* Ring Exchange Animation */}
        {showRing && (
          <motion.g 
            transform="translate(60, 30)"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.5, 1],
              opacity: [0, 1, 0.8],
              rotate: [0, 360, 720]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            {/* Golden Ring */}
            <circle cx="0" cy="0" r="6" fill="none" stroke="#ffd700" strokeWidth="2" />
            <circle cx="0" cy="-4" r="2" fill="#ff69b4" />
            <path d="M-2 -4 L0 -6 L2 -4 L0 -2 Z" fill="#ff1493" />
            
            {/* Ring Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={8 * Math.cos((i * Math.PI) / 3)}
                cy={8 * Math.sin((i * Math.PI) / 3)}
                r="0.5"
                fill="#ffd700"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.g>
        )}
        
        {/* Connection Lines between Couple and Heart */}
        <g opacity="0.4">
          {/* Groom to Heart */}
          <motion.path
            d="M37 32C45 30 48 28 52 28"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2,3"
            animate={{ 
              strokeDashoffset: [0, 10, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          
          {/* Heart to Bride */}
          <motion.path
            d="M68 28C72 28 75 30 83 32"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2,3"
            animate={{ 
              strokeDashoffset: [0, -10, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          
          {/* Energy particles */}
          <motion.circle 
            cx="42" 
            cy="30" 
            r="0.5" 
            fill="currentColor" 
            animate={{ 
              x: [0, 15, 0],
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.circle 
            cx="78" 
            cy="30" 
            r="0.5" 
            fill="currentColor"
            animate={{ 
              x: [0, -15, 0],
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          />
        </g>
        
        {/* Decorative Corner Flourishes */}
        <g opacity="0.3">
          {/* Top corners */}
          <path
            d="M10 5C12 3 14 5 12 7"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          <path
            d="M110 5C108 3 106 5 108 7"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          
          {/* Bottom corners */}
          <path
            d="M10 70C12 72 14 70 12 68"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          <path
            d="M110 70C108 72 106 70 108 68"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </motion.div>
  );
};