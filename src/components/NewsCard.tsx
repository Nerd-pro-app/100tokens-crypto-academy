
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

const NewsCard = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  author
}: NewsCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Link to={`/blog/${id}`}>
      <Card className="crypto-card hover:shadow-lg hover:shadow-crypto-orange/10 transition-all duration-200 h-full flex flex-col">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <span className="text-xs text-crypto-orange font-medium">{date}</span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-3">{excerpt}</p>
          
          <div className="mt-auto pt-3 flex justify-between items-center text-sm text-gray-400">
            <span>By {author}</span>
            <span className="text-crypto-orange font-medium hover:underline">{t('blog.read')}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
