'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhatIDo } from '@/components/sections/WhatIDo';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}