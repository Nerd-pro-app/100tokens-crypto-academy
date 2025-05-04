
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { mockCourses } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Courses = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('all');
  
  const filteredCourses = mockCourses.filter(course => {
    // Filter by search query
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by level tab
    const matchesTab = currentTab === 'all' || course.level === currentTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-crypto-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 live-bg">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              {t('courses.all')}
            </h1>
            
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 bg-crypto-dark-light border-crypto-gray text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-2xl mx-auto" onValueChange={setCurrentTab}>
              <TabsList className="grid grid-cols-4 bg-crypto-dark-light">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="beginner">{t('courses.beginner')}</TabsTrigger>
                <TabsTrigger value="intermediate">{t('courses.intermediate')}</TabsTrigger>
                <TabsTrigger value="advanced">{t('courses.advanced')}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map(course => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">No courses found matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-crypto-orange text-crypto-orange"
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentTab('all');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
