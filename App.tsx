
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-taupe selection:bg-navy selection:text-white">
      <Navbar />
      <main className="flex-grow relative">
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Benefits />
        <Features />
        {/* <Pricing /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
