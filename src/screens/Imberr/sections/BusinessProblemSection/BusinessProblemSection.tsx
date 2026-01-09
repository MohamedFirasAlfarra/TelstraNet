import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const BusinessProblemSection = (): JSX.Element => {


  return (
    <section className="relative w-full flex flex-col gap-[33px] bg-white overflow-hidden py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row h-auto w-full max-w-[1285.61px] self-center items-center gap-8 lg:gap-0 px-4">
        <div className="flex flex-col w-full lg:w-[550px] items-start gap-7">
          <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#122979]
           text-sm tracking-[0] leading-[normal]">
            NEED HELP ?
          </h3>

          <h2 className="text-3xl md:text-4xl relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-[#535252] tracking-[0] leading-[normal]">
            Don&#39;t hesitate to contact us for more information
          </h2>

          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-light text-[#333333] text-lg md:text-[12px] tracking-[0] leading-[normal]">
            Hendrerit mattis taciti gravida pellentesque fusce ullamcorper diam
            massa commodo
          </p>
        </div>

        <div className="relative w-full lg:w-[777px] h-auto flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[650px]">
            <div className="absolute top-[732px] left-[100px] w-[548px] h-[67px] bg-[#6f6f6f33] rounded-[25px] blur-[5px] hidden lg:block" />

            <div className="absolute top-[699px] left-[59px] w-[627px] h-[67px] bg-[#c7c7c7d9] rounded-[25px] blur-[1px] hidden lg:block" />

            <Card className="relative w-full bg-white rounded-[6px] overflow-hidden shadow-[4px_4px_8.8px_2px_#00000040] border-0">
              <CardContent className="p-6 md:p-8 lg:p-16">
                <form className="flex flex-col gap-[30px]">
                  <div className="flex flex-col md:flex-row gap-[30px] md:gap-4">
                    <div className="flex flex-col w-full items-start gap-[1px]">
                      <Label
                        htmlFor="name"
                        className="[font-family:'Inter',Helvetica] font-light text-black text-md tracking-[0] leading-[normal]"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Name"
                        className="w-full h-[45px] bg-[#d2d7db66] rounded-[6px] border-0 [font-family:'Inter',Helvetica] font-light text-[#888888] text-xl px-[25px] placeholder:text-sm"
                      />
                    </div>

                    <div className="flex flex-col w-full items-start gap-[1px]">
                      <Label
                        htmlFor="phone"
                        className="[font-family:'Inter',Helvetica] font-light text-black text-md tracking-[0] leading-[normal]"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Phone"
                        className="w-full h-[45px] bg-[#d2d7db66] rounded-[6px] border-0 [font-family:'Inter',Helvetica] font-light text-[#888888] text-xl px-[25px] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full items-start gap-[1px]">
                    <Label
                      htmlFor="email"
                      className="[font-family:'Inter',Helvetica] font-light text-black text-md tracking-[0] leading-[normal]"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      className="w-full h-[45px] bg-[#d2d7db66] rounded-[6px] border-0 [font-family:'Inter',Helvetica] font-light text-[#888888] text-xl px-[25px] placeholder:text-sm"
                    />
                  </div>

                  <div className="flex flex-col w-full items-start gap-[1px]">
                    <Label
                      htmlFor="message"
                      className="[font-family:'Inter',Helvetica] font-light text-black text-md tracking-[0] leading-[normal]"
                    >
                      Messae
                    </Label>
                    <Textarea
                      id="message"
                      className="w-full h-[160px] bg-[#d2d7db66] rounded-[6px] border-0 [font-family:'Inter',Helvetica] font-light text-[#888888] text-xl px-[25px] py-[17px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-auto bg-[#2168ff] hover:bg-[#122979] rounded-[30px]
                     py-[10px] [font-family:'Inter',Helvetica]
                     font-light text-[#fff] text-[15px] tracking-[0] leading-[normal]" >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
