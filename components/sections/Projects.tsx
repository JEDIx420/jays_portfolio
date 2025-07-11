'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Flow AI',
    description: 'A streamlined task automation system combining LLMs and workflows for solo operators.',
    technologies: ['n8n', 'ChatGPT', 'Notion API'],
    category: 'AI Automation',
    codeLink: '#',
    demoLink: '#'
  },
  {
    title: 'TaskMaster',
    description: 'A productivity dashboard with a Pomodoro timer and task tracker.',
    technologies: ['Supabase', 'Framer Motion', 'Google Sheets', 'Next.js'],
    category: 'Productivity',
    codeLink: '#',
    demoLink: '#'
  },
  {
    title: 'zzenti',
    description: 'A calming mental wellness tool with guided audio and reflective journaling.',
    technologies: ['TypeScript', 'GPT-4o', 'Telegram API'],
    category: 'Wellness',
    codeLink: '#',
    demoLink: '#'
  },
  {
    title: 'Mental Health Telegram Bot',
    description: 'A mood-tracking and check-in bot that helps users reflect through AI-generated prompts.',
    technologies: ['Telegram Bot API', 'Python', 'OpenAI'],
    category: 'AI Bot',
    codeLink: '#',
    demoLink: '#'
  },
  {
    title: 'Personal Assistant Telegram Bot',
    description: 'An AI-powered assistant that helps with daily routines, task logging, and reminders.',
    technologies: ['Telegram API', 'LangChain', 'OpenAI'],
    category: 'AI Assistant',
    codeLink: '#',
    demoLink: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of AI-powered tools and automation systems I've built to solve 
            real-world problems and enhance productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.codeLink, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demoLink, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
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