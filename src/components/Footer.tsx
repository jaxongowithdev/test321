import { motion } from 'motion/react';
import { Heart, Sparkles, Music } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-b from-gray-900 to-black py-16 overflow-hidden border-t border-rose-500/20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/50" />
          </motion.div>
        ))}

        {/* Sparkling Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-rose-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative Top Border */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400/80 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <div className="mx-6 flex items-center gap-3">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-5 h-5 text-rose-400" />
            </motion.div>
            <motion.div
              className="w-3 h-3 bg-rose-400 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Sparkles className="w-5 h-5 text-rose-400" />
            </motion.div>
          </div>
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400/80 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Made with Love Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-rose-500/10 via-rose-400/20 to-rose-500/10 px-10 py-5 rounded-full backdrop-blur-sm border border-rose-400/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(244, 63, 94, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </motion.div>
            <span className="font-script text-rose-300 text-lg tracking-wider">Made with love</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.25
              }}
            >
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Music Note Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3">
            <motion.div
              animate={{ 
                y: [-3, 3, -3],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Music className="w-5 h-5 text-rose-400/70" />
            </motion.div>
            <span className="font-script text-rose-300/80 text-sm">
              Nothing Gonna Change My Love for You
            </span>
            <motion.div
              animate={{ 
                y: [3, -3, 3],
                rotate: [5, -5, 5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Music className="w-5 h-5 text-rose-400/70" />
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              className="w-12 h-px bg-rose-400/50"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-rose-400/70" />
            </motion.div>
            <motion.div
              className="w-12 h-px bg-rose-400/50"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          
          <motion.p
            className="font-sans text-rose-200/90 text-base tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            © 2025 Roxanatech
          </motion.p>
          
          <motion.p
            className="font-script text-gray-400/70 text-sm italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Creating beautiful moments, one code at a time
          </motion.p>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-rose-400/40 rounded-full flex items-center justify-center relative"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="w-3 h-3 bg-rose-400/70 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            {/* Orbiting dots */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-rose-400 rounded-full"
                style={{
                  transformOrigin: '16px 0px',
                }}
                animate={{ 
                  rotate: [angle, angle + 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};