import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function CosmicBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    // Generate floating particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['#8B5CF6', '#06B6D4', '#F59E0B', '#EC4899', '#10B981'];
      
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };

    generateStars();
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-black"></div>
      
      {/* Nebula Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-800/20 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-1/3 right-0 w-2/3 h-2/3 bg-gradient-radial from-blue-800/15 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-pink-800/10 via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Cosmic Dust Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + star.twinkleDelay,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, -20, 0],
              opacity: [0.2, 0.8, 0.3, 0.2],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Random constellation lines */}
        <motion.path
          d="M100,150 L200,100 L350,120 L400,80"
          stroke="url(#constellationGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 4, delay: 2 }}
        />
        <motion.path
          d="M600,200 L750,150 L850,180 L900,120"
          stroke="url(#constellationGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 5, delay: 3 }}
        />
        <motion.path
          d="M200,400 L300,350 L450,380 L500,320"
          stroke="url(#constellationGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 6, delay: 1 }}
        />
      </svg>

      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-400/20 via-blue-500/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-2/3 h-24 bg-gradient-to-b from-purple-400/15 via-pink-500/10 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: '20%',
            right: '80%',
            transform: 'rotate(-30deg)',
          }}
          animate={{
            x: [0, 400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 5,
            repeatDelay: 15
          }}
        />
        <motion.div
          className="absolute w-1.5 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
          style={{
            top: '60%',
            left: '10%',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            x: [0, 300],
            y: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 10,
            repeatDelay: 20
          }}
        />
      </div>

      {/* Cosmic Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
    </div>
  );
}