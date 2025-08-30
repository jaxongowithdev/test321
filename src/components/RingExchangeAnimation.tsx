import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export function RingExchangeAnimation() {
  const [animationStage, setAnimationStage] = useState(0); // 0: initial, 1: walking, 2: kneeling, 3: exchange, 4: celebration
  const [isKneeling, setIsKneeling] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const groomControls = useAnimation();
  const brideControls = useAnimation();
  const ringControls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      // Stage 1: Characters walk towards each other
      setAnimationStage(1);
      setIsWalking(true);
      await Promise.all([
        groomControls.start({
          x: 100,
          y: [0, -2, 0, -2, 0], // Subtle bounce while walking
          transition: { type: "tween", duration: 2.5, ease: "easeInOut" }
        }),
        brideControls.start({
          x: -100,
          y: [0, -2, 0, -2, 0], // Subtle bounce while walking
          transition: { type: "tween", duration: 2.5, ease: "easeInOut" }
        })
      ]);
      setIsWalking(false);

      // Stage 2: Characters kneel down
      setAnimationStage(2);
      setIsKneeling(true);
      await Promise.all([
        groomControls.start({
          y: 20,
          scaleY: 0.8,
          transition: { duration: 1, ease: "easeOut" }
        }),
        brideControls.start({
          y: 20,
          scaleY: 0.8,
          transition: { duration: 1, ease: "easeOut" }
        })
      ]);

      // Stage 3: Ring exchange while kneeling
      setAnimationStage(3);
      await ringControls.start({
        scale: [0, 1.8, 1.2],
        rotate: [0, 360, 720],
        opacity: [0, 1, 1],
        y: [0, -10, 0],
        transition: { type: "tween", duration: 2, ease: "easeOut" }
      });

      // Stage 4: Stand up and celebrate
      setAnimationStage(4);
      setIsKneeling(false);
      await Promise.all([
        groomControls.start({
          y: 0,
          scaleY: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        }),
        brideControls.start({
          y: 0,
          scaleY: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        })
      ]);

      // Celebration jump
      await Promise.all([
        groomControls.start({
          y: [-10, 0, -10, 0],
          transition: { type: "tween", duration: 1, repeat: 1, ease: "easeInOut" }
        }),
        brideControls.start({
          y: [-10, 0, -10, 0],
          transition: { type: "tween", duration: 1, repeat: 1, ease: "easeInOut", delay: 0.2 }
        })
      ]);

      // Reset and repeat
      setTimeout(() => {
        setAnimationStage(0);
        setIsKneeling(false);
        setIsWalking(false);
        groomControls.set({ x: 0, y: 0, scaleY: 1 });
        brideControls.set({ x: 0, y: 0, scaleY: 1 });
        ringControls.set({ scale: 0, rotate: 0, opacity: 0, y: 0 });
      }, 2000);
    };

    const interval = setInterval(runAnimation, 12000);
    runAnimation(); // Run immediately

    return () => clearInterval(interval);
  }, [groomControls, brideControls, ringControls]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50/30 via-white to-rose-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-utm-edwardian text-4xl md:text-5xl text-rose-600 mb-4">
            Trao Nhẫn Định Tình
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/50" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Sparkles className="w-4 h-4 text-rose-400" />
          </div>
        </motion.div>

        {/* Animation Container */}
        <div className="relative h-80 md:h-96 flex items-center justify-center">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-rose-300/30 rounded-full"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Groom Character */}
          <motion.div
            className="absolute left-1/4"
            animate={groomControls}
            initial={{ x: 0, y: 0, scaleY: 1 }}
          >
            <div className="relative">
              {/* Groom SVG */}
              <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
                {/* Body - adjusted for kneeling */}
                <rect x="25" y={isKneeling ? "60" : "50"} width="30" height={isKneeling ? "40" : "50"} rx="15" fill="#2d3748" />
                
                {/* Head */}
                <circle cx="40" cy="25" r="18" fill="#fdbcb4" />
                
                {/* Hair */}
                <path d="M22 15 Q40 5 58 15 Q58 25 40 25 Q22 25 22 15" fill="#2d3748" />
                
                {/* Eyes */}
                <circle cx="34" cy="22" r="2" fill="#2d3748" />
                <circle cx="46" cy="22" r="2" fill="#2d3748" />
                
                {/* Smile */}
                <path d="M35 30 Q40 35 45 30" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Arms - extended forward when kneeling */}
                <circle cx={isKneeling ? "20" : "15"} cy={isKneeling ? "65" : "60"} r="8" fill="#fdbcb4" />
                <circle cx={isKneeling ? "60" : "65"} cy={isKneeling ? "65" : "60"} r="8" fill="#fdbcb4" />
                <rect x={isKneeling ? "15" : "10"} y={isKneeling ? "60" : "55"} width="15" height="8" rx="4" fill="#2d3748" />
                <rect x={isKneeling ? "50" : "55"} y={isKneeling ? "60" : "55"} width="15" height="8" rx="4" fill="#2d3748" />
                
                {/* Legs - kneeling position */}
                {isKneeling ? (
                  <>
                    {/* Kneeling legs */}
                    <rect x="28" y="90" width="8" height="15" rx="4" fill="#2d3748" />
                    <rect x="44" y="90" width="8" height="15" rx="4" fill="#2d3748" />
                    {/* Knee pads touching ground */}
                    <ellipse cx="32" cy="105" rx="8" ry="4" fill="#2d3748" />
                    <ellipse cx="48" cy="105" rx="8" ry="4" fill="#2d3748" />
                  </>
                ) : (
                  <>
                    {/* Standing legs */}
                    <rect x="28" y="95" width="8" height="20" rx="4" fill="#2d3748" />
                    <rect x="44" y="95" width="8" height="20" rx="4" fill="#2d3748" />
                    {/* Shoes */}
                    <ellipse cx="32" cy="118" rx="6" ry="3" fill="#1a202c" />
                    <ellipse cx="48" cy="118" rx="6" ry="3" fill="#1a202c" />
                  </>
                )}
                
                {/* Bow tie */}
                <path d="M35 45 L45 45 L40 40 Z" fill="#e53e3e" />
                <path d="M35 45 L45 45 L40 50 Z" fill="#e53e3e" />
                <rect x="38" y="43" width="4" height="4" fill="#c53030" />
              </svg>
              
              {/* Groom Name */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
              >
                <span className="font-script text-lg text-rose-600">Minh Đạt</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bride Character */}
          <motion.div
            className="absolute right-1/4"
            animate={brideControls}
            initial={{ x: 0, y: 0, scaleY: 1 }}
          >
            <div className="relative">
              {/* Bride SVG */}
              <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
                {/* Dress - adjusted for kneeling */}
                <path d={isKneeling ? 
                  "M25 60 Q40 55 55 60 L60 95 Q40 100 20 95 Z" : 
                  "M25 50 Q40 45 55 50 L65 100 Q40 105 15 100 Z"
                } fill="#ffffff" stroke="#f7fafc" strokeWidth="1" />
                
                {/* Body */}
                <rect x="32" y={isKneeling ? "60" : "50"} width="16" height={isKneeling ? "20" : "30"} rx="8" fill="#fdbcb4" />
                
                {/* Head */}
                <circle cx="40" cy="25" r="18" fill="#fdbcb4" />
                
                {/* Hair */}
                <path d="M22 15 Q40 5 58 15 Q58 30 50 25 Q45 20 40 25 Q35 20 30 25 Q22 30 22 15" fill="#8b4513" />
                
                {/* Veil */}
                <path d="M22 15 Q40 0 58 15 Q70 25 65 40 Q55 35 40 40 Q25 35 15 40 Q10 25 22 15" fill="#ffffff" opacity="0.8" />
                
                {/* Eyes */}
                <circle cx="34" cy="22" r="2" fill="#2d3748" />
                <circle cx="46" cy="22" r="2" fill="#2d3748" />
                
                {/* Smile */}
                <path d="M35 30 Q40 35 45 30" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round" />
                
                {/* Arms - extended forward when kneeling */}
                <circle cx={isKneeling ? "20" : "15"} cy={isKneeling ? "65" : "60"} r="8" fill="#fdbcb4" />
                <circle cx={isKneeling ? "60" : "65"} cy={isKneeling ? "65" : "60"} r="8" fill="#fdbcb4" />
                
                {/* Dress details */}
                <circle cx="30" cy={isKneeling ? "75" : "70"} r="2" fill="#f7fafc" />
                <circle cx="40" cy={isKneeling ? "80" : "75"} r="2" fill="#f7fafc" />
                <circle cx="50" cy={isKneeling ? "75" : "70"} r="2" fill="#f7fafc" />
                
                {/* Legs/Dress bottom - kneeling position */}
                {isKneeling ? (
                  <>
                    {/* Kneeling pose - dress pools around knees */}
                    <ellipse cx="40" cy="100" rx="20" ry="8" fill="#ffffff" opacity="0.9" />
                  </>
                ) : (
                  <>
                    {/* Standing shoes */}
                    <ellipse cx="32" cy="118" rx="6" ry="3" fill="#ffffff" />
                    <ellipse cx="48" cy="118" rx="6" ry="3" fill="#ffffff" />
                  </>
                )}
                
                {/* Bouquet - repositioned when kneeling */}
                <circle cx={isKneeling ? "25" : "20"} cy={isKneeling ? "70" : "75"} r="8" fill="#f687b3" />
                <circle cx={isKneeling ? "20" : "15"} cy={isKneeling ? "65" : "70"} r="4" fill="#ed64a6" />
                <circle cx={isKneeling ? "30" : "25"} cy={isKneeling ? "65" : "70"} r="4" fill="#ed64a6" />
                <circle cx={isKneeling ? "25" : "20"} cy={isKneeling ? "60" : "65"} r="4" fill="#ed64a6" />
                <rect x={isKneeling ? "23" : "18"} y={isKneeling ? "77" : "82"} width="4" height="10" rx="2" fill="#68d391" />
              </svg>
              
              {/* Bride Name */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
              >
                <span className="font-script text-lg text-rose-600">Kim Khoa</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Ring Exchange Animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={ringControls}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
          >
            <div className="relative">
              {/* Ring */}
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="12" fill="none" stroke="#ffd700" strokeWidth="3" />
                <circle cx="20" cy="12" r="4" fill="#ff69b4" />
                <path d="M16 12 L20 8 L24 12 L20 16 Z" fill="#ff1493" />
              </svg>
              
              {/* Sparkles around ring */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      left: `${50 + 30 * Math.cos((i * Math.PI) / 3)}%`,
                      top: `${50 + 30 * Math.sin((i * Math.PI) / 3)}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hearts floating animation */}
          {animationStage >= 3 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                    opacity: 0
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 200}%`,
                    y: `${20 + Math.random() * 30}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    type: "tween",
                    duration: 2,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Wedding arch background */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20">
            <svg width="300" height="200" viewBox="0 0 300 200">
              <path d="M50 150 Q150 50 250 150" stroke="#f687b3" strokeWidth="4" fill="none" />
              <path d="M60 140 Q150 60 240 140" stroke="#ed64a6" strokeWidth="2" fill="none" />
              
              {/* Flowers on arch */}
              <circle cx="80" cy="130" r="8" fill="#f687b3" />
              <circle cx="120" cy="100" r="6" fill="#ed64a6" />
              <circle cx="150" cy="85" r="7" fill="#f687b3" />
              <circle cx="180" cy="100" r="6" fill="#ed64a6" />
              <circle cx="220" cy="130" r="8" fill="#f687b3" />
            </svg>
          </div>
        </div>

        {/* Animation Stage Indicator */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="inline-flex items-center gap-2 bg-rose-50/80 backdrop-blur-sm px-6 py-3 rounded-full border border-rose-200/50">
            {animationStage === 0 && (
              <span className="font-script text-rose-600">Chờ đợi nhau...</span>
            )}
            {animationStage === 1 && (
              <span className="font-script text-rose-600">Tiến đến bên nhau...</span>
            )}
            {animationStage === 2 && (
              <span className="font-script text-rose-600">Quỳ xuống...</span>
            )}
            {animationStage === 3 && (
              <span className="font-script text-rose-600">Trao nhẫn định tình!</span>
            )}
            {animationStage === 4 && (
              <span className="font-script text-rose-600">Hạnh phúc bên nhau!</span>
            )}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ type: "tween", duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}