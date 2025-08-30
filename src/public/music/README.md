# Music Files Directory

## Cách sử dụng:

### 1. Đặt file MP3 vào thư mục này
```
/public/music/
├── wedding-song.mp3          # File nhạc chính của bạn
├── nothing-gonna-change.mp3  # File backup
└── custom-song.mp3           # File tùy chỉnh
```

### 2. Cách đặt tên file:
- **wedding-song.mp3** - File nhạc chính sẽ được load đầu tiên
- **nothing-gonna-change.mp3** - File backup thứ 2
- Tên file khác tùy ý, nhớ cập nhật trong MusicPlayer.tsx

### 3. Cách sử dụng:
1. Copy file MP3 vào thư mục `/public/music/`
2. File sẽ accessible qua URL: `http://localhost:3000/music/filename.mp3`
3. MusicPlayer sẽ tự động load file từ đường dẫn `/music/wedding-song.mp3`

### 4. Upload từ giao diện:
- Click vào nút Settings (⚙️) trên vinyl record
- Upload file MP3 trực tiếp từ giao diện
- Hoặc chọn từ danh sách nhạc có sẵn

### 5. Định dạng hỗ trợ:
- ✅ MP3 (Recommended)
- ✅ Audio quality: 128kbps - 320kbps
- ✅ File size: Tối đa 10MB (cho web performance)

### 6. Lưu ý:
- File trong `/public/` sẽ được serve static
- Không cần import, chỉ cần reference bằng đường dẫn
- File lớn có thể ảnh hưởng tốc độ load trang