import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Upload, Music, X, CheckCircle, AlertCircle } from 'lucide-react';
import { MusicUploader } from './MusicUploader';

interface MusicAdminProps {
  onAudioChange: (url: string, name: string) => void;
  isVisible: boolean;
  onClose: () => void;
}

export function MusicAdmin({ onAudioChange, isVisible, onClose }: MusicAdminProps) {
  const [selectedFile, setSelectedFile] = useState<{ url: string; name: string } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (file: File, url: string) => {
    const fileName = file.name.replace('.mp3', '').replace(/[-_]/g, ' ');
    setSelectedFile({ url, name: fileName });
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      onAudioChange(url, fileName);
    }, 1000);
  };

  const presetSongs = [
    {
      name: "Nothing Gonna Change My Love",
      artist: "Glenn Medeiros",
      url: "/download/GlennMedeirosNothingsGonnaChangeMyLoveForYou/Glenn%20Medeiros%20-%20Nothing%27s%20Gonna%20Change%20My%20Love%20For%20You%20.mp3"
    },
    {
      name: "Wedding Song",
      artist: "Local File",
      url: "/music/wedding-song.mp3"
    },
    {
      name: "Romantic Instrumental",
      artist: "Bensound",
      url: "https://www.bensound.com/bensound-music/bensound-romantic.mp3"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white rounded-t-xl border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg text-gray-900">Cài đặt nhạc</h2>
                    <p className="text-sm text-gray-500">Chọn hoặc upload nhạc cưới</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Upload Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-gray-600" />
                    <h3 className="font-sans font-medium text-gray-900">Upload file MP3</h3>
                  </div>
                  
                  <MusicUploader onFileSelect={handleFileSelect} />
                  
                  {isUploading && (
                    <motion.div
                      className="flex items-center gap-2 text-rose-600"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="w-4 h-4 border-2 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">Đang cập nhật...</span>
                    </motion.div>
                  )}
                  
                  {selectedFile && !isUploading && (
                    <motion.div
                      className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Đã cập nhật: {selectedFile.name}</span>
                    </motion.div>
                  )}
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">hoặc chọn từ danh sách</span>
                  </div>
                </div>

                {/* Preset Songs */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-gray-600" />
                    <h3 className="font-sans font-medium text-gray-900">Nhạc có sẵn</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {presetSongs.map((song, index) => (
                      <motion.button
                        key={index}
                        onClick={() => onAudioChange(song.url, song.name)}
                        className="w-full p-3 bg-gray-50 hover:bg-rose-50 rounded-lg text-left transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-rose-700">
                              {song.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {song.artist}
                            </div>
                          </div>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Music className="w-4 h-4 text-gray-400 group-hover:text-rose-500" />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <div className="font-medium mb-1">Hướng dẫn sử dụng file local:</div>
                      <ol className="list-decimal list-inside space-y-1 text-blue-700">
                        <li>Đặt file MP3 vào thư mục <code className="bg-blue-100 px-1 rounded text-xs">/public/music/</code></li>
                        <li>Đặt tên file là <code className="bg-blue-100 px-1 rounded text-xs">wedding-song.mp3</code></li>
                        <li>Hoặc cập nhật đường dẫn trong MusicPlayer component</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}