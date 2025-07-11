'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Solutions',
    company: 'TechFlow Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Jay\'s growth strategies transformed our business completely. His insights into market dynamics and scaling operations helped us achieve 300% revenue growth in just 12 months.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'CFO, DataCorp',
    company: 'DataCorp',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Serina.ai has been a game-changer for our accounts payable process. We\'ve reduced processing time by 90% and virtually eliminated errors. Jay built something truly revolutionary.',
    rating: 5
  },
  {
    name: 'Emily Johnson',
    role: 'Operations Director, InnovateCorp',
    company: 'InnovateCorp',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Working with Zzenzzei on our AI automation was incredible. Jay understood our unique challenges and delivered custom solutions that exceeded our expectations.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Founder, StartupX',
    company: 'StartupX',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Jay\'s mentorship was invaluable during our scaling phase. His experience in both corporate growth and entrepreneurship provided perspectives that directly contributed to our success.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'VP Marketing, GrowthLabs',
    company: 'GrowthLabs',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Jay brings a unique combination of technical expertise and business acumen. His ability to translate complex AI concepts into practical business solutions is remarkable.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'CTO, FutureTech',
    company: 'FutureTech',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The automation solutions Jay developed for us have transformed our entire operation. We\'ve seen incredible improvements in efficiency and significant cost savings.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and collaborators 
            have to say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primary">
                        {testimonial.company}
                      </div>
                    </div>
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