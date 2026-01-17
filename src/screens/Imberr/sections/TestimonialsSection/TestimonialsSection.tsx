import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "../../../../assets/logo.png"
import { useTranslation } from "react-i18next";

export const TestimonialsSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const navigationItems = [
    { label: t('navbar.home'), isActive: true },
    { label: t('navbar.about_us'), isActive: false },
    { label: t('navbar.services'), isActive: false },
    { label: t('navbar.career'), isActive: false },
    { label: t('navbar.security_privacy'), isActive: false },
    { label: t('navbar.contact_us'), isActive: false },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center h-28">
          {/* Left Section: Imberr Logo + Separator */}
          <div className="flex items-center gap-6">
            <img
              src={logo}
              alt="IMBERR Technology"
              className="h-24 w-auto object-contain cursor-pointer"
            />
            <div className="hidden lg:block h-12 w-[1px] bg-gray-200 ml-2" />
          </div>

          {/* Middle Section: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`h-auto p-0 hover:bg-transparent transition-all duration-200 ${item.isActive
                  ? "[font-family:'Inter',Helvetica] font-medium text-[#2848c9] text-base xl:text-md tracking-tight"
                  : "[font-family:'Inter',Helvetica] font-medium text-[#333333] text-base xl:text-md tracking-tight hover:text-[#2848c9]"
                  }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Right Section: Language Switcher and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher (Desktop & Mobile) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-[#2848c9] hover:bg-transparent transition-colors duration-200"
              title={i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="h-6 w-6" />
              <span className="sr-only">Toggle Language</span>
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[#2848c9] hover:bg-transparent m-2 text-xl"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[112px] bg-white/95 backdrop-blur-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
          <div className="flex flex-col h-[calc(100vh-112px)] overflow-hidden">
            {/* Scrollable Items Container */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-left-4 duration-500 ease-out fill-mode-both"
                  style={{ animationDelay: `${index * 50 + 100}ms` }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start h-auto py-5 px-6 rounded-2xl hover:bg-gray-50/50 transition-all duration-300 group ${item.isActive
                      ? "bg-blue-50/40"
                      : "hover:translate-x-1"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`[font-family:'Inter',Helvetica] text-lg tracking-tight transition-colors duration-300 ${item.isActive ? "font-semibold text-[#2848c9]" : "font-medium text-[#333333] group-hover:text-[#2848c9]"
                        }`}>
                        {item.label}
                      </span>
                      {item.isActive ? (
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2848c9] animate-pulse" />
                          <div className="w-8 h-[2px] bg-[#2848c9]/20" />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-[#2848c9] scale-0 group-hover:scale-100 transition-transform duration-300" />
                      )}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
