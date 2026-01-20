import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-primary font-black text-xl md:text-2xl mb-4 md:mb-6 tracking-widest uppercase bg-primary/5 inline-block px-4 md:px-6 py-2 rounded-full">تواصل معنا</h2>
          <h3 className="text-3xl md:text-8xl font-black text-slate-900 mb-6 md:mb-10 leading-tight">
            نحن هنا لمساعدتك <br />
            <span className="text-secondary italic">في أي وقت</span>
          </h3>
          <p className="text-xl md:text-4xl text-slate-600 mb-8 md:mb-12 font-bold leading-relaxed px-2">
            هل لديك استفسار؟ هل تريد الانضمام لفريقنا؟ لا تتردد في التواصل معنا مباشرة عبر القنوات المتاحة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {[
            { icon: Phone, title: "اتصل بنا", value: "92000XXXX", sub: "طوال أيام الأسبوع" },
            { icon: Mail, title: "البريد الإلكتروني", value: "info@plumbingplatform.sa", sub: "نرد خلال ٢٤ ساعة" },
            { icon: MapPin, title: "المقر الرئيسي", value: "الرياض، السعودية", sub: "حي الصحافة" }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-slate-200">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-primary mb-5 md:mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h4 className="font-black text-slate-900 text-2xl md:text-3xl mb-2 md:mb-3">{item.title}</h4>
              <p className="text-lg md:text-xl text-primary font-black mb-1">{item.value}</p>
              <p className="text-base md:text-lg text-slate-500 font-bold">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 bg-green-50 rounded-[3rem] md:rounded-[4rem] border border-green-100 flex flex-col items-center text-center shadow-2xl shadow-green-100/50 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-200 mb-6 md:mb-8 animate-bounce mx-auto">
                <MessageCircle fill="currentColor" size={40} />
              </div>
              <h5 className="font-black text-green-800 text-3xl md:text-4xl mb-3 md:mb-4">تواصل سريع عبر واتساب</h5>
              <p className="text-lg md:text-2xl text-green-600 font-bold mb-8 md:mb-10">للحالات الطارئة جداً والبلاغات السريعة</p>
              <a 
                href="#" 
                className="inline-flex w-full md:w-auto justify-center bg-green-500 hover:bg-green-600 text-white px-8 md:px-16 py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-2xl md:text-3xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-200"
              >
                افتح دردشة واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
