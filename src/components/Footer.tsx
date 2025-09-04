import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Bihan Dasgupta. All rights reserved. 🌸</p>
            <p className="footer-tagline">Made with 💖 for dreamy conversations</p>
          </div>
          <div className="footer-social">
            <a 
              href="https://github.com/BihanDasgupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              🐙
            </a>
            <a 
              href="https://www.linkedin.com/in/bihan-dasgupta-8b63a5286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a 
              href="https://devpost.com/dasguptb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Devpost"
            >
              🚀
            </a>
            <a 
              href="https://bihandasgupta.itch.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Itch.io"
            >
              🎮
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 