import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a computer science student at UC Irvine driven by a love for innovation and the need to create. Over the past few years, I've:
            </p>
            <div className="about-achievements">
              <div className="achievement">
                <span className="achievement-emoji">🚀</span>
                <p>Built an AI job-matching platform and career coach now becoming a portfolio company for a venture firm.</p>
              </div>
              <div className="achievement">
                <span className="achievement-emoji">🏆</span>
                <p>Won ETH Denver 2025 with a decentralized marketplace for student rentals through UCI's Blockchain Developer Team.</p>
              </div>
              <div className="achievement">
                <span className="achievement-emoji">📚</span>
                <p>Published and presented NLP research at a conference and forthcoming journal.</p>
              </div>
              <div className="achievement">
                <span className="achievement-emoji">🎮</span>
                <p>Released multiplayer games on Steam and itch.io through UCI's Video Game Development Club.</p>
              </div>
            </div>
            <p>
              Beyond developing, I enjoy bringing people together — whether through leading Blockchain at UCI as Vice President, collaborations in interdisciplinary research, or teamwork in my classes and projects. I aim to bridge research, entrepreneurship, and engineering to create meaningful technology.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Languages & Tools</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="/Headshot2.jpg" 
              alt="Bihan's professional headshot" 
              className="about-headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 