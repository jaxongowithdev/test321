import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1730476513367-16fe58a8a653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NDUyODIxfDA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Couple Portrait",
    caption: "Khoảnh khắc hạnh phúc"
  },
  {
    src: "https://images.unsplash.com/photo-1739216906046-afc47ed589fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJpbmdzfGVufDF8fHx8MTc1NjQ2NzcyNnww&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Rings",
    caption: "Nhẫn cưới thiêng liêng"
  },
  {
    src: "https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzU2Mzc4MzUwfDA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Bouquet",
    caption: "Hoa cưới xinh đẹp"
  },
  {
    src: "https://images.unsplash.com/photo-1630329800977-d86cb8568614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1NjQ2NzczMnww&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Ceremony",
    caption: "Trang trí lễ cưới"
  },
  {
    src: "https://images.unsplash.com/photo-1700142534189-cc18e2d42917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZHJlc3MlMjBicmlkZXxlbnwxfHx8fDE3NTY0Njc3MzV8MA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Dress",
    caption: "Váy cưới lộng lẫy"
  },
  {
    src: "https://images.unsplash.com/photo-1677768061409-3d4fbd0250d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc1NjQ2NzczOXww&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Table Setting",
    caption: "Bàn tiệc sang trọng"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f29b1fe7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGFuY2UlMjBjb3VwbGV8ZW58MXx8fHwxNzU2NDc5NzAyfDA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Dance",
    caption: "Điệu nhảy đầu tiên"
  },
  {
    src: "https://images.unsplash.com/photo-1623044928207-ebb900b8f2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU2NDc5NzA2fDA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Cake",
    caption: "Bánh cưới ngọt ngào"
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY29uZmV0dGklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTY0Nzk3MjB8MA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Celebration",
    caption: "Khoảnh khắc chúc mừng"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzU2NDc5NzIyfDA&ixlib=rb-4.1.0&q=80&w=720&utm_source=figma&utm_medium=referral",
    alt: "Wedding Flowers",
    caption: "Cắm hoa trang trí"
  }
];

// Optimized Gallery Item Component
const GalleryItem = memo(({ image, index, onClick }: { 
  image: typeof galleryImages[0], 
  index: number, 
  onClick: () => void 
}) => {
  return (
    <motion.div
      className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: Math.min(0.1 * index, 0.8) }}
      viewport={{ once: true }}
      style={{ willChange: 'transform' }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Simplified Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-script text-white text-sm">{image.caption}</p>
          </div>
        </div>

        {/* Simplified Hover Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

GalleryItem.displayName = 'GalleryItem';

export function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage]);

  // Optimized keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, goToPrevious, goToNext]);

  // Optimized touch navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (Math.abs(e.touches[0].clientX - startXRef.current) > 15) {
      isDraggingRef.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startXRef.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }

    isDraggingRef.current = false;
  }, [goToPrevious, goToNext]);

  return (
    <>
      <div className="py-24 px-6 bg-background transition-colors duration-500">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ willChange: 'transform' }}
        >
          {/* Optimized Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-6 py-2 bg-rose-100 rounded-full mb-6">
              <span className="font-sans text-rose-700 text-sm tracking-[0.2em] uppercase">Kỷ Niệm</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              Những Khoảnh Khắc Đẹp
            </h2>
            <div className="w-20 h-px bg-rose-400 mx-auto"></div>
          </motion.div>

          {/* Optimized Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Masonry
              columnsCount={3}
              gutter="16px"
              className="masonry-grid"
            >
              {galleryImages.map((image, index) => (
                <GalleryItem
                  key={index}
                  image={image}
                  index={index}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </Masonry>
          </motion.div>

          {/* Optimized Gallery Footer */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Những hình ảnh này chỉ là một phần nhỏ trong hành trình tình yêu của chúng tôi. 
              Chúng tôi rất mong được chia sẻ thêm nhiều kỷ niệm đẹp cùng với sự hiện diện của bạn.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Optimized Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage !== null && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ willChange: 'opacity' }}
          >
            {/* Optimized Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200 z-20 border border-white/30"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Đóng (ESC)"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Optimized Navigation Buttons */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-rose-500/20 hover:bg-rose-500/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors duration-200 z-20 border border-rose-400/40"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Ảnh trước (←)"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-rose-500/20 hover:bg-rose-500/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors duration-200 z-20 border border-rose-400/40"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Ảnh tiếp theo (→)"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.button>

            {/* Optimized Image Container */}
            <motion.div
              key={selectedImage}
              className="max-w-4xl max-h-[90vh] relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].src.replace('w=720', 'w=1080')}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Optimized Image Caption */}
              <motion.div
                className="absolute -bottom-16 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <p className="font-script text-white text-lg">{galleryImages[selectedImage].caption}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Optimized Image Counter */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full font-sans text-white text-sm border border-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>{selectedImage + 1}</span>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">{galleryImages.length}</span>
            </motion.div>

            {/* Simplified Instructions */}
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white text-xs md:text-sm font-sans">
                  <span className="md:hidden">← Vuốt để xem ảnh →</span>
                  <span className="hidden md:inline">Dùng phím ← → để điều hướng</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}