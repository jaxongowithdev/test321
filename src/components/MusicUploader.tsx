import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, Music, CheckCircle, XCircle, FileAudio } from 'lucide-react';

interface MusicUploaderProps {
  onFileSelect: (file: File, url: string) => void;
  className?: string;
}

export function MusicUploader({ onFileSelect, className = "" }: MusicUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const mp3File = files.find(file => 
      file.type === 'audio/mpeg' || 
      file.type === 'audio/mp3' || 
      file.name.toLowerCase().endsWith('.mp3')
    );

    if (mp3File) {
      setFileName(mp3File.name);
      setUploadStatus('success');
      
      // Tạo URL để preview
      const url = URL.createObjectURL(mp3File);
      onFileSelect(mp3File, url);
      
      // Reset sau 3 giây
      setTimeout(() => {
        setUploadStatus('idle');
        setFileName('');
      }, 3000);
    } else {
      setUploadStatus('error');
      setTimeout(() => setUploadStatus('idle'), 3000);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`${className}`}>
      <motion.div
        className={`
          relative border-2 border-dashed rounded-lg p-6 transition-all duration-300 cursor-pointer
          ${isDragOver 
            ? 'border-rose-400 bg-rose-50/50' 
            : uploadStatus === 'success'
            ? 'border-green-400 bg-green-50/50'
            : uploadStatus === 'error'
            ? 'border-red-400 bg-red-50/50'
            : 'border-gray-300 hover:border-rose-400 hover:bg-rose-50/30'
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".mp3,audio/mpeg,audio/mp3"
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center space-y-4">
          {uploadStatus === 'success' ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500"
            >
              <CheckCircle className="w-12 h-12" />
            </motion.div>
          ) : uploadStatus === 'error' ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-500"
            >
              <XCircle className="w-12 h-12" />
            </motion.div>
          ) : (
            <motion.div
              animate={isDragOver ? { scale: 1.1 } : { scale: 1 }}
              className="text-gray-400"
            >
              {isDragOver ? (
                <FileAudio className="w-12 h-12 text-rose-400" />
              ) : (
                <Upload className="w-12 h-12" />
              )}
            </motion.div>
          )}

          <div className="text-center">
            {uploadStatus === 'success' ? (
              <div className="space-y-1">
                <p className="font-medium text-green-600">Upload thành công!</p>
                <p className="text-sm text-gray-500 truncate max-w-xs">
                  {fileName}
                </p>
              </div>
            ) : uploadStatus === 'error' ? (
              <div className="space-y-1">
                <p className="font-medium text-red-600">Lỗi upload!</p>
                <p className="text-sm text-gray-500">
                  Chỉ chấp nhận file MP3
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="font-medium text-gray-700">
                  {isDragOver ? 'Thả file MP3 ở đây' : 'Upload file MP3'}
                </p>
                <p className="text-sm text-gray-500">
                  Kéo thả hoặc click để chọn file
                </p>
              </div>
            )}
          </div>

          {!uploadStatus && (
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Music className="w-4 h-4" />
              <span>Hỗ trợ: .mp3, audio/mpeg</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}