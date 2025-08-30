import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CountdownTimer } from './CountdownTimer';
import { DarkModeToggle } from './DarkModeToggle';

export function WeddingHeader() {
  // Set target date to December 14, 2025 (first wedding ceremony)
  const weddingDate = new Date('2025-12-14T10:00:00');

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551546897-0cf94d9bb428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVufDF8fHx8MTc1NjQ2NzUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Save the Date */}
          <motion.div
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bodoni text-white/90 tracking-wide text-2xl md:text-3xl lg:text-4xl">Save the Date</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
              Wedding
            </h1>
            <h2 className="font-bodoni text-3xl md:text-4xl lg:text-5xl text-white/90 font-light tracking-wide">
              Invitation
            </h2>
          </motion.div>

          {/* Countdown Timer */}
          <CountdownTimer 
            targetDate={weddingDate}
            className="my-12"
          />

          {/* Date Section - Perfectly Centered */}
          <motion.div
            className="w-full max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            {/* Month Label - Centered */}
            <div className="text-center mb-6">
              <div className="font-sans text-rose-300 text-3xl md:text-4xl lg:text-5xl tracking-wider">
                DECEMBER 2025
              </div>
            </div>
            
            {/* Dates Container - Perfect Center */}
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 text-white/80" style={{ marginLeft: '26px' }}>
                {/* Left Date */}
                <div className="text-center flex-shrink-0">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl mb-2">14</div>
                  <div className="font-sans text-base md:text-lg tracking-wider">Lễ Vu Quy</div>
                </div>
                
                {/* Center Vertical Divider - ALIGNED WITH DARK MODE TOGGLE */}
                <motion.div 
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{ transform: 'translateX(-18px)' }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 2.3 }}
                >
                  {/* Perfect center reference line (invisible) */}
                  <div className="absolute w-px h-full bg-transparent"></div>
                  
                  {/* Main vertical line */}
                  <div className="relative w-0.5 h-16 bg-gradient-to-b from-transparent via-white/70 to-transparent"></div>
                  
                  {/* Decorative center dot */}
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-rose-300/90 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Elegant glow effect */}
                  <div className="absolute w-4 h-16 bg-gradient-to-b from-transparent via-rose-300/15 to-transparent blur-sm"></div>
                  
                  {/* Subtle sparkle effects */}
                  <motion.div
                    className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                    style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                    style={{ top: '80%', left: '50%', transform: 'translateX(-50%)' }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />
                </motion.div>
                
                {/* Right Date */}
                <div className="text-center flex-shrink-0">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl mb-2">21</div>
                  <div className="font-sans text-base md:text-lg tracking-wider">Lễ Thành Hôn</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dark Mode Toggle - Centered */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <DarkModeToggle className="" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.button
              onClick={() => {
                // Enhanced scroll - scroll to Groom section specifically
                const groomSection = document.querySelector('#groom-section');
                if (groomSection) {
                  // Scroll directly to groom section for perfect positioning
                  const elementPosition = groomSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - 80; // Small offset for breathing room
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  // Fallback - scroll to couple names section
                  const coupleNamesSection = document.querySelector('#couple-names-section');
                  if (coupleNamesSection) {
                    const elementPosition = coupleNamesSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset + 100; // Rough estimate to groom section
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  } else {
                    // Final fallback
                    window.scrollBy({ 
                      top: window.innerHeight * 1.3, 
                      behavior: 'smooth' 
                    });
                  }
                }
              }}
              className="group relative cursor-pointer"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Wedding Invitation Card */}
              <motion.div
                className="relative w-24 h-20 rounded-xl overflow-hidden shadow-2xl border border-white/40"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 250, 250, 0.98), rgba(254, 242, 242, 0.95))',
                  boxShadow: '0 20px 40px rgba(244, 63, 94, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                }}
                animate={{ 
                  rotateY: [0, 8, -8, 0],
                  rotateX: [0, 3, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Elegant Background Pattern */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1658573273410-286a63bf4110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2VkZGluZyUyMGNhcmQlMjBkZXNpZ24lMjB3aGl0ZSUyMGdvbGR8ZW58MXx8fHwxNzU2NDg2NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
                  }}
                />
                
                {/* Subtle Rose Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1702144949880-6c798efebe40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMHJvc2VzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTY0ODY2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
                    }}
                  />
                </div>
                
                {/* Decorative Frame */}
                <div className="absolute inset-1 border-2 border-rose-200/60 rounded-lg"></div>
                <div className="absolute inset-2 border border-rose-300/40 rounded-md"></div>
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-3">
                  {/* Top Decorative Element */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                    <motion.div
                      className="w-1.5 h-1.5 bg-rose-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-2 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  </div>
                  
                  {/* Main Text */}
                  <div className="text-center space-y-1">
                    <div className="font-utm-edwardian text-rose-600 text-sm leading-none">Wedding</div>
                    <div className="font-serif text-rose-700 text-xs leading-none tracking-wider">INVITATION</div>
                  </div>
                  
                  {/* Names Initial */}
                  <div className="mt-1 text-center">
                    <div className="font-script text-rose-500 text-xs">Đ & K</div>
                  </div>
                  
                  {/* Bottom Decorative Element */}
                  <div className="mt-2 flex items-center gap-0.5">
                    <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                    <div className="w-3 h-px bg-rose-300 opacity-60"></div>
                    <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Luxury Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Premium Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-400/20 via-transparent to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                />
                
                {/* Gold accent on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                />
              </motion.div>

              {/* Elegant floating elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${15 + (i * 18)}%`,
                      top: `${25 + (i % 2) * 35}%`,
                    }}
                    animate={{
                      y: [-8, 8, -8],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1.1, 0.8],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.8,
                    }}
                  >
                    <div className="w-1 h-1 bg-rose-300/70 rounded-full shadow-sm" />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced scroll hint */}
              <motion.div
                className="mt-4 text-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="font-script text-white/80 text-sm drop-shadow-sm">Cuộn xuống</div>
                <div className="font-sans text-white/60 text-xs tracking-widest uppercase">Scroll Down</div>
                
                {/* Subtle indicator dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-white/40 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}