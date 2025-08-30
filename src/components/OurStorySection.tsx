import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, Calendar, MapPin, Play, X, Volume2, VolumeX } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const timeline = [
  {
    date: '30/5/2018',
    title: 'Ngày Tỏ Tình',
    subtitle: 'Lần thứ tư mới thành công',
    description: 'Sau 3 lần bị từ chối, cuối cùng em cũng nói "Có" với anh vào đúng ngày này. Đó là khởi đầu cho chuyện tình 7 năm đầy ngọt ngào.',
    image: 'https://images.unsplash.com/photo-1656829481914-eb2a1de20586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBmaXJzdCUyMGRhdGUlMjBjb25mZXNzaW9uJTIwbG92ZXxlbnwxfHx8fDE3NTY0Nzg1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    video: true, // Add video flag
    icon: '💕',
    location: '',
    position: 'left'
  },
  {
    date: '21/11/2024',
    title: 'Ngày Cầu Hôn',
    subtitle: 'Trên đồi cỏ hồng Đà Lạt',
    description: 'Dưới ánh bình minh trên đồi cỏ hồng Đà Lạt, anh đã quỳ xuống và hỏi em: "Mình cưới nhau nhé?" Đó là khoảnh khắc thiêng liêng nhất trong đời.',
    image: 'https://images.unsplash.com/photo-1715672590095-dc2f8879c9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wb3NhbCUyMGVuZ2FnZW1lbnQlMjBkYWxhdCUyMHBpbmslMjBncmFzcyUyMGhpbGx8ZW58MXx8fHwxNzU2NDc4NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '💍',
    location: 'Đồi Cỏ Hồng, Đà Lạt',
    position: 'right'
  },
  {
    date: '14/12/2025',
    title: 'Lễ Vu Quy',
    subtitle: 'Ngày về nhà chồng',
    description: 'Lễ vu quy trang trọng tại nhà gái, đánh dấu bước chuyển quan trọng trong cuộc đời. Với sự chứng kiến của gia đình hai bên và bạn bè.',
    image: 'https://images.unsplash.com/photo-1525272149490-82288cb110a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpZXRuYW1lc2UlMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU2NDY3OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '👑',
    location: 'Nhà Gái',
    position: 'left'
  },
  {
    date: '21/12/2025',
    title: 'Lễ Thành Hôn',
    subtitle: 'Chính thức thành vợ chồng',
    description: 'Lễ thành hôn long trọng tại nhà trai. Chúng mình chính thức trở thành vợ chồng và bắt đầu hành trình mới cùng nhau.',
    image: 'https://images.unsplash.com/photo-1507503749118-52cfca8e3aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBwYXJ0eSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NTY0Nzg2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '💒',
    location: 'Nhà Trai',
    position: 'right'
  }
];

export function OurStorySection() {
  const [showVideo, setShowVideo] = useState(false);
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<{[key: number]: boolean}>({});
  const [playingWeddingVideo, setPlayingWeddingVideo] = useState(false);
  const [weddingVideoMuted, setWeddingVideoMuted] = useState(false);

  return (
    <div className="py-24 px-6 bg-background transition-colors duration-500">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-2 bg-rose-100 rounded-full mb-6">
            <span className="font-sans text-rose-700 text-sm tracking-[0.2em] uppercase">Tình Yêu</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 tracking-tight">
            Chuyện Chúng Mình
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Hành trình tình yêu 7 năm của chúng mình, từ ngày tỏ tình đầu tiên đến những khoảnh khắc thiêng liêng nhất
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300 h-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  item.position === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <motion.div
                    className={`bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                      item.position === 'right' ? 'lg:text-right' : ''
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Date Badge */}
                    <div className={`flex ${item.position === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center mb-4`}>
                      <div className="inline-flex items-center gap-3 bg-rose-500 text-white px-6 py-3 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="font-sans tracking-wide">{item.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="font-serif text-2xl text-card-foreground mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-script text-rose-600 text-lg italic">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Location */}
                    {item.location && (
                      <div className={`flex items-center gap-2 mb-4 ${item.position === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                        <MapPin className="w-4 h-4 text-rose-500" />
                        <span className="font-sans text-sm text-muted-foreground">{item.location}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`flex ${item.position === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center mt-6`}>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-px bg-rose-300"></div>
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                        <div className="w-8 h-px bg-rose-300"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 lg:block hidden">
                  <motion.div
                    className="w-16 h-16 bg-card rounded-full border-4 border-rose-400 flex items-center justify-center text-2xl shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Image or Video */}
                <div className="lg:w-1/2">
                  <motion.div
                    className="relative overflow-hidden rounded-3xl shadow-xl group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.video ? (
                      // Video for proposal timeline item
                      <div className="relative w-full h-64 lg:h-80 bg-black rounded-3xl overflow-hidden">
                        {/* Actual Video Element */}
                        {playingVideoIndex === index ? (
                          <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            muted={mutedVideos[index]}
                            poster={item.image}
                            onEnded={() => setPlayingVideoIndex(null)}
                          >
                            {/* Sample Video - You can replace this with actual proposal video */}
                            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                            {/* Fallback text */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                              <p className="text-white">Video không thể phát được</p>
                            </div>
                          </video>
                        ) : (
                          // Video Preview/Thumbnail
                          <>
                            {/* Background Image */}
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-purple-900/30 to-pink-900/40">
                              {/* Play Button - Centered */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                  className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 group"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setPlayingVideoIndex(index)}
                                >
                                  <Play className="w-10 h-10 text-rose-600 ml-1 group-hover:text-rose-700 transition-colors" />
                                </motion.button>
                              </div>
                              
                              {/* Video Info - Bottom */}
                              <div className="absolute bottom-6 left-6 right-6 text-center">
                                <div className="text-white">
                                  <div className="text-2xl mb-2">{item.icon}</div>
                                  <p className="font-script text-lg mb-1 drop-shadow-lg">{item.title}</p>
                                  <p className="font-sans text-xs opacity-90 drop-shadow">{item.location}</p>
                                </div>
                              </div>
                              
                              {/* Click Hint - Top */}
                              <div className="absolute top-6 left-6 right-6 text-center">
                                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                  <p className="font-sans text-xs text-white tracking-wide">▶ Click để xem video</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Video Controls Overlay (when playing) */}
                        {playingVideoIndex === index && (
                          <motion.div
                            className="absolute top-4 right-4 flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.button
                              onClick={() => setMutedVideos(prev => ({ ...prev, [index]: !prev[index] }))}
                              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {mutedVideos[index] ? (
                                <VolumeX className="w-5 h-5 text-white" />
                              ) : (
                                <Volume2 className="w-5 h-5 text-white" />
                              )}
                            </motion.button>
                            
                            <motion.button
                              onClick={() => setPlayingVideoIndex(null)}
                              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <X className="w-5 h-5 text-white" />
                            </motion.button>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      // Regular image for other timeline items
                      <>
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-center">
                              <div className="text-2xl mb-2">{item.icon}</div>
                              <p className="text-white font-script text-lg">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wedding Video Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
            {/* Section Title */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl text-foreground mb-4 tracking-tight">
                Xem Clip Cưới Của Chúng Mình
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Khép lại mối tình lãng mạn 7 năm bên nhau và chào đón hành trình mới đầy hạnh phúc
              </p>
            </motion.div>

            {/* Video Player Component */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {playingWeddingVideo ? (
                  // Actual Video Element
                  <video
                    className="w-full h-64 lg:h-96 object-cover"
                    controls
                    autoPlay
                    muted={weddingVideoMuted}
                    poster="https://images.unsplash.com/photo-1751564644539-0ca554d806b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW8lMjBjb3VwbGUlMjBjZWxlYnJhdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU2NDc5Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    onEnded={() => setPlayingWeddingVideo(false)}
                  >
                    {/* Sample Wedding Video - Replace with actual wedding video */}
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <p className="text-white">Video không thể phát được</p>
                    </div>
                  </video>
                ) : (
                  // Video Preview/Thumbnail
                  <>
                    {/* Background Image */}
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1751564644539-0ca554d806b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW8lMjBjb3VwbGUlMjBjZWxlYnJhdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU2NDc5Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Wedding Video Thumbnail"
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/50 via-purple-900/40 to-pink-900/50">
                      {/* Play Button - Top Position */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <motion.button
                          className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setPlayingWeddingVideo(true)}
                        >
                          <Play className="w-6 h-6 text-rose-600 ml-1 group-hover:text-rose-700 transition-colors" />
                        </motion.button>
                      </div>
                      
                      {/* Video Info - Bottom Center */}
                      <div className="absolute bottom-8 left-6 right-6">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-3">💒</div>
                          <p className="font-script text-2xl mb-2 drop-shadow-lg">Video Cưới</p>
                          <p className="font-sans text-sm opacity-90 drop-shadow mb-4">14/12 & 21/12/2025</p>
                          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                            <p className="font-sans text-sm tracking-wide">▶ Click để xem video cưới</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Video Controls Overlay (when playing) */}
                {playingWeddingVideo && (
                  <motion.div
                    className="absolute top-4 right-4 flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={() => setWeddingVideoMuted(!weddingVideoMuted)}
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {weddingVideoMuted ? (
                        <VolumeX className="w-6 h-6 text-white" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-white" />
                      )}
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setPlayingWeddingVideo(false)}
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Decorative Hearts */}
            <motion.div
              className="flex justify-center items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    type: "tween",
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-script text-xl text-muted-foreground italic max-w-lg mx-auto">
                "Tình yêu đích thực không bao giờ kết thúc, nó chỉ bắt đầu mỗi ngày"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}