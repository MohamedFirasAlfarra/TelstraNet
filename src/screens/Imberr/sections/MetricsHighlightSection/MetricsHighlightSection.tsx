import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Monitor,
  Cloud,
  Layers,
  ShieldCheck,
  Server,
  Rocket
} from "lucide-react";

const servicesData = [
  {
    title: "Artificial Intelligence",
    description: "AI and Robotics at Imberr: Redefining Possibilities",
    icon: Monitor,
  },
  {
    title: "Cloud Services",
    description:
      "Cloud Computing and Hybrid Cloud Solutions at Imberr: Unleashing the Power of the Cloud",
    icon: Cloud,
  },
  {
    title: "Smart Home & Building Automation",
    description: "Cognitive City, Smart Building, and Building Automation Solutions by Imberr: Shaping Smarter Environments",
    icon: Layers,
  },
  {
    title: "Cyber Security",
    description:
      "Cyber Security Solutions at Imberr: Protecting Your Digital Assets",
    icon: ShieldCheck,
  },
  {
    title: "Data Center & Application",
    description:
      "Data Center & Application Solutions by Imberr: Powering Your Digital Infrastructure",
    icon: Server,
  },
  {
    title: "Digital Transformation",
    description:
      "Digital Transformation at Imberr: Enabling Seamless Digital Evolution",
    icon: Rocket,
  },
];

export const MetricsHighlightSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col w-full items-center gap-16 py-20 px-4 bg-white/50">
      <header className="flex flex-col max-w-[800px] items-center gap-3">
         <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#122979]
           text-sm tracking-[0] leading-[normal]">
          WHAT WE OFFER
        </h3>

        <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#5f5f5f] text-3xl md:text-5xl lg:text-[45px] text-center">
          Where technology meets business.
        </h2>
      </header>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1240px] shadow-[0px_4px_30px_rgba(0,0,0,0.05)] "
      >
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className={`bg-white rounded-[20px] border-0 shadow-[0px_4px_30px_rgba(0,0,0,0.05)] transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="flex flex-col items-start p-8 md:p-10 h-full min-h-[380px] group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 mb-8 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#00c6ba]" />
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h4 className="[font-family:'Inter',Helvetica] font-semibold text-[#555555] text-xl md:text-2xl tracking-tight">
                    {service.title}
                  </h4>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#111111] text-sm md:text-base leading-relaxed">
                    {service.description.startsWith("**") ? (
                      <span className="font-bold">{service.description.replace(/\*\*/g, '')}</span>
                    ) : (
                      service.description
                    )}
                  </p>
                </div>

                <div className="mt-auto w-full flex justify-center">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#2168ff] border-[2px] text-[#2168ff] hover:bg-[#2168ff]
                     hover:text-white transition-all duration-300 px-6 py-2 h-auto
                      text-sm md:text-base font-normal">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
