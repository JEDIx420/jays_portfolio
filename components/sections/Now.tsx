'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Music, 
  BookOpen, 
  Users, 
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

const currentFocus = [
  {
    icon: Rocket,
    title: 'DataSemantics Expansion',
    description: 'Leading strategic initiatives to expand into new markets and develop cutting-edge analytics solutions.',
    status: 'In Progress',
    priority: 'High',
    timeline: 'Q1 2024'
  },
  {
    icon: BookOpen,
    title: 'AI Automation Course',
    description: 'Creating a comprehensive course on AI automation for business leaders and entrepreneurs.',
    status: 'Development',
    priority: 'Medium',
    timeline: 'Q2 2024'
  },
  {
    icon: Music,
    title: 'New Album Project',
    description: 'Working on a new collection of original songs that blend technology themes with human experiences.',
    status: 'Recording',
    priority: 'Personal',
    timeline: 'Mid 2024'
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Launching a mentorship program for early-stage entrepreneurs in AI and automation space.',
    status: 'Planning',
    priority: 'High',
    timeline: 'Q3 2024'
  }
];

const currentLocation = {
  city: 'San Francisco',
  country: 'USA',
  timezone: 'PST',
  availability: 'Available for consulting'
};

const recentUpdates = [
  {
    date: '2024-01-15',
    update: 'Launched new AI workflow automation for a Fortune 500 client'
  },
  {
    date: '2024-01-10',
    update: 'Spoke at TechCrunch Disrupt about the future of business automation'
  },
  {
    date: '2024-01-05',
    update: 'Serina.ai processed over $10M in invoices this month'
  },
  {
    date: '2023-12-20',
    update: 'Completed Series A funding round for DataSemantics'
  }
];

export function Now() {
  return (
    <section id="now" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">What I'm Working On Now</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A peek into my current projects, priorities, and what's keeping me busy. 
            I believe in transparency and sharing the journey, not just the destinations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Focus */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Current Focus</h3>
              <div className="space-y-6">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  item.priority === 'High' ? 'border-red-500 text-red-500' :
                                  item.priority === 'Medium' ? 'border-yellow-500 text-yellow-500' :
                                  'border-blue-500 text-blue-500'
                                }`}
                              >
                                {item.priority}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{item.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {item.timeline}
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                {item.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Current Location & Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Currently
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{currentLocation.city}, {currentLocation.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timezone</p>
                    <p className="font-semibold">{currentLocation.timezone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {currentLocation.availability}
                    </Badge>
                  </div>
                  <Button
                    onClick={() => window.open('https://calendly.com/jayanand-tars/15min', '_blank')}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Updates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <p className="text-sm text-muted-foreground mb-1">
                          {new Date(update.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm">{update.update}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}