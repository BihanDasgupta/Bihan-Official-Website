import React, { useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="gradient-text glow">Bihan</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer & Builder at the Intersection of AI, Blockchain, and Entrepreneurship</p>
            <p className="hero-description">
              I design and launch products that turn ambitious ideas into reality — from AI-driven career platforms and blockchain marketplaces to multiplayer games. My focus is on building scalable, user-first applications that push technology forward while solving real-world problems.
            </p>
            <div className="hero-learn-more">
              <button 
                className="btn btn-text"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More →
              </button>
            </div>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-container">
              <div className="profile-image">
                <img 
                  src="/Headshot2.jpg" 
                  alt="Bihan's professional headshot" 
                  className="hero-headshot"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-element">🌸</div>
                <div className="floating-element">⭐</div>
                <div className="floating-element">💜</div>
                <div className="floating-element">💙</div>
              </div>
            </div>
          </div>
        </div>
        <RepoBubble />
      </div>
    </section>
  );
};

const RepoBubble: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(() => {
    try { return localStorage.getItem('repoBubbleCollapsed') === 'true'; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem('repoBubbleCollapsed', String(collapsed)); } catch {}
  }, [collapsed]);

  return collapsed ? (
    <button className="repo-bubble-icon" aria-label="Open repository info" onClick={() => setCollapsed(false)}>🌸</button>
  ) : (
    <div className="repo-bubble" role="dialog" aria-label="Repo Promo">
      <button className="repo-bubble-close" aria-label="Close" onClick={() => setCollapsed(true)}>×</button>
      <a
        href="https://github.com/BihanDasgupta/Bihan-Official-Website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Like the style of this website? Want to build your own? Click here to access the public repository!
      </a>
    </div>
  );
}

export default Hero; 