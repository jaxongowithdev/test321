import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Heart, Sparkles } from 'lucide-react';

interface QRCodeSectionProps {
  isHoveringQR: boolean;
  setIsHoveringQR: (hovering: boolean) => void;
}

export const QRCodeSection = ({ isHoveringQR, setIsHoveringQR }: QRCodeSectionProps) => {
  return (
    <motion.div
      className="flex justify-center lg:justify-end"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative max-w-sm mx-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Simple elegant card */}
        <div 
          className="relative bg-card rounded-2xl p-8 border border-rose-200/30 shadow-lg transition-colors duration-500"
          style={{
            boxShadow: '0 10px 40px -10px rgba(244, 63, 94, 0.1)'
          }}
        >
          {/* Minimal decorative corners */}
          <div className="absolute top-4 left-4">
            <Heart className="w-4 h-4 text-rose-400/60 fill-rose-400/40" />
          </div>
          <div className="absolute top-4 right-4">
            <Sparkles className="w-4 h-4 text-rose-400/60" />
          </div>

          <div className="space-y-6">
            {/* Clean header */}
            <div className="text-center space-y-3">
              <h3 className="font-script text-rose-600 text-xl">QR Code Thanh Toán</h3>
              <div className="w-16 h-px bg-rose-300 mx-auto" />
            </div>

            {/* QR Code with minimal frame */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative p-3 bg-gradient-to-br from-rose-50/50 dark:from-rose-900/30 to-background rounded-xl border border-rose-100 dark:border-rose-800 transition-colors duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571867424488-4565932edb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBwYXltZW50JTIwbW9iaWxlfGVufDF8fHx8MTc1NjM3Mzk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="QR Code thanh toán mừng cưới"
                  className="w-48 h-48 object-cover rounded-lg mx-auto"
                />
                
                {/* Simple corner accents */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-rose-300/50 rounded-tl"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-rose-300/50 rounded-tr"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-rose-300/50 rounded-bl"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-rose-300/50 rounded-br"></div>
              </div>
            </motion.div>

            {/* Clean footer text */}
            <div className="text-center space-y-2">
              <p className="font-sans text-muted-foreground text-sm">
                Quét mã để gửi lời chúc
              </p>
              <div className="flex items-center justify-center gap-2 opacity-70">
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <span className="font-script text-rose-400 text-xs">Cảm ơn bạn yêu</span>
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};