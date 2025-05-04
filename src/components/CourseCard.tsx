
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  instructor: string;
  views: number;
  participants: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const CourseCard = ({
  id,
  title,
  description,
  thumbnailUrl,
  instructor,
  views,
  participants,
  category,
  level
}: CourseCardProps) => {
  const { direction } = useLanguage();
  
  // Level badge color
  const levelColors = {
    beginner: 'bg-green-600',
    intermediate: 'bg-blue-600',
    advanced: 'bg-purple-600'
  };

  return (
    <Link to={`/courses/${id}`}>
      <Card className="crypto-card hover:shadow-lg hover:shadow-crypto-orange/10 transition-all duration-200 h-full flex flex-col">
        <div className="relative">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <span className={`text-xs font-medium text-white px-2 py-1 rounded ${levelColors[level]}`}>
              {level}
            </span>
            <span className="text-xs font-medium bg-crypto-orange text-white px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>
          
          <div className="mt-auto pt-4 border-t border-crypto-gray text-sm text-gray-400">
            <div className="flex justify-between mb-2">
              <span>Instructor:</span>
              <span className="text-white">{instructor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views}
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {participants}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
