import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function WeddingInvitation() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-rose-50/30 via-white to-rose-50/20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-1 h-1 bg-rose-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-rose-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-rose-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <Sparkles className="absolute top-32 left-1/4 w-3 h-3 text-rose-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-32 right-1/4 w-2 h-2 text-rose-400 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-2xl shadow-2xl border border-rose-100/50 relative overflow-hidden"
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
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Top Left Corner */}
            <motion.div 
              className="absolute top-6 left-6"
              initial={{ opacity: 0, rotate: -45, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 to-rose-300/30 rounded-full blur-sm"></div>
                <div className="absolute inset-2 border-2 border-rose-200/40 rounded-full"></div>
                <div className="absolute inset-4 border border-rose-300/30 rounded-full"></div>
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-rose-400" />
              </div>
            </motion.div>

            {/* Top Right Corner */}
            <motion.div 
              className="absolute top-6 right-6"
              initial={{ opacity: 0, rotate: 45, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-rose-300/30 to-pink-200/30 rounded-full blur-sm"></div>
                <div className="absolute inset-2 border-2 border-rose-300/40 rounded-full"></div>
                <div className="absolute inset-4 border border-pink-200/30 rounded-full"></div>
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-rose-400" />
              </div>
            </motion.div>

            {/* Bottom Left Corner */}
            <motion.div 
              className="absolute bottom-6 left-6"
              initial={{ opacity: 0, rotate: 135, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 to-rose-200/30 rounded-full blur-sm"></div>
                <div className="absolute inset-2 border-2 border-pink-200/40 rounded-full"></div>
                <div className="absolute inset-4 border border-rose-200/30 rounded-full"></div>
                <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-rose-400 fill-rose-400/50" />
              </div>
            </motion.div>

            {/* Bottom Right Corner */}
            <motion.div 
              className="absolute bottom-6 right-6"
              initial={{ opacity: 0, rotate: -135, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-rose-300/30 to-pink-300/30 rounded-full blur-sm"></div>
                <div className="absolute inset-2 border-2 border-rose-300/40 rounded-full"></div>
                <div className="absolute inset-4 border border-pink-200/30 rounded-full"></div>
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-rose-400" />
              </div>
            </motion.div>
          </div>

          {/* Decorative Border Frame */}
          <motion.div 
            className="absolute inset-4 border-2 border-rose-200/30 rounded-xl pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="absolute inset-2 border border-rose-100/40 rounded-lg"></div>
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Couple Information */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Groom */}
              <div className="space-y-2">
                <p className="font-serif text-lg md:text-xl tracking-wide text-gray-700">
                  Chú rể
                </p>
                <h2 className="font-utm-edwardian text-3xl md:text-4xl text-rose-600">
                  Võ Minh Đạt
                </h2>
              </div>

              {/* Separator with Heart */}
              <motion.div 
                className="flex items-center justify-center py-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300/60 to-transparent"></div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-sm absolute inset-0"></div>
                    <span className="font-serif text-2xl md:text-3xl relative z-10 text-rose-500">
                      &
                    </span>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent via-rose-300/60 to-transparent"></div>
                </div>
              </motion.div>

              {/* Bride */}
              <div className="space-y-2">
                <p className="font-serif text-lg md:text-xl tracking-wide text-gray-700">
                  Cô dâu
                </p>
                <h2 className="font-utm-edwardian text-3xl md:text-4xl text-rose-600">
                  Đoàn Thị Kim Khoa
                </h2>
              </div>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div 
              className="flex items-center justify-center py-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-rose-300/60" />
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"></div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full shadow-lg shadow-rose-400/50"
                ></motion.div>
                <div className="w-20 h-px bg-gradient-to-l from-transparent via-rose-300/40 to-transparent"></div>
                <Sparkles className="w-4 h-4 text-rose-300/60" />
              </div>
            </motion.div>

            {/* Invitation Text */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="font-serif text-xl md:text-2xl tracking-wider text-rose-600">
                Trân trọng kính mời
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <p className="font-sans text-base md:text-lg leading-relaxed text-gray-700">
                  Chúng tôi sẽ tổ chức lễ thành hôn và rất mong nhận được sự hiện diện của bạn để chứng kiến khoảnh khắc thiêng liêng này
                </p>
              </div>
            </motion.div>

            {/* Bottom Decorative Elements */}
            <motion.div 
              className="flex items-center justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-5 h-5 text-rose-300/70 fill-rose-300/30" />
                </motion.div>
                
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-rose-400/60 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1.5 h-1.5 bg-rose-300/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Heart className="w-5 h-5 text-rose-300/70 fill-rose-300/30" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}