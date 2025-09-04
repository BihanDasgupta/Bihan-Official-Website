import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">🌸 Bihan Dasgupta 🌸</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 