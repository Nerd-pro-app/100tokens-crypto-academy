
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="live-bg py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="animate-floating mb-6 md:mb-10">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24"
          >
            <circle cx="50" cy="50" r="50" fill="#F97316" fillOpacity="0.1" />
            <circle cx="50" cy="50" r="40" fill="#F97316" fillOpacity="0.2" />
            <circle cx="50" cy="50" r="30" fill="#F97316" fillOpacity="0.4" />
            <circle cx="50" cy="50" r="20" fill="#F97316" />
            <path
              d="M50 38V62M38 50H62"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to="/courses">
            <Button className="bg-crypto-orange hover:bg-crypto-orange/90 text-white px-8 py-6 text-lg">
              {t("hero.cta")}
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="outline"
              className="border-crypto-orange text-crypto-orange hover:bg-crypto-orange hover:text-white px-8 py-6 text-lg"
            >
              {t("nav.signup")}
            </Button>
          </Link>
        </div>

        <div className="bg-crypto-orange/20 border border-crypto-orange/30 rounded-lg p-4 animate-pulse-slow max-w-xl">
          <p className="text-white font-medium">{t("hero.special")}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
