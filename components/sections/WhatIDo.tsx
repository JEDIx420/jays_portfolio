'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  GraduationCap, 
  Target, 
  Heart, 
  Music
} from 'lucide-react';

const roles = [
  {
    icon: TrendingUp,
    title: 'VP of Growth – DataSemantics',
    description: 'Driving GTM and revenue strategy for a global data analytics company. Launched multiple AI-powered SaaS offerings including Serina.ai in the MENA region.',
    tags: ['GTM Strategy', 'Sales Enablement', 'AI Workflows', 'Revenue Growth'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: GraduationCap,
    title: 'Founder – zzenzzei',
    description: 'Founded zzenzzei, an AI education brand helping non-technical professionals learn AI through real-world use cases, storytelling, and automation tools.',
    tags: ['AI Education', 'Content Strategy', 'No-Code Tools', 'Automation Training'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'GTM Lead – Serina.ai (via DataSemantics)',
    description: 'Responsible for go-to-market, sales, and customer education for Serina.ai — an AP automation platform developed at DataSemantics. Built collateral, ran campaigns, and drove pipeline.',
    tags: ['Fintech SaaS', 'B2B Marketing', 'Product Messaging', 'Campaign Execution'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Heart,
    title: 'Owner – Anandam Halls',
    description: 'Run a premium wedding venue in Tamil Nadu with a focus on creating elegant, emotionally resonant experiences through curated events and decor.',
    tags: ['Event Ops', 'Brand Building', 'Customer Experience'],
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Music,
    title: 'Musician & Creative Artist',
    description: 'Guitarist, songwriter, and performer blending blues and gospel styles. I often explore how music and storytelling intersect with tech and business.',
    tags: ['Creative Thinking', 'Storytelling', 'Collaboration'],
    color: 'from-orange-500 to-orange-600'
  }
];

const skills = [
  'Campaign Management',
  'Cold Call Training',
  'GTM Strategy',
  'AI-enabled Content',
  'No-code Automation',
  'Vibe Marketing'
];

export function WhatIDo() {
  return (
    <>
      {/* My Roles Section */}
      <section id="what-i-do" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">My Roles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I wear multiple hats across different industries and domains. From corporate growth 
              strategy to AI education, from fintech innovation to creative expression—each role 
              brings unique perspectives and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {role.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {role.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Skillsets Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Skillsets</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key areas of expertise that I bring to every project and collaboration. 
              Click any skill to learn more about how I can help you.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.button
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://topmate.io/jayanand_j', '_blank')}
                  className="group"
                >
                  <Badge 
                    variant="outline" 
                    className="text-base px-6 py-3 bg-white/80 dark:bg-gray-800/80 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group-hover:shadow-lg group-hover:border-primary"
                  >
                    {skill}
                  </Badge>
                </motion.button>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-sm text-muted-foreground">
                Click any skill above to explore collaboration opportunities
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}