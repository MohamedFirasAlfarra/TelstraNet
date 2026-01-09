import { useEffect, useRef, useState } from "react";

export const FooterSection = (): JSX.Element => {
  const stats = [
    {
      value: "14 K+",
      label: "Project Done",
    },
    {
      value: "12 K+",
      label: "Happy customer",
    },
    {
      value: "4.7",
      label: "Review customer",
    },
    {
      value: "15 +",
      label: "Years Experience",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full lg:py-16 overflow-hidden bg-[#2860f0] justify-center items-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('/Section3.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 from-[#1a4cd8] via-[#2860f0] to-[#3b82f6] opacity-90 " />

      <div className="container relative mx-auto px-6 lg:px-12 py-10">
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 mb-24 md:mb-32">
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-white/80 text-sm 
            md:text-md tracking-widest uppercase">
              INOVAZIA AT GLANCE
            </h3>

            <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-white text-2xl
             md:text-5xl lg:text-5xl leading-[1.15]">
              Let us do the work, so you can focus on what matters.
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8">
            <p className="[font-family:'Inter',Helvetica] font-light text-white/90 text-lg 
            md:text-[16px] leading-relaxed">
              Phasellus ad mus auctor ullamcorper lectus dictum sodales turpis
              rhoncus morbi ex. Dignissim purus phasellus suspendisse donec
              platea elementum sagittis eget pharetra magna aliquet. Elit cursus
              inceptos venenatis donec hac sollicitudin egestas himenaeos.
            </p>

            <p className="[font-family:'Inter',Helvetica] font-light text-white/90 text-lg 
            md:text-[16px] leading-relaxed">
              Phasellus ad mus auctor ullamcorper lectus dictum sodales turpis
              rhoncus morbi ex. Dignissim purus phasellus suspendisse donec
              platea elementum sagittis eget pharetra magna aliquet. Elit cursus
              inceptos venenatis donec hac sollicitudin egestas himenaeos.
            </p>
          </div>
        </div>

        {/* Stats Row with Animation */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 items-center 
          justify-center pt-20 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 transition-all duration-1000 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-4xl tracking-tight leading-none">
                {stat.value}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-medium text-white/70 text-sm md:text-base lg:text-lg tracking-wide uppercase text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
