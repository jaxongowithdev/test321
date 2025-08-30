import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Phone, Utensils } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const weddingEvents = [
  {
    title: "Lễ Vu Quy",
    date: "Chủ nhật, 14 tháng 12, 2025",
    time: "10:00 AM",
    location: "Nhà Cô Dâu",
    address: "418 Cống Sơn Đốc 2, Hưng Lễ, Giồng Trôm, Bến Tre, Vietnam (Trại mộc Tư Tiếm)",
    description: "Lễ vu quy truyền thống tại nhà gái với sự chứng kiến của gia đình hai bên",
    contact: "0921107445 (Kim Khoa - Cô dâu)",
    capacity: "500 khách",
    image: "https://images.unsplash.com/photo-1525272149490-82288cb110a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpZXRuYW1lc2UlMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU2NDY3OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-rose-500 to-pink-600",
    iconBg: "bg-rose-500"
  },
  {
    title: "Lễ Thành Hôn", 
    date: "Chủ nhật, 21 tháng 12, 2025",
    time: "5:00 PM",
    location: "Grand Palace Quy Nhon",
    address: "Q6QC+66J, Võ Nguyên Giáp Cầu Hà Thanh 2, Đống Đa, Quy Nhơn, Bình Định, Vietnam",
    description: "Lễ thành hôn và tiệc cưới chính thức tại nhà trai với bạn bè và người thân",
    contact: "0329181288 (Võ Minh Đạt - Chú rể)",
    capacity: "300 khách",
    image: "https://images.unsplash.com/photo-1507503749118-52cfca8e3aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBwYXJ0eSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NTY0Nzg2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-indigo-600",
    iconBg: "bg-purple-500"
  }
];

export function WeddingDetails() {
  return (
    <div className="py-24 px-6 bg-background transition-colors duration-500">
      <motion.div
        className="max-w-7xl mx-auto"
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
          <div className="inline-block px-6 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-6">
            <span className="font-sans text-rose-700 dark:text-rose-300 text-sm tracking-[0.2em] uppercase">Chi Tiết</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 tracking-tight">
            Thông Tin Lễ Cưới
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Thông tin chi tiết về hai ngày tổ chức lễ cưới của chúng mình
          </p>
        </motion.div>

        {/* Wedding Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {weddingEvents.map((event, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {/* Event Card */}
              <motion.div
                className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Event Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`inline-flex items-center gap-2 ${event.iconBg} text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-sans font-medium text-sm">{event.title}</span>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0">
                    <div className={`w-16 h-16 ${event.iconBg} opacity-10 transform rotate-45 translate-x-8 translate-y-8`}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Title & Description */}
                  <div className="mb-8 text-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-3 tracking-tight">
                      {event.title}
                    </h3>
                    <p className="font-script text-rose-600 dark:text-rose-400 text-lg italic leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Date & Time */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                      <div className={`w-8 h-8 ${event.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-card-foreground font-semibold text-lg">{event.date}</p>
                        <p className="font-sans text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                      <div className={`w-8 h-8 ${event.iconBg} rounded-xl flex items-center justify-center shadow-md mt-1`}>
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-card-foreground font-semibold text-lg">{event.location}</p>
                        <p className="font-sans text-muted-foreground leading-relaxed">{event.address}</p>
                      </div>
                    </div>

                    {/* Capacity & Contact Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Capacity */}
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                        <div className={`w-8 h-8 ${event.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-sans text-card-foreground font-semibold">Sức chứa</p>
                          <p className="font-sans text-muted-foreground">{event.capacity}</p>
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                        <div className={`w-8 h-8 ${event.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-sans text-card-foreground font-semibold">Liên hệ</p>
                          <p className="font-sans text-muted-foreground text-sm">{event.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Bottom Element */}
                  <div className="flex justify-center mt-8 pt-6 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                      <div className="w-3 h-3 bg-rose-400 rounded-full shadow-sm"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}