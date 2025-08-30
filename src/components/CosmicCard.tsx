import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CosmicCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'outline';
  glow?: boolean;
  animate?: boolean;
}

export function CosmicCard({ 
  children, 
  className = '', 
  variant = 'glass',
  glow = false,
  animate = true 
}: CosmicCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return `
          bg-gradient-to-br from-white/10 via-purple-500/5 to-cyan-500/10 
          backdrop-blur-xl border border-white/20 
          shadow-2xl shadow-purple-500/10
          ${glow ? 'cosmic-glow' : ''}
        `;
      case 'solid':
        return `
          bg-gradient-to-br from-gray-900/90 via-purple-900/80 to-black/90 
          border border-purple-500/30
          shadow-2xl shadow-black/50
          ${glow ? 'cosmic-glow' : ''}
        `;
      case 'outline':
        return `
          bg-transparent border-2 border-gradient-to-r from-purple-400/50 to-cyan-400/50
          backdrop-blur-sm
          ${glow ? 'cosmic-glow' : ''}
        `;
      default:
        return '';
    }
  };

  const cardClasses = `${getVariantClasses()} rounded-2xl ${className}`;

  if (animate) {
    return (
      <motion.div
        className={cardClasses}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}