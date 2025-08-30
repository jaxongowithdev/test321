import { motion } from 'motion/react';

export const FamilySection = () => {
  return (
    <motion.section
      className="bg-background py-20 px-6 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-rose-400 rounded-full"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Gia Đình Hai Bên
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Sự kết hợp của hai gia đình yêu thương
          </p>
        </motion.div>

        {/* Family Information Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Nhà Trai */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-rose-200/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-rose-300/30">
              {/* Family Side Title */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👨‍👩‍👦</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  NHÀ TRAI
                </h3>
                <div className="w-12 h-px bg-rose-400 mx-auto"></div>
              </motion.div>

              {/* Parents Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-rose-500 text-lg mr-2">👨</span>
                    <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Ông</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-foreground">
                    Nguyễn Minh Triết
                  </h4>
                </motion.div>

                <div className="flex items-center justify-center">
                  <div className="w-8 h-px bg-rose-300"></div>
                  <div className="mx-3 w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <div className="w-8 h-px bg-rose-300"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-rose-500 text-lg mr-2">👩</span>
                    <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Bà</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-foreground">
                    Ngô Thu Ngân
                  </h4>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Nhà Gái */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-rose-200/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-rose-300/30">
              {/* Family Side Title */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👨‍👩‍👧</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  NHÀ GÁI
                </h3>
                <div className="w-12 h-px bg-rose-400 mx-auto"></div>
              </motion.div>

              {/* Parents Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-rose-500 text-lg mr-2">👨</span>
                    <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Ông</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-foreground">
                    Nguyễn Tuấn Việt
                  </h4>
                </motion.div>

                <div className="flex items-center justify-center">
                  <div className="w-8 h-px bg-rose-300"></div>
                  <div className="mx-3 w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <div className="w-8 h-px bg-rose-300"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-rose-500 text-lg mr-2">👩</span>
                    <span className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Bà</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-foreground">
                    Nguyễn Ngọc Thanh Ngân
                  </h4>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom Element */}
        <motion.div
          className="flex items-center justify-center mt-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          <div className="mx-4 flex space-x-2">
            <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
            <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};