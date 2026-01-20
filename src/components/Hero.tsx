import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Background with Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Heroo.jpg" 
          alt="مركز صيانة السباكة" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40 shadow-inner" /> {/* Balanced darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Content */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-white text-sm sm:text-xl font-black mb-6 sm:mb-12 border border-white/30 shadow-2xl animate-bounce">
              <span className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-secondary rounded-full shadow-[0_0_15px_rgba(242,153,74,1)] animate-pulse" />
              أفضل خدمة سباكة احترافية في المملكة
            </div>
            
            <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-10 leading-tight drop-shadow-2xl px-2">
              مشاكل السباكة؟ <br />
              <span className="text-secondary drop-shadow-[0_2px_10px_rgba(242,153,74,0.5)]">حلول ذكية وسريعة</span>
            </h1>
            
            <p className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white/95 mb-8 sm:mb-14 max-w-4xl mx-auto leading-relaxed font-bold drop-shadow-lg px-6 sm:px-0">
              لا داعي للقلق بعد الآن، نحن نربطك بأمهر السباكين المعتمدين بضغطة زر واحدة. جودة مضمونة، أسعار عادلة، وتواجد في كافة الأرجاء.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center px-6 sm:px-0">
              <button className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white px-8 sm:px-16 py-4 sm:py-7 rounded-xl sm:rounded-3xl font-black text-lg sm:text-3xl transition-all hover:scale-110 shadow-lg flex items-center justify-center gap-3 sm:gap-6 group">
                اطلب سباك الآن
                <ArrowLeft size={20} className="sm:hidden animate-slide-x" />
                <ArrowLeft size={36} className="hidden sm:block animate-slide-x" /> 
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 sm:border-4 border-white/40 px-8 sm:px-16 py-4 sm:py-7 rounded-xl sm:rounded-3xl font-black text-lg sm:text-3xl transition-all flex items-center justify-center hover:scale-105">
                انضم كفني محترف
              </button>
            </div>

            {/* Trust Badges - Responsive Grid */}
            <div className="mt-8 sm:mt-20 flex flex-wrap gap-3 sm:gap-10 justify-center text-white px-4">
              <div className="flex items-center gap-2 sm:gap-4 bg-white/10 px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105">
                <CheckCircle size={16} className="text-secondary sm:w-8 sm:h-8" />
                <span className="font-black text-xs sm:text-xl">سباكون موثوقون</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 bg-white/10 px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105">
                <CheckCircle size={16} className="text-secondary sm:w-8 sm:h-8" />
                <span className="font-black text-xs sm:text-xl">أسعار شفافة</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 bg-white/10 px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-105">
                <CheckCircle size={16} className="text-secondary sm:w-8 sm:h-8" />
                <span className="font-black text-xs sm:text-xl">ضمان شامل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
