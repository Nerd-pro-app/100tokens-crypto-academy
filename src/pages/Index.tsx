
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import NewsSection from '@/components/NewsSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  // Enhanced live background animation effect
  useEffect(() => {
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Enhanced parallax effect
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
      
      // Add animated particles based on mouse position
      const intensity = 0.1;
      document.documentElement.style.setProperty('--parallax-x', `${(x - 0.5) * intensity}rem`);
      document.documentElement.style.setProperty('--parallax-y', `${(y - 0.5) * intensity}rem`);
    };

    // Create animated particles
    const createAnimatedParticles = () => {
      const animationContainer = document.querySelector('.live-bg') as HTMLElement;
      if (!animationContainer) return;
      
      // Clear existing particles
      const existingParticles = document.querySelectorAll('.bg-particle');
      existingParticles.forEach(particle => particle.remove());
      
      // Add new particles
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        // Randomize particle properties
        const size = Math.random() * 12 + 4;
        const opacity = Math.random() * 0.3 + 0.1;
        const duration = Math.random() * 40 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        
        // Set particle style
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = `${opacity}`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        animationContainer.appendChild(particle);
      }
    };

    // Handle window resize
    const handleResize = () => {
      createAnimatedParticles();
    };

    // Initialize effects
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    createAnimatedParticles();
    
    // Add pulse animation to highlight grid lines based on cursor
    const updateGridHighlight = () => {
      const x = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mouse-x'));
      const y = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mouse-y'));
      
      document.documentElement.style.setProperty('--grid-highlight-x', `${x * 100}%`);
      document.documentElement.style.setProperty('--grid-highlight-y', `${y * 100}%`);
    };
    
    const animateGrid = () => {
      updateGridHighlight();
      requestAnimationFrame(animateGrid);
    };
    
    animateGrid();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
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
