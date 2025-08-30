import { motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';
import { CornerOrnament } from './CornerOrnament';
import { CenterDragonPhoenix } from './CenterDragonPhoenix';

interface CoupleNamesProps {
  onInView: () => void;
}

export const CoupleNames = forwardRef<HTMLDivElement, CoupleNamesProps>(
  ({ onInView }, ref) => {
    const hasTriggered = useRef(false);

    const handleInView = () => {
      if (!hasTriggered.current) {
        hasTriggered.current = true;
        onInView();
      }
    };
    return (
      <motion.div
        ref={ref}
        id="couple-names-section"
        className="relative bg-background py-24 px-6 transition-colors duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
        }}
        onViewportEnter={handleInView}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="relative"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </motion.div>

            {/* Groom Section (Top) */}
            <motion.div
              id="groom-section"
              className="relative mb-4 max-w-sm mx-auto"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Top Corner Ornaments for Groom */}
              <CornerOrnament position="top-left" delay={0.7} />
              <CornerOrnament position="top-right" delay={0.8} />

              <div className="text-center space-y-5 py-6 px-6">
                {/* Groom Label */}
                <div className="font-sans text-sm tracking-[0.3em] text-muted-foreground uppercase">Chú rể</div>
                
                {/* Groom Name */}
                <h1 className="font-utm-edwardian text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                  Võ Minh Đạt
                </h1>
                
                {/* Groom Title */}
                <div className="font-script text-lg md:text-xl text-rose-600 italic">Út Nam</div>
                
                {/* Groom Family */}
                <div className="bg-card/40 rounded-lg p-4 backdrop-blur-sm mt-4">
                  <h3 className="font-serif text-sm md:text-base text-foreground tracking-wide mb-3">
                    NHÀ TRAI
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <span className="font-sans text-xs text-muted-foreground mr-2">Ông</span>
                      <span className="font-serif text-sm text-foreground">Võ Mạnh</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="font-sans text-xs text-muted-foreground mr-2">Bà</span>
                      <span className="font-serif text-sm text-foreground">Nguyễn Thị Quý</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Dragon Phoenix Heart - Between Sections */}
            <div className="relative flex justify-center my-2">
              <CenterDragonPhoenix delay={1.0} />
            </div>

            {/* Bride Section (Bottom) */}
            <motion.div
              id="bride-section"
              className="relative mt-4 max-w-sm mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Bottom Corner Ornaments for Bride */}
              <CornerOrnament position="bottom-left" delay={0.8} />
              <CornerOrnament position="bottom-right" delay={0.9} />

              <div className="text-center space-y-5 py-6 px-6">
                {/* Bride Label */}
                <div className="font-sans text-sm tracking-[0.3em] text-muted-foreground uppercase">Cô dâu</div>
                
                {/* Bride Name */}
                <h1 className="font-utm-edwardian text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                  Đoàn Thị Kim Khoa
                </h1>
                
                {/* Bride Title */}
                <div className="font-script text-lg md:text-xl text-rose-600 italic">Trưởng Nữ</div>
                
                {/* Bride Family */}
                <div className="bg-card/40 rounded-lg p-4 backdrop-blur-sm mt-4">
                  <h3 className="font-serif text-sm md:text-base text-foreground tracking-wide mb-3">
                    NHÀ GÁI
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <span className="font-sans text-xs text-muted-foreground mr-2">Ông</span>
                      <span className="font-serif text-sm text-foreground">Đoàn Tiếm</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="font-sans text-xs text-muted-foreground mr-2">Bà</span>
                      <span className="font-serif text-sm text-foreground">Hồ Hồng Phượng</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              className="flex items-center justify-center py-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-px bg-rose-400/60"></div>
              <div className="mx-3 w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
              <div className="mx-1 w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="mx-1 w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
              <div className="mx-3 w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
              <div className="w-12 h-px bg-rose-400/60"></div>
            </motion.div>

            {/* Invitation Text */}
            <motion.div
              className="space-y-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-px bg-rose-400 mx-auto mb-4"></div>
              <p className="font-script text-[22px] md:text-2xl lg:text-3xl text-foreground/80 font-light tracking-wide">
                Trân trọng kính mời
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Chúng tôi sẽ tổ chức lễ thành hôn và rất mong nhận được sự hiện diện của bạn
                để chứng kiến khoảnh khắc thiêng liêng này
              </p>
            </motion.div>

            {/* Decorative Bottom */}
            <motion.div
              className="flex items-center justify-center mt-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);