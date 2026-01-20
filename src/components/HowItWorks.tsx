import { MessageSquarePlus, Search, ShieldCheck, Star } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquarePlus size={32} />,
      title: "أرسل طلبك",
      desc: "حدد المشكلة وموقعك بكل سهولة عبر التطبيق أو الموقع.",
      color: "bg-blue-500",
    },
    {
      icon: <Search size={32} />,
      title: "توصيل بالسباك",
      desc: "نبحث عن أقرب سباك محترف ومتوفر في منطقتك فوراً.",
      color: "bg-orange-500",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "إنجاز العمل",
      desc: "يصلك الفني ويقوم بالإصلاح بأعلى معايير الجودة والضمان.",
      color: "bg-green-500",
    },
    {
      icon: <Star size={32} />,
      title: "التقييم والتعليق",
      desc: "شاركنا تجربتك وساعدنا في الحفاظ على مستوى الخدمة.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-primary font-black text-2xl mb-6 tracking-widest uppercase">كيف يعمل النظام</h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            خطوات بسيطة <span className="text-primary italic">لحياة أسهل</span>
          </h3>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-bold">
            عملية منظمة تضمن لك الحصول على الخدمة بأسرع وقت وأقل جهد ممكن.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 ${step.color} text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110`}>
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
                </div>
                <div className="bg-white px-4">
                  <span className="text-slate-300 text-6xl font-black mb-6 block opacity-50">0{idx + 1}</span>
                  <h4 className="text-3xl font-black text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-lg text-slate-500 leading-relaxed font-bold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
