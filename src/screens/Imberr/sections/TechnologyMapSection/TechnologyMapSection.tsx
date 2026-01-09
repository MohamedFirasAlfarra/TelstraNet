import { Button } from "../../../../components/ui/button";
import herobg from "../../../../assets/herobg.png"
export const TechnologyMapSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] lg:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${herobg})` }} />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-32 xl:px-48 flex items-center">
        <div className="flex flex-col lg:items-start md:items-center text-center lg:text-left gap-8
         md:gap-10 max-w-[1200px]">
          <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl 
           lg:text-[60px] xl:text-[50px] leading-[1.05] tracking-[-0.02em] animate-in fade-in
            slide-in-from-bottom-8 duration-700">
            The future of technology starts <br className="hidden lg:block" /> here
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-2xl flex items-start 
          lg:text-xl leading-snug max-w-[850px] opacity-90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Our performance is your success. Our passion is innovation. Our expertise <br className="hidden md:block" />
            is unmatched. We get you more
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
            <Button
              className="bg-[#2168ff] hover:bg-[#122979] font-normal text-white text-sm md:text-lg px-4 
              md:px-6 py-6 md:py-6 rounded-full transition-all duration-300 hover:scale-105 
              hover:shadow-[0_0_20px_rgba(33,104,255,0.4)] active:scale-95 whitespace-nowrap">
              Discover more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};