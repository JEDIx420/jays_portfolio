'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Users, Calendar } from 'lucide-react';

const caseStudies = [
  {
    title: 'DataSemantics Growth Acceleration',
    subtitle: 'Scaling a data analytics startup to 10x revenue growth',
    description: 'Led strategic growth initiatives that transformed DataSemantics from a small startup to a market leader in data analytics.',
    image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Growth Strategy',
    results: [
      { icon: TrendingUp, label: 'Revenue Growth', value: '1000%' },
      { icon: Users, label: 'Team Expansion', value: '5x' },
      { icon: Clock, label: 'Time to Market', value: '50% faster' }
    ],
    challenge: 'DataSemantics had great technology but struggled with market penetration and scaling challenges.',
    solution: 'Implemented a comprehensive growth strategy including market research, product-market fit optimization, and scalable sales processes.',
    outcome: 'Achieved 10x revenue growth within 18 months and established DataSemantics as a market leader.'
  },
  {
    title: 'Serina.ai: From Concept to Market Leader',
    subtitle: 'Building an AI-powered AP automation platform from scratch',
    description: 'Created and launched Serina.ai, revolutionizing how businesses handle accounts payable processes through AI automation.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Product Development',
    results: [
      { icon: TrendingUp, label: 'Processing Time', value: '90% reduction' },
      { icon: Users, label: 'Customer Satisfaction', value: '95%' },
      { icon: Clock, label: 'ROI for Clients', value: '300%' }
    ],
    challenge: 'Businesses were losing thousands of hours on manual AP processes with high error rates.',
    solution: 'Developed an AI-powered platform that automates invoice processing, approval workflows, and financial reconciliation.',
    outcome: 'Serina.ai now processes millions in invoices monthly and has become the go-to solution for AP automation.'
  },
  {
    title: 'Zzenzzei: Scaling AI Automation Agency',
    subtitle: 'Building a profitable AI services business in a competitive market',
    description: 'Founded and scaled Zzenzzei from a solo consultancy to a full-service AI automation agency serving enterprise clients.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Business Development',
    results: [
      { icon: TrendingUp, label: 'Revenue Growth', value: '500%' },
      { icon: Users, label: 'Client Retention', value: '95%' },
      { icon: Clock, label: 'Project Delivery', value: '100% on-time' }
    ],
    challenge: 'The AI automation market was becoming saturated with generic solutions and price competition.',
    solution: 'Focused on deep industry expertise and custom solutions rather than one-size-fits-all approaches.',
    outcome: 'Zzenzzei became known for delivering high-impact, custom AI solutions with exceptional client results.'
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world examples of how I've helped businesses grow, innovate, and 
            succeed. Each case study represents a unique challenge and the strategic 
            approach that led to exceptional results.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {study.title}
                      </CardTitle>
                      <p className="text-primary font-semibold">
                        {study.subtitle}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground">
                        {study.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result) => (
                          <div key={result.label} className="text-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-2 mx-auto">
                              <result.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                          <p className="text-sm text-muted-foreground">{study.outcome}</p>
                        </div>
                      </div>

                      <Button
                        onClick={() => window.open('https://calendly.com/jayanand-tars/15min', '_blank')}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Discuss Similar Project
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}