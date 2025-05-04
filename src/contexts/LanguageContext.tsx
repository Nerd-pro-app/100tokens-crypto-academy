
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

// English and Arabic translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.blog': 'Blog',
    'nav.signup': 'Sign Up',
    'nav.login': 'Login',
    'hero.title': '100Tokens Academy',
    'hero.subtitle': 'Your Gateway to Cryptocurrency Knowledge',
    'hero.cta': 'Start Learning Now',
    'hero.special': 'Register now for special offers!',
    'popular.title': 'Most Popular',
    'watched.title': 'Most Watched',
    'participants.title': 'Most Participants',
    'news.title': 'Latest News',
    'footer.rights': 'All Rights Reserved',
    'signup.title': 'Create an Account',
    'signup.subtitle': 'Join 100Tokens Academy today',
    'signup.name': 'Full Name',
    'signup.email': 'Email',
    'signup.password': 'Password',
    'signup.button': 'Sign Up',
    'signup.login': 'Already have an account? Login',
    'signup.special': 'Sign up now and get access to premium courses!',
    'courses.all': 'All Courses',
    'courses.beginner': 'Beginner',
    'courses.intermediate': 'Intermediate',
    'courses.advanced': 'Advanced',
    'blog.read': 'Read More',
    'blog.popular': 'Popular Posts',
    'blog.recent': 'Recent Posts',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.courses': 'الدورات',
    'nav.blog': 'المدونة',
    'nav.signup': 'التسجيل',
    'nav.login': 'تسجيل الدخول',
    'hero.title': 'أكاديمية 100توكنز',
    'hero.subtitle': 'بوابتك إلى عالم العملات المشفرة',
    'hero.cta': 'ابدأ التعلم الآن',
    'hero.special': 'سجل الآن للحصول على عروض خاصة!',
    'popular.title': 'الأكثر شعبية',
    'watched.title': 'الأكثر مشاهدة',
    'participants.title': 'الأكثر مشاركة',
    'news.title': 'أحدث الأخبار',
    'footer.rights': 'جميع الحقوق محفوظة',
    'signup.title': 'إنشاء حساب',
    'signup.subtitle': 'انضم إلى أكاديمية 100توكنز اليوم',
    'signup.name': 'الاسم الكامل',
    'signup.email': 'البريد الإلكتروني',
    'signup.password': 'كلمة المرور',
    'signup.button': 'التسجيل',
    'signup.login': 'لديك حساب بالفعل؟ تسجيل الدخول',
    'signup.special': 'سجل الآن واحصل على وصول إلى الدورات المميزة!',
    'courses.all': 'جميع الدورات',
    'courses.beginner': 'مبتدئ',
    'courses.intermediate': 'متوسط',
    'courses.advanced': 'متقدم',
    'blog.read': 'اقرأ المزيد',
    'blog.popular': 'المقالات الشائعة',
    'blog.recent': 'أحدث المقالات',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  };

  // Translate function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    } else {
      // Default to browser language or English
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'ar' ? 'ar' : 'en');
    }
  }, []);

  const value = {
    language,
    direction,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
