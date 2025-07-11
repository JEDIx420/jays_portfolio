'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Music,
  Heart
} from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ],
  ventures: [
    { name: 'DataSemantics', href: '#' },
    { name: 'zzenzzei', href: '#' },
    { name: 'Anandam Halls', href: '#' }
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/jayanand', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/jayanand', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/jayanand', icon: Instagram }
  ]
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Jayanand J</h4>
            <p className="text-sm text-muted-foreground mb-4">
              GTM Strategist, Product Marketer, AI Educator. 
              Building systems and teams that scale.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Music className="w-4 h-4" />
              <span>Currently jamming to: Original compositions blending blues and gospel</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (link.href.startsWith('#')) {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.open(link.href, '_blank');
                      }
                    }}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">My Ventures</h4>
            <ul className="space-y-2">
              {footerLinks.ventures.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(link.href, '_blank')}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-2 mb-4">
              {footerLinks.social.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(link.href, '_blank')}
                  className="hover:text-primary hover:border-primary transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="w-full"
            >
              Back to Top
            </Button>
          </motion.div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Jayanand J. Built with passion and purpose.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>in Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}