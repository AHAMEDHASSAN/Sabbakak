import { DollarSign, Gift, Headphones, ThumbsUp, Zap } from "lucide-react";
import React from "react";

const WhyUs = () => {
  const reasons = [
    {
      icon: <ThumbsUp />,
      title: "الثقة والمصداقية",
      desc: "جميع الفنيين لدينا معتمدون ويخضعون لرقابة مستمرة لضمان أفضل تجربة.",
    },
    {
      icon: <Zap />,
      title: "السرعة القصوى",
      desc: "نحن ندرك أن مشاكل السباكة طارئة، لذا نتواجد دائماً في أسرع وقت ممكن.",
    },
    {
      icon: <DollarSign />,
      title: "أسعار تنافسية",
      desc: "لا مزيد من المزايدات، أسعارنا مدروسة وشفافة وتناسب الجميع.",
    },
    {
      icon: <Headphones />,
      title: "دعم فني متميز",
      desc: "فريق دعم العملاء متواجد على مدار الساعة للرد على استفساراتكم وحل مشاكلكم.",
    },
    {
      icon: <Gift />,
      title: "عروض وخصومات",
      desc: "نحرص دائماً على تقديم خصومات دورية لعملائنا الأوفياء والمستخدمين الجدد.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/30 skew-x-[-12deg] translate-x-1/4 -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-secondary font-black text-xl md:text-2xl mb-4 md:mb-6 tracking-widest uppercase">لماذا تختارنا؟</h2>
            <h3 className="text-4xl md:text-7xl font-black mb-8 md:mb-10 leading-tight">
              نحن لا نقدم مجرد خدمة، <br />
              <span className="text-secondary">جودة مضمونة ١٠٠٪</span>
            </h3>
            <p className="text-xl md:text-3xl text-white/90 mb-10 md:mb-12 max-w-2xl font-bold leading-relaxed mx-auto lg:mr-0">
              تميزنا يكمن في اهتمامنا بأدق التفاصيل، وحرصنا الشديد على راحة العميل قبل كل شيء. انضم لآلاف العملاء الراضين اليوم.
            </p>
            
            <button className="bg-white text-primary hover:bg-secondary hover:text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xl md:text-2xl transition-all hover:scale-105 shadow-2xl shadow-black/20">
              ابدأ تجربتك الآن
            </button>
          </div>

          <div className="flex-1 grid sm:grid-cols-2 gap-6 md:gap-8 w-full">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className={`p-8 md:p-10 rounded-[2.5rem] border border-white/20 transition-all hover:bg-white/10 hover:border-white/30 flex flex-col items-center text-center md:items-start md:text-right ${
                  idx === 0 ? "sm:col-span-2 bg-white/10" : "bg-transparent"
                }`}
              >
                <div className="text-secondary mb-5 md:mb-6">
                  {React.cloneElement(reason.icon as React.ReactElement, { size: 40 })}
                </div>
                <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">{reason.title}</h4>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-bold">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
