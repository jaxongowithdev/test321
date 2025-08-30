import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

interface FireworkParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  angle: number;
}

// Optimized Particle Component
const Particle = memo(({ particle }: { particle: FireworkParticle }) => {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full"
      style={{
        backgroundColor: particle.color,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        willChange: 'transform, opacity'
      }}
      initial={{ 
        scale: 0,
        x: 0,
        y: 0,
        opacity: 1
      }}
      animate={{
        scale: [0, 1.2, 0],
        x: [0, Math.cos(particle.angle) * 80],
        y: [0, Math.sin(particle.angle) * 80 + 20],
        opacity: [1, 1, 0]
      }}
      transition={{
        type: "tween",
        duration: 1.8,
        delay: particle.delay,
        ease: "easeOut"
      }}
    />
  );
});

Particle.displayName = 'Particle';

export const FireworksEffect = memo(({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<FireworkParticle[]>([]);

  useEffect(() => {
    if (trigger) {
      // Clear existing particles
      setParticles([]);
      
      // Reduced delay and particles for better performance
      setTimeout(() => {
        const newParticles: FireworkParticle[] = [];
        const colors = ['#f43f5e', '#fb7185', '#fda4af', '#ec4899', '#f97316'];
        
        // Reduced number of bursts and particles
        for (let burst = 0; burst < 3; burst++) {
          const centerX = 25 + Math.random() * 50;
          const centerY = 20 + Math.random() * 20;
          
          // Reduced particles per burst
          for (let i = 0; i < 12; i++) {
            const angle = (i * 30 + Math.random() * 15) * Math.PI / 180;
            newParticles.push({
              id: burst * 12 + i + Date.now(),
              x: centerX,
              y: centerY,
              color: colors[Math.floor(Math.random() * colors.length)],
              delay: burst * 0.2 + Math.random() * 0.1,
              angle: angle
            });
          }
        }
        
        setParticles(newParticles);
        
        // Clear particles sooner
        setTimeout(() => setParticles([]), 2500);
      }, 30);
    }
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} />
      ))}
    </div>
  );
});

FireworksEffect.displayName = 'FireworksEffect';