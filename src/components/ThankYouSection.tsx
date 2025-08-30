import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';

export const ThankYouSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1755402060998-ccd9d9ad317e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBzaGFkb3clMjBlbGVnYW50fGVufDF8fHx8MTc1NjQ4NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-400/30 via-rose-300/20 to-rose-500/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glass Morphism Card */}
          <div 
            className="relative backdrop-blur-md rounded-3xl p-12 border border-white/20"
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-1 bg-rose-400 rounded-full"></div>
                <div className="w-4 h-1 bg-rose-300 rounded-full mt-1 ml-2"></div>
              </motion.div>
            </div>

            <div className="absolute top-8 right-8">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                <div className="w-8 h-1 bg-rose-400 rounded-full ml-4"></div>
                <div className="w-4 h-1 bg-rose-300 rounded-full mt-1"></div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="text-center space-y-8">
              {/* Header with decorative line and heart */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="w-16 h-px bg-rose-200"></div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-6 h-6 text-rose-300 fill-rose-300" />
                  </motion.div>
                  <div className="w-16 h-px bg-rose-200"></div>
                </div>

                <h2 className="font-serif text-white text-4xl lg:text-5xl mb-2">
                  Cảm Ơn Bạn
                </h2>
                <p className="font-sans text-rose-100 text-lg tracking-wide uppercase">
                  THANK YOU
                </p>
              </motion.div>

              {/* Quote Marks and Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Opening Quote */}
                <div className="flex justify-center">
                  <div className="text-6xl text-rose-300/60 font-serif leading-none">"</div>
                </div>

                {/* First Quote */}
                <div className="max-w-2xl mx-auto">
                  <p className="font-script text-white text-xl lg:text-2xl leading-relaxed italic">
                    Tình yêu không chỉ là tìm được người phù hợp, 
                    mà còn là được chia sẻ những khoảnh khắc 
                    đẹp nhất cùng những người thân yêu như bạn
                  </p>
                </div>

                {/* Closing Quote */}
                <div className="flex justify-center">
                  <div className="text-6xl text-rose-300/60 font-serif leading-none">"</div>
                </div>
              </motion.div>

              {/* Second Message */}
              <motion.div
                className="max-w-2xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="font-sans text-white/90 text-lg leading-relaxed">
                  Sự hiện diện của bạn sẽ là món quà quý giá nhất trong ngày đặc biệt của 
                  chúng tôi. Cảm ơn vì đã là một phần trong câu chuyện tình yêu của chúng tôi.
                </p>
              </motion.div>

              {/* Stars */}
              <motion.div
                className="flex justify-center gap-3 pt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 720]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <Star className="w-6 h-6 text-rose-300 fill-rose-300" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute bottom-8 left-8">
              <motion.div
                className="w-3 h-3 bg-rose-300/60 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="absolute bottom-8 right-8">
              <motion.div
                className="w-3 h-3 bg-rose-300/60 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          >
            <div className="w-1 h-1 bg-white/30 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};