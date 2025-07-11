'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const articles = [
  {
    title: 'The Future of AI in Business Automation',
    excerpt: 'Exploring how artificial intelligence is reshaping business processes and what leaders need to know to stay ahead of the curve.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Automation',
    link: '#',
    featured: true
  },
  {
    title: 'Building Scalable Growth Strategies for SaaS',
    excerpt: 'A comprehensive guide to creating sustainable growth frameworks that scale with your business.',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Growth Strategy',
    link: '#',
    featured: true
  },
  {
    title: 'From Startup to Scale: Lessons from DataSemantics',
    excerpt: 'Key insights and strategies that helped transform a small data analytics startup into a market leader.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Entrepreneurship',
    link: '#',
    featured: false
  },
  {
    title: 'The Art of Product-Market Fit in AI Solutions',
    excerpt: 'How to find and validate product-market fit when building AI-powered products and services.',
    date: '2023-12-20',
    readTime: '15 min read',
    category: 'Product Development',
    link: '#',
    featured: false
  },
  {
    title: 'Automating Accounts Payable: A Technical Deep Dive',
    excerpt: 'Technical insights into building Serina.ai and the challenges of creating intelligent financial automation.',
    date: '2023-12-15',
    readTime: '18 min read',
    category: 'Fintech',
    link: '#',
    featured: false
  },
  {
    title: 'Music and Entrepreneurship: Finding Creative Balance',
    excerpt: 'How pursuing music alongside business ventures has enhanced my creativity and problem-solving abilities.',
    date: '2023-12-10',
    readTime: '6 min read',
    category: 'Personal',
    link: '#',
    featured: false
  }
];

export function Writing() {
  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  return (
    <section id="writing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Writing & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on AI, business growth, entrepreneurship, and the intersection of 
            technology and creativity. I share insights from my journey building and 
            scaling multiple ventures.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                  
                  <Button
                    variant="ghost"
                    onClick={() => window.open(article.link, '_blank')}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(article.link, '_blank')}
                      className="text-xs px-2 py-1 h-auto"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}