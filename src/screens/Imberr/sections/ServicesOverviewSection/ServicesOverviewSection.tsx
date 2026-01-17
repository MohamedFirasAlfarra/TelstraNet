import { useTranslation } from "react-i18next";

export const ServicesOverviewSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="flex w-full items-center justify-center px-4 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row max-w-[1367px] w-full items-center gap-8 lg:gap-16">
        <div className="flex-col w-full lg:max-w-[508px] items-start gap-7 flex">
          <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#122979]
           text-sm tracking-[0] leading-[normal]">
            {t('services_overview.subtitle')}
          </h3>

          <h2 className="text-3xl md:text-[40px] relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#535252] tracking-[0] leading-[normal]">
            {t('services_overview.title')}
          </h2>

          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-light
           text-[#333333] text-lg md:text-lg tracking-[0] leading-[normal]">
            {t('services_overview.description')}
          </p>
        </div>

        <div className="relative w-full lg:max-w-[838px] h-[300px] md:h-[472px] rounded-[10px] [background:url(..//syriamap.png)_50%_50%_/_cover]" />
      </div>
    </section>
  );
};
