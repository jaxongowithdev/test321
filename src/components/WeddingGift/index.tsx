import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Gift } from 'lucide-react';
import { useState, useRef } from 'react';
import { FloatingElements } from './FloatingElements';
import { QRCodeSection } from './QRCodeSection';
import { BankInfoSection } from './BankInfoSection';

export const WeddingGift = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isHoveringQR, setIsHoveringQR] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 dark:from-rose-900/20 via-background via-background to-pink-50/30 dark:to-pink-900/20 transition-colors duration-500"></div>
      
      {/* Subtle pattern overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(244,63,94,0.03) 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, rgba(236,72,153,0.03) 0%, transparent 50%)`
          }}
        />
      </motion.div>

      {/* Minimal floating elements */}
      <FloatingElements y={y} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Simplified header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Clean decorative line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-rose-300/50"></div>
            <div className="mx-4">
              <Gift className="w-6 h-6 text-rose-500" />
            </div>
            <div className="w-16 h-px bg-rose-300/50"></div>
          </div>

          <h2 className="font-serif text-foreground mb-4">
            Gửi lời chúc đến cô dâu & chú rể
          </h2>
          
          <div className="w-20 h-0.5 bg-rose-400 rounded-full mx-auto mb-6" />

          <div className="space-y-3">
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Gửi mừng cưới sớm cho dâu và rể bằng mã QR dưới đây bạn yêu nhé
            </p>
            <p className="font-script text-rose-500 italic">
              ♡ Tấm lòng của bạn là món quà quý giá nhất ♡
            </p>
          </div>
        </motion.div>

        {/* Main content with cleaner layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <QRCodeSection 
            isHoveringQR={isHoveringQR}
            setIsHoveringQR={setIsHoveringQR}
          />
          
          <BankInfoSection
            copiedField={copiedField}
            setCopiedField={setCopiedField}
          />
        </div>

        {/* Simple bottom decoration */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-rose-300/50" />
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/60" />
            <div className="w-12 h-px bg-rose-300/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};