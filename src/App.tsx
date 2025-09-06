import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [, forceRender] = useState(0);
  // Ensure repo-bubble collapsed state is re-read across route-less nav
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'repoBubbleCollapsed') {
        // trigger re-render so Hero reads the new state when returning to the top
        forceRender((x) => x + 1);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 