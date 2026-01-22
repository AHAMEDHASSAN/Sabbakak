import { Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group shrink-0">
              <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.7,13.3c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.4,5.4 c-1.9,1.9-1.9,5,0,6.9c1.9,1.9,5,1.9,6.9,0l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L14.7,13.3z" />
                  <path d="M18.3,15.7c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l1.4-1.4C18.7,16.7,18.7,16.1,18.3,15.7z" />
                  <path d="M15.7,18.3l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0S16.1,18.7,15.7,18.3z" />
                  <path d="M12,2c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z" />
                  <circle cx="12" cy="12" r="2" fill="#F2994A" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none text-white">
                  منصة السباك
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 text-secondary">
                  PLUMBER HUB
                </span>
              </div>
            </Link>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">
              المنصة الرائدة في مدينة الطائف لربط العملاء بأفضل السباكين المعتمدين والموثوقين لضمان جودة الحياة في منزلك.
            </p>
            <div className="flex gap-5">
              <a href="https://m.facebook.com/abdnoob/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="https://m.facebook.com/abdnoob/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="https://m.facebook.com/abdnoob/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-black mb-8 border-r-4 border-secondary pr-4">روابط سريعة</h4>
            <ul className="space-y-5 text-right">
              {["الرئيسية", "من نحن", "خدماتنا", "كيف يعمل", "الأسئلة الشائعة"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl text-slate-400 hover:text-secondary transition-colors inline-block font-bold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-2xl font-black mb-8 border-r-4 border-secondary pr-4">المنصة</h4>
            <ul className="space-y-5 text-right">
              {["سياسة الخصوصية", "الشروط والأحكام", "انضم كشريك", "مركز المساعدة", "اتصل بنا"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl text-slate-400 hover:text-secondary transition-colors inline-block font-bold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join WhatsApp Group */}
          <div>
            <h4 className="text-2xl font-black mb-8 border-r-4 border-secondary pr-4">مجتمعنا</h4>
            <p className="text-lg text-slate-400 mb-8 font-bold leading-relaxed">انضم إلى جروب الواتساب الخاص بنا للحصول على عروض حصرية ونصائح سريعة.</p>
            <a 
              href="https://wa.me/966552576582" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 p-3.5 rounded-2xl transition-all hover:scale-[1.02]"
            >
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg">جروب الواتساب</span>
                <span className="text-white/80 text-xs font-bold">انضم لمجتمعنا الآن</span>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-right font-bold leading-relaxed max-w-2xl">
            جميع الحقوق محفوظة © {currentYear} لمنصة السباك. صنع بكل <Heart size={16} className="inline text-red-500 fill-red-500 mx-1" /> في المملكة العربية السعودية
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start items-center">
            <span className="text-sm sm:text-lg md:text-2xl font-black tracking-widest text-white border border-white/20 px-2 sm:px-4 py-1 rounded-lg">VISA</span>
            <span className="text-sm sm:text-lg md:text-2xl font-black tracking-widest text-white border border-white/20 px-2 sm:px-4 py-1 rounded-lg">MADA</span>
            <span className="text-sm sm:text-lg md:text-2xl font-black tracking-widest text-white border border-white/20 px-2 sm:px-4 py-1 rounded-lg">STCPAY</span>
            <span className="text-sm sm:text-lg md:text-2xl font-black tracking-widest text-white border border-white/20 px-2 sm:px-4 py-1 rounded-lg">MASTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
