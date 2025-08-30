import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Navigation, ExternalLink, Lightbulb } from 'lucide-react';

export function MapSection() {
  
  const venues = [
    {
      name: "Nhà Cô Dâu (14/12/2025)",
      address: "418 Cống Sơn Đốc 2, Hưng Lễ, Giồng Trôm, Bến Tre, Vietnam",
      coordinates: "10.3562,106.3685",
      plusCode: "3F39+76",
      googleMapsUrl: "https://www.google.com/maps/place/3F39%2B76+Gi%E1%BB%93ng+Tr%C3%B4m+District,+Ben+Tre,+Vietnam/@10.3562,106.3685,17z"
    },
    {
      name: "Grand Palace Quy Nhơn (21/12/2025)",
      address: "Q6QC+66J, Võ Nguyên Giáp Cầu Hà Thanh 2, Đống Đa, Quy Nhơn, Bình Định, Vietnam",
      coordinates: "13.7706,109.2206",
      plusCode: "Q6QC+66J",
      googleMapsUrl: "https://www.google.com/maps/place/Q6QC%2B66J+Quy+Nh%C6%A1n,+B%C3%ACnh+%C4%90%E1%BB%8Bnh,+Vietnam/@13.7706,109.2206,17z"
    }
  ];

  const openInGoogleMaps = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-rose-500" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-rose-900 dark:text-rose-100">
              Bản Đồ Chỉ Đường
            </h2>
            <MapPin className="w-6 h-6 text-rose-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hãy tham gia cùng chúng tôi trong ngày trọng đại này
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-gray-700 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl text-rose-900 dark:text-rose-100 mb-2">
                    {venue.name}
                  </h3>
                  <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-4"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">Địa chỉ:</p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {venue.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">Chỉ đường:</p>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed space-y-1">
                        <p><strong>Plus Code:</strong> {venue.plusCode}</p>
                        <p><strong>Tọa độ:</strong> {venue.coordinates}</p>
                      </div>
                      <Button 
                        onClick={() => openInGoogleMaps(venue.googleMapsUrl)}
                        className="bg-rose-500 hover:bg-rose-600 text-white w-full sm:w-auto"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Mở trong Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gợi ý chỉ đường */}
        <div className="mt-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-gray-700 rounded-lg p-4 max-w-2xl mx-auto shadow-md text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Vui lòng đến <span className="text-rose-600 dark:text-rose-400 font-medium">đúng giờ</span> để không bỏ lỡ những khoảnh khắc đặc biệt!
            </p>
            <span className="font-script text-gray-500 dark:text-gray-400">Chúc bạn có chuyến đi thuận lợi</span>
          </div>
        </div>
      </div>
    </section>
  );
}