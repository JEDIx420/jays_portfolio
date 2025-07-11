'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';

const skills = [
  'GTM Strategy', 'Product Marketing', 'Sales Operations', 'AI Automation', 
  'Team Leadership', 'SaaS Growth', 'Data Analytics', 'Music Production'
];

const education = [
  {
    degree: 'PGP in Data Science & Business Analytics',
    institution: 'McCombs School of Business, University of Texas',
    status: 'Completed'
  },
  {
    degree: 'Introduction to Psychology',
    institution: 'Yale University',
    status: '2025, in progress'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Bengaluru, India (IST)</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                Jayanand is a GTM strategist, product marketing leader, and sales operator with a track record of closing deals, running and designing campaigns, building ICPs and lists and training teams across geographies.
              </p>
              <p>
                He's currently VP of Growth at DataSemantics, where he leads GTM for products like Serina.ai. He's also the founder of zzenzzei, an AI education venture that helps non-tech professionals understand and use AI tools in real-world scenarios.
              </p>
              <p>
                He also owns Anandam Halls, a wedding venue in Tamil Nadu, and is a passionate musician blending blues, gospel, and folk influences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Skills */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-primary border-primary" />
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary/20 pl-4"
                  >
                    <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">{edu.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}