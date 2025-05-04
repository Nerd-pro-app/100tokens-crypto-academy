
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, setLanguage, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="bg-crypto-dark-light border-b border-crypto-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-crypto-orange text-xl md:text-2xl font-bold">100Tokens</span>
            <span className="text-white text-xl md:text-2xl font-light ml-1">Academy</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-crypto-orange transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/courses" className="text-gray-300 hover:text-crypto-orange transition-colors">
              {t('nav.courses')}
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-crypto-orange transition-colors">
              {t('nav.blog')}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-crypto-orange transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup">
              <Button variant="outline" className="border-crypto-orange text-crypto-orange hover:bg-crypto-orange hover:text-white">
                {t('nav.signup')}
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-crypto-orange hover:bg-crypto-orange/90 text-white">
                {t('nav.login')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-300 mr-2"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-crypto-dark-light border-t border-crypto-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-300 hover:text-crypto-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 text-gray-300 hover:text-crypto-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.courses')}
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-300 hover:text-crypto-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 text-gray-300 hover:text-crypto-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.signup')}
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-300 hover:text-crypto-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.login')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
