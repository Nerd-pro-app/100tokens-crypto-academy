
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockNews } from '@/data/mockData';

interface NewsSectionProps {
  limit?: number;
}

const NewsSection = ({ limit = 4 }: NewsSectionProps) => {
  const { t } = useLanguage();
  const [news, setNews] = useState<typeof mockNews>([]);

  useEffect(() => {
    // In a real app, we would fetch data from an API here
    // For now, we'll use mock data
    setNews(mockNews.slice(0, limit));
  }, [limit]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">{t('news.title')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map(item => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              excerpt={item.excerpt}
              imageUrl={item.imageUrl}
              date={item.date}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
