import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, MessageCircle, Calendar, X, Eye, Heart, Loader2, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface RSVPEntry {
  id: string;
  name: string;
  phone: string;
  guestCount: string;
  wishes: string;
  attending: string;
  relationship: string;
  submittedAt: string;
}

export function RSVPList() {
  const [rsvpEntries, setRsvpEntries] = useState<RSVPEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');

  const fetchRSVPEntries = async () => {
    setIsLoading(true);
    setLoadError('');
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-769e25b3/rsvp`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to fetch RSVP list');
      }

      setRsvpEntries(result.rsvps || []);
      
    } catch (error) {
      console.error('Error fetching RSVP list:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi khi tải danh sách';
      setLoadError(errorMessage);
      
      toast.error('Lỗi tải danh sách', {
        description: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchRSVPEntries();
    }
  }, [isOpen]);

  const totalGuests = rsvpEntries
    .filter(entry => entry.attending === 'yes')
    .reduce((total, entry) => total + parseInt(entry.guestCount), 0);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRefresh = () => {
    fetchRSVPEntries();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <Eye className="w-4 h-4 mr-2" />
          Xem Danh Sách ({rsvpEntries.length})
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 w-[95vw]">
        <DialogHeader className="p-4 pb-0 sm:p-6 sm:pb-0">
          <div className="text-center">
            <DialogTitle className="font-serif text-xl sm:text-2xl">
              Danh Sách Người Tham Gia
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Xem danh sách những người đã xác nhận tham dự lễ cưới
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="p-4 pt-2 sm:p-6 sm:pt-4">
          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-rose-500" />
              <p className="text-muted-foreground">Đang tải danh sách...</p>
            </div>
          )}

          {/* Error State */}
          {loadError && !isLoading && (
            <div className="text-center py-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-600 text-sm">{loadError}</p>
              </div>
              <Button variant="outline" onClick={handleRefresh}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Thử lại
              </Button>
            </div>
          )}

          {/* Content */}
          {!isLoading && !loadError && (
            <>
              {/* Stats and Reload */}
              <div className="flex justify-between items-center mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="bg-rose-100 border-rose-200 hover:bg-rose-200 p-1.5"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-rose-600" />
                  ) : (
                    <RefreshCw className="w-4 h-4 text-rose-600" />
                  )}
                </Button>
                
                <div className="bg-rose-100 border border-rose-200 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-rose-600" />
                  <span className="font-semibold text-rose-800 text-sm">{totalGuests}</span>
                </div>
              </div>

              {/* RSVP List */}
              <ScrollArea className="h-[350px] sm:h-[400px] pr-2 sm:pr-4">
                <div className="space-y-3 sm:space-y-4">
              {rsvpEntries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="border-l-4 border-l-rose-500 bg-gradient-to-r from-rose-50/50 to-white/30 hover:from-rose-50/70 hover:to-white/50 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-4 sm:p-5">
                      {/* Header with name and badge */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg sm:text-xl text-rose-900 truncate mb-1">
                            {entry.name}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-rose-600/70">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            <time className="font-medium">{formatDate(entry.submittedAt)}</time>
                          </div>
                        </div>
                        
                        <Badge 
                          variant="secondary" 
                          className="bg-rose-100 text-rose-700 border-rose-200 text-xs font-medium px-2.5 py-1 ml-3"
                        >
                          {entry.relationship === 'groom' ? 'Khách chú rể' : 'Khách cô dâu'}
                        </Badge>
                      </div>
                      
                      {/* Wishes section */}
                      {entry.wishes && (
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-rose-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="bg-rose-100 rounded-full p-1.5 mt-0.5">
                              <MessageCircle className="w-3.5 h-3.5 text-rose-600" />
                            </div>
                            <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed break-words font-medium italic">
                              "{entry.wishes}"
                            </blockquote>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
                {rsvpEntries.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-rose-300" />
                    <p>Chưa có ai đăng ký tham dự</p>
                  </div>
                )}
              </div>
            </ScrollArea>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}