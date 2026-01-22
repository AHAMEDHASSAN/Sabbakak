import { PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-10 leading-tight tracking-tighter">
            مشكلة <br />
            <span className="text-white/40 -mt-2 md:-mt-4 block italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>السباكة اليوم؟</span>
          </h2>
          <p className="text-xl md:text-3xl mb-8 md:mb-12 font-bold opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
            لا تنتظر حتى تتفاقم المشكلة، اطلب سباكك الآن واستمتع براحة البال التي تستحقها وبأفضل الأسعار.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center px-4">
            <a 
              href="https://wa.me/966552576582"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-2xl md:text-3xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl shadow-black/10"
            >
              <PhoneCall fill="currentColor" size={28} />
              اطلب الآن
            </a>
            <a 
              href="https://wa.me/966552576582"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-white text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-2xl md:text-3xl transition-all hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              اتصل بنا
            </a>
          </div>
          <p className="mt-8 md:mt-12 text-lg md:text-xl font-black opacity-80 flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            متوفرون 24/7 لخدمتكم في كافة أنحاء المملكة
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CTA;
