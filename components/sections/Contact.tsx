'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  Calendar,
  Send,
  MessageSquare
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'jayanand.jayakumar@gmail.com',
    link: 'mailto:jayanand.jayakumar@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8848506683',
    link: 'tel:+918848506683'
  },
  {
    icon: Calendar,
    title: 'Calendly',
    value: 'Schedule a Call',
    link: 'https://calendly.com/jayanand-tars/15min'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to discuss AI automation, GTM strategy, or explore 
            collaboration opportunities—I'd love to hear from you.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to build something amazing? Let's talk AI, growth, and GTM.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/jayanand-tars/15min', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        <Button
                          variant="ghost"
                          onClick={() => window.open(method.link, '_blank')}
                          className="h-auto p-0 text-primary hover:text-primary/80 font-medium"
                        >
                          {method.value}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="contact-form"
          >
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}