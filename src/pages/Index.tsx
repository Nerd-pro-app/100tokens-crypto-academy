
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import NewsSection from '@/components/NewsSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  // Create the live background animation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Subtle parallax effect
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-crypto-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <CourseSection 
          title={t('popular.title')} 
          type="popular"
        />
        
        <CourseSection 
          title={t('watched.title')} 
          type="watched"
        />
        
        <CourseSection 
          title={t('participants.title')} 
          type="participants"
        />
        
        <NewsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
