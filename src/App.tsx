import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSignals from './components/TrustSignals';
import LocalSEO from './components/LocalSEO';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSignals />
        <LocalSEO />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
