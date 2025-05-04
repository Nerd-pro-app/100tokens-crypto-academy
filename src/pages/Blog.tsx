
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { mockNews, mockBlogPosts } from '@/data/mockData';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = mockBlogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-crypto-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 live-bg">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Blog
            </h1>
            
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-crypto-dark-light border-crypto-gray text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content area */}
              <div className="lg:col-span-2">
                {filteredPosts.length > 0 ? (
                  <div className="space-y-8">
                    {filteredPosts.map(post => (
                      <Card key={post.id} className="crypto-card overflow-hidden">
                        <div>
                          <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.author}</span>
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                          <div 
                            className="text-gray-300 mb-4 line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.content.split('</p>')[0] + '</p>' }}
                          />
                          <a href={`/blog/${post.id}`} className="text-crypto-orange font-medium hover:underline">
                            {t('blog.read')}
                          </a>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-400">No blog posts found matching your search criteria.</p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular posts */}
                <Card className="crypto-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{t('blog.popular')}</h3>
                  <div className="space-y-4">
                    {mockNews.slice(0, 3).map(item => (
                      <div key={item.id} className="flex items-start space-x-3">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-white line-clamp-2">{item.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Categories */}
                <Card className="crypto-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Bitcoin', 'Ethereum', 'DeFi', 'NFTs', 'Trading', 'Security', 'Technology', 'Regulation'].map(category => (
                      <a 
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="bg-crypto-dark px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-crypto-orange hover:text-white transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </Card>
                
                {/* Newsletter */}
                <Card className="crypto-card p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Newsletter</h3>
                  <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates</p>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-crypto-dark border-crypto-gray text-white mb-3"
                  />
                  <button className="w-full bg-crypto-orange text-white py-2 rounded hover:bg-crypto-orange/90 transition-colors">
                    Subscribe
                  </button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
