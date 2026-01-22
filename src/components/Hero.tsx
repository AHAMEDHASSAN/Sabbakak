import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 sm:pt-40 pb-16 overflow-hidden">
      {/* Premium Background with Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Heroo.jpg" 
          alt="مركز صيانة السباكة" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40 shadow-inner" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm sm:text-base font-black mb-6 border border-white/20 shadow-xl">
              <span className="w-2.5 h-2.5 bg-secondary rounded-full shadow-[0_0_15px_rgba(242,153,74,1)] animate-pulse" />
              أفضل خدمة سباكة احترافية في الطائف
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl px-2">
              مشاكل السباكة؟ <br />
              <span className="text-secondary italic">حلول ملكيّة</span>
            </h1>
            
            <p className="text-base sm:text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-lg px-6 sm:px-0">
              لا داعي للقلق بعد الآن، نحن نربطك بأمهر السباكين المعتمدين في عروس المصايف. جودة مضمونة، أمان تام، وخدمة سريعة في منزلك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-10 sm:px-0 mb-16">
              <a 
                href="https://wa.me/966552576582"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl transition-all hover:scale-105 shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 group"
              >
                اطلب الآن
                <ArrowLeft size={20} className="animate-slide-x" />
              </a>
              <a 
                href="https://m.facebook.com/abdnoob/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-2xl text-white border border-white/20 px-8 py-4 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl transition-all flex items-center justify-center hover:scale-105"
              >
                تابعنا على فيسبوك
              </a>
            </div>

            {/* Trust Badges - More Compact */}
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-center text-white px-4">
              {[
                { text: "سباكون موثوقون", icon: CheckCircle },
                { text: "أسعار شفافة", icon: CheckCircle },
                { text: "ضمان شامل", icon: CheckCircle }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
                  <item.icon size={16} className="text-secondary" />
                  <span className="font-bold text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
