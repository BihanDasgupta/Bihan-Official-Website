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
      <ThemeBubbles />
    </div>
  );
}

const ThemeBubbles: React.FC = () => {
  const applyTheme = (primary: string, primary2: string) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', primary);
    root.style.setProperty('--primary-2', primary2);
    // derive rgb for soft backgrounds
    const rgb = primary.replace('#','');
    const r = parseInt(rgb.substring(0,2),16);
    const g = parseInt(rgb.substring(2,4),16);
    const b = parseInt(rgb.substring(4,6),16);
    root.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
    try { localStorage.setItem('themePrimary', primary); localStorage.setItem('themePrimary2', primary2); } catch {}
  };

  useEffect(() => {
    try {
      const p = localStorage.getItem('themePrimary');
      const p2 = localStorage.getItem('themePrimary2');
      if (p && p2) applyTheme(p, p2);
    } catch {}
  }, []);

  const themes = [
    { c1: '#ff69b4', c2: '#ff1493', emoji: '💗' }, // Pink (default)
    { c1: '#7dd3fc', c2: '#38bdf8', emoji: '💧' }, // Sky
    { c1: '#a7f3d0', c2: '#34d399', emoji: '💚' }, // Mint
    { c1: '#c4b5fd', c2: '#8b5cf6', emoji: '💜' }, // Violet
    { c1: '#fca5a5', c2: '#f43f5e', emoji: '❤️' }, // Rose
  ];

  return (
    <div className="theme-bubbles" aria-label="Theme selector">
      {themes.map((t, i) => (
        <button key={i} className="theme-dot" style={{ borderColor: t.c2, background: t.c1 + '26' }} onClick={() => applyTheme(t.c1, t.c2)} aria-label={`Theme ${i+1}`}>
          <span>{t.emoji}</span>
        </button>
      ))}
    </div>
  );
};

export default App; 