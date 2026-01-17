import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Card className="w-full mb-40 max-w-[1200px] mx-auto bg-white rounded-[0px_0px_10px_10px] shadow-[1px_1px_25px_1px_#eee]">
      <CardContent className="flex flex-col gap-2.5 px-10 py-8 md:px-[31px] md:py-[54px]">
        <div className="flex flex-col gap-[9px] w-full">
          <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#122979]
           text-sm tracking-[0] leading-[normal]">
            {t('hero.subtitle')}
          </h3>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[43px] w-full">
            <h2 className="w-full lg:w-[508px] [font-family:'Inter',Helvetica] font-semibold text-[#5f5f5f] text-2xl md:text-4xl tracking-[0] leading-[normal]">
              {t('hero.title')}
            </h2>

            <p className="w-full lg:w-[500px] [font-family:'Inter',Helvetica] font-light text-black text-md md:text-md tracking-[0] leading-[normal]">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
