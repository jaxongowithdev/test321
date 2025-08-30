import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, User, Users, MessageCircle, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RSVPList } from './RSVPList';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Sample wedding wishes
const sampleWishes = [
  "Chúc hai bạn trăm năm hạnh phúc, mãi mãi bên nhau!",
  "Chúc gia đình mới luôn tràn ngập tiếng cười và yêu thương!",
  "Chúc hai bạn sớm có tin vui, gia đình đông đúc, hạnh phúc viên mãn!",
  "Chúc cô dâu chú rể có một cuộc sống hôn nhân ngọt ngào như mật ong!",
  "Chúc tình yêu của hai bạn mãi xanh tươi như ngày đầu tiên!",
  "Chúc hai bạn luôn yêu thương, chia sẻ và hiểu nhau trong mọi hoàn cảnh!",
];

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: '1', // Default to 1 guest
    wishes: '',
    attending: '',
    relationship: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSampleWishClick = (wish: string) => {
    setFormData(prev => ({ ...prev, wishes: wish }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare RSVP data
      const rsvpData = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        phone: '', // Empty phone field
        guestCount: formData.guestCount, // Always 1
        wishes: formData.wishes.trim(),
        attending: formData.attending,
        relationship: formData.relationship,
        submittedAt: new Date().toISOString()
      };

      // Call API
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-769e25b3/rsvp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(rsvpData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit RSVP');
      }

      // Success
      toast.success('Cảm ơn bạn đã xác nhận tham dự!', {
        description: 'Chúng tôi đã nhận được thông tin của bạn.'
      });
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('RSVP submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi gửi thông tin';
      setSubmitError(errorMessage);
      
      toast.error('Lỗi gửi thông tin', {
        description: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625680613227-4537c26f5d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzU2NDY4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Thank You Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-transparent to-rose-600/30"></div>
        </div>

        <div className="relative z-20 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </motion.div>

            <motion.h2
              className="font-serif text-3xl md:text-4xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Cảm Ơn Bạn!
            </motion.h2>

            <motion.p
              className="font-sans text-lg text-white/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Chúng tôi đã nhận được phản hồi của bạn. Cảm ơn bạn đã dành thời gian!
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625680613227-4537c26f5d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzU2NDY4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="RSVP Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-transparent to-rose-600/30"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-rose-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-rose-400" />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Heart className="w-10 h-10 text-rose-400 fill-rose-400" />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Sparkles className="w-8 h-8 text-rose-400" />
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4 tracking-tight font-light">
            Xác Nhận Tham Dự
          </h2>
          <div className="font-sans text-rose-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-8">
            RSVP
          </div>
          
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-lg text-white/90 leading-relaxed mb-6">
              Sự hiện diện của bạn sẽ làm cho ngày đặc biệt của chúng tôi thêm ý nghĩa. 
              Vui lòng xác nhận tham dự để chúng tôi có thể chuẩn bị chu đáo nhất.
            </p>
            
            <p className="font-script text-rose-300 text-xl italic mb-6">
              Hãy dành chút thời gian để nói cho chúng mình biết ý định của bạn nhé!
            </p>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <RSVPList />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl text-white">
                Thông Tin Tham Dự
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/90 flex items-center gap-2">
                    <User className="w-4 h-4 text-rose-400" />
                    Tên tham dự *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Nhập họ tên của bạn"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-rose-400"
                  />
                </div>

                {/* Attendance */}
                <div className="space-y-4">
                  <Label className="text-white/90 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-rose-400" />
                    Bạn sẽ tham dự không? *
                  </Label>
                  <RadioGroup
                    value={formData.attending}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, attending: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" className="border-white/30 text-rose-400" />
                      <Label htmlFor="yes" className="text-white/90">Có, tôi sẽ tham dự</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" className="border-white/30 text-rose-400" />
                      <Label htmlFor="no" className="text-white/90">Không, tôi không thể tham dự</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Relationship */}
                <div className="space-y-4">
                  <Label className="text-white/90 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    Bạn là khách của ai? *
                  </Label>
                  <RadioGroup
                    value={formData.relationship}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, relationship: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="groom" id="groom" className="border-white/30 text-rose-400" />
                      <Label htmlFor="groom" className="text-white/90">Chú rể (Võ Minh Đạt)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bride" id="bride" className="border-white/30 text-rose-400" />
                      <Label htmlFor="bride" className="text-white/90">Cô dâu (Đoàn Thị Kim Khoa)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Wishes */}
                <div className="space-y-4">
                  <Label className="text-white/90 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-rose-400" />
                    Lời chúc cho cô dâu chú rể
                  </Label>
                  
                  {/* Sample wishes */}
                  <div className="space-y-2">
                    <div className="text-sm text-white/70 mb-2">Gợi ý lời chúc:</div>
                    <div className="grid gap-2">
                      {sampleWishes.slice(0, 3).map((wish, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSampleWishClick(wish)}
                          className="text-left p-3 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-colors"
                        >
                          {wish}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Textarea
                    value={formData.wishes}
                    onChange={(e) => setFormData(prev => ({ ...prev, wishes: e.target.value }))}
                    placeholder="Nhập lời chúc của bạn hoặc chọn từ gợi ý bên trên..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-rose-400"
                  />
                </div>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-300 text-sm">{submitError}</p>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  className="text-center pt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.attending || !formData.relationship}
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-12 py-6 text-lg font-medium rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center gap-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Đang gửi...
                      </motion.div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Gửi Xác Nhận
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}