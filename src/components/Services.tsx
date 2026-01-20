import { Briefcase, Clock, CreditCard, Shield, Star, TrendingUp, Users, Wrench } from "lucide-react";
import React from "react";

const Services = () => {
  const customerOffers = [
    { icon: <Clock />, title: "وصول سريع", desc: "سباكين جاهزين في منطقتك دائماً." },
    { icon: <CreditCard />, title: "تسعير واضح", desc: "تعرف التكلفة قبل البدء بالعمل." },
    { icon: <Star />, title: "جودة مضمونة", desc: "ضمان على جميع الخدمات المقدمة." },
    { icon: <Shield />, title: "موثوقية وأمان", desc: "سباكين مفحوصين أمنياً وفنياً." },
  ];

  const plumberOffers = [
    { icon: <TrendingUp />, title: "دخل إضافي", desc: "زيد عدد طلباتك وضاعف أرباحك." },
    { icon: <Briefcase />, title: "تنظيم العمل", desc: "إدارة سهلة لجدول مواعيدك وطلباتك." },
    { icon: <Users />, title: "سمعة رقمية", desc: "ابني تقييمات قوية تجذب المزيد من العرب." },
    { icon: <Wrench />, title: "عمولات عادلة", desc: "رسوم منخفضة وشفافية في الحسابات." },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0870b8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-secondary font-black text-2xl mb-6 tracking-widest uppercase bg-secondary/10 inline-block px-6 py-2 rounded-full">خدماتنا المحترفة</h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-tight">
            حلول متكاملة <span className="text-primary">للجميع</span>
          </h3>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-bold">
            سواء كنت تبحث عن فني أو تملك المهارة وتريد العمل، نحن هنا لخدمتكم بأعلى معايير الجودة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Customers */}
          <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 text-center sm:text-right">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                <Users className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">للعملاء</h4>
                <p className="text-lg md:text-xl text-slate-500 font-bold">حل مشاكل منزلك بكل راحة</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {customerOffers.map((item, idx) => (
                <div key={idx} className="group transition-all hover:translate-y-[-5px] flex flex-col items-center sm:items-start text-center sm:text-right">
                  <div className="text-primary mb-4 md:mb-5 transition-transform group-hover:scale-110">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28, className: "md:w-9 md:h-9" })}
                  </div>
                  <h5 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">{item.title}</h5>
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Plumbers */}
          <div className="bg-slate-900 p-8 md:p-14 rounded-[3rem] shadow-2xl text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 text-center sm:text-right">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-secondary/30">
                <Wrench className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-black mb-1">للسباكين</h4>
                <p className="text-lg md:text-xl text-slate-400 font-bold">كن شريكاً لنا وزد أرباحك</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {plumberOffers.map((item, idx) => (
                <div key={idx} className="group transition-all hover:translate-y-[-5px] flex flex-col items-center sm:items-start text-center sm:text-right">
                  <div className="text-secondary mb-4 md:mb-5 transition-transform group-hover:scale-110">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 28, className: "md:w-9 md:h-9" })}
                  </div>
                  <h5 className="text-xl md:text-2xl font-black mb-2 md:mb-3">{item.title}</h5>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Services */}
        <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">قريباً</span>
            <h5 className="text-xl font-bold text-slate-900">المزيد من الخدمات في الطريق</h5>
            <p className="text-slate-500">قريباً سنغطي خدمات الكهرباء، النجارة، والتكييف بنفس الجودة.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 grayscale">⚡</div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 grayscale">🪵</div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 grayscale">❄️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
