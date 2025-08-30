import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CosmicTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  glow?: boolean;
  animate?: boolean;
}

export function CosmicText({ 
  children, 
  className = '', 
  variant = 'primary', 
  glow = false,
  animate = false 
}: CosmicTextProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return glow 
          ? 'text-transparent bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text cosmic-text-glow'
          : 'text-white';
      case 'secondary':
        return glow
          ? 'text-transparent bg-gradient-to-r from-cyan-300 via-purple-200 to-pink-300 bg-clip-text cosmic-text-glow'
          : 'text-purple-200';
      case 'accent':
        return glow
          ? 'text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text cosmic-text-glow'
          : 'text-cyan-200';
      default:
        return 'text-white';
    }
  };

  const textClasses = `${getVariantClasses()} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={textClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={textClasses}>
      {children}
    </div>
  );
}