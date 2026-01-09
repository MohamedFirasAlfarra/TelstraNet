import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { SendHorizontal } from "lucide-react";
import logo from "../../../../assets/logo.png"

export const ContactFormSection = (): JSX.Element => {
  const companyLinks = [
    { text: "About us" },
    { text: "Leadership" },
    { text: "Careers" },
    { text: "Article & News" },
    { text: "Legal Notice" },
  ];

  const supportLinks = [
    { text: "Help Center" },
    { text: "Customer Service" },
    { text: "FAQ" },
    { text: "Contact us" },
  ];

  return (
    <footer className="w-full bg-[#124ce8] bg-gradient-to-br from-[#124ce8] via-[#1a4cd8]
     to-[#124ce8] py-6 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="flex items-center gap-3">
              <img className="w-[180px] object-contain rounded-xl" alt="TELSTRANET Logo" src={logo}/>
            </div>

            <p className="[font-family:'Inter',Helvetica] font-light text-white/90 text-sm md:text-base
             leading-relaxed max-w-[500px]">
              We create IT solutions that are easy to use, easy to manage, and
              easy to trust.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 lg:col-span-2 gap-8 text-left">
            <div className="flex flex-col gap-6">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-wider uppercase">
                Company
              </h3>

              <div className="flex flex-col gap-4">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm md:text-base"
                  >
                    <div className="w-1.5 h-1.5 bg-[#fff] rounded-full group-hover:scale-125 transition-transform" />
                    <span className="[font-family:'Inter',Helvetica] font-light">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base
               tracking-wider uppercase"> Support </h3>

              <div className="flex flex-col gap-4">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 text-white/80 hover:text-white 
                    transition-colors text-sm md:text-base" >
                    <div className="w-1.5 h-1.5 bg-[#fff] rounded-full group-hover:scale-125
                     transition-transform" />
                    <span className="[font-family:'Inter',Helvetica] font-light">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-left">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[14px] tracking-wider uppercase">
              Newsletter
            </h3>

            <div className="flex flex-col gap-1">
              <p className="[font-family:'Inter',Helvetica] font-light text-white text-[12px] leading-relaxed">
                Sign up our newsletter to get update news and article about company.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/70 placeholder:text-gray-50 h-12 rounded-full px-6 focus:bg-white/20 transition-all"
                />
                <Button className="w-full h-12 bg-[#2168ff] hover:bg-[#122979] text-white rounded-full flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-blue-900/20">
                  <SendHorizontal className="w-4 h-4" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex flex-col justify-center items-center gap-4 text-center">
          <p className="[font-family:'Inter',Helvetica] font-light text-white/60 text-xs md:text-sm">
            Copyright © 2026 TELSTRANET, All rights reserved.
          </p>
          {/* <p className="[font-family:'Inter',Helvetica] font-light text-white/60 text-xs md:text-sm">
            Developed By <span className="text-white/80 font-medium italic">TECHIMIZERS</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};
