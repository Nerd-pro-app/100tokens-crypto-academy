
import { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockCourses } from '@/data/mockData';

interface CourseSectionProps {
  title: string;
  type: 'popular' | 'watched' | 'participants';
  limit?: number;
}

const CourseSection = ({ title, type, limit = 4 }: CourseSectionProps) => {
  const { t } = useLanguage();
  const [courses, setCourses] = useState<typeof mockCourses>([]);

  useEffect(() => {
    // In a real app, we would fetch data from an API here
    // For now, we'll use mock data and sort it based on the section type
    let sortedCourses = [...mockCourses];
    
    if (type === 'popular') {
      sortedCourses = sortedCourses.sort((a, b) => b.views + b.participants - (a.views + a.participants));
    } else if (type === 'watched') {
      sortedCourses = sortedCourses.sort((a, b) => b.views - a.views);
    } else if (type === 'participants') {
      sortedCourses = sortedCourses.sort((a, b) => b.participants - a.participants);
    }
    
    setCourses(sortedCourses.slice(0, limit));
  }, [type, limit]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              thumbnailUrl={course.thumbnailUrl}
              instructor={course.instructor}
              views={course.views}
              participants={course.participants}
              category={course.category}
              level={course.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
