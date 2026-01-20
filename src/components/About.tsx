import { ArrowLeft, ShieldCheck, UserCheck, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "سباك موثوق", value: "+500" },
    { label: "عميل سعيد", value: "+10k" },
    { label: "مدينة مغطاة", value: "15" },
    { label: "دقة المواعيد", value: "99%" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden w-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white -skew-x-12 translate-x-1/4 -z-0 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Side (Left in RTL) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white bg-white transition-all duration-700">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="OloNew.png" 
                    alt="فريقنا الاحترافي" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              
              {/* Decorative shapes - No shadows, just subtle colors */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
              
              {/* Floating Info - Border instead of shadow */}
              <div className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-xl border border-slate-100 hidden md:flex items-center gap-4 transition-transform group-hover:-translate-y-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-primary w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold text-sm leading-tight">ضمان الجودة</span>
                  <span className="text-slate-500 text-xs text-right">معتمدين ١٠٠٪</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side (Right in RTL) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <ArrowLeft className="text-secondary w-8 h-8 md:w-10 md:h-10 animate-slide-x" />
              <span className="text-secondary font-extrabold text-lg md:text-xl tracking-widest uppercase bg-secondary/5 px-4 py-1.5 rounded-full border border-secondary/10">
                تعرف علينا
              </span>
            </div>
            
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 mb-8 md:mb-10 leading-tight text-center lg:text-right">
              الوسيط الذكي بينك <br />
              وبين <span className="text-primary">الاحترافية</span>
            </h2>
            
            <p className="text-xl md:text-3xl text-slate-600 mb-10 md:mb-12 leading-[1.6] text-center lg:text-right font-medium px-2">
              نحن لسنا مجرد تطبيق، نحن عائلتك التقنية التي تهتم بكل تفاصيل سباكة منزلك. نختار لك النخبة، نراقب الجودة، ونضمن لك راحة البال بضغطة زر واحدة.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
              {[
                { icon: ShieldCheck, title: "رقابة صارمة", desc: "كل سباك يمر باختبارات فنية وسلوكية دقيقة." },
                { icon: Zap, title: "سرعة البرق", desc: "نصل إليك في وقت قياسي بمجرد تأكيد الطلب." },
                { icon: UserCheck, title: "دعم مستمر", desc: "فريقنا معك خطوة بخطوة حتى انتهاء المهمة." },
                { icon: UserCheck, title: "أسعار عادلة", desc: "تسعير احترافي مدروس يناسب ميزانيتك تماماً." }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col items-center lg:items-start lg:flex-row gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-300">
                    <item.icon className="text-primary w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="text-center lg:text-right">
                    <h4 className="font-extrabold text-slate-900 text-2xl md:text-3xl mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start items-center mb-16">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-primary to-slate-900 hover:from-secondary hover:to-primary text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-xl md:text-3xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] active:scale-95 flex items-center justify-center gap-5 border-b-4 border-black/20">
                اكتشف المزيد
                <div className="bg-white/10 p-2 rounded-full transition-transform group-hover:rotate-[-45deg]">
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 animate-slide-x" />
                </div>
              </button>
            </div>

            {/* Stats - Simple and Large */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-slate-50 rounded-3xl border border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-right">
                  <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
