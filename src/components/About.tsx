import React, { useEffect, useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [aboutModal, setAboutModal] = useState<null | 'NLP' | 'Games'>(null);

  useEffect(() => {
    if (!aboutModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAboutModal(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aboutModal]);

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
              <a className="achievement" href="#portfolio" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openProjectModal', { detail: { title: 'Cazador' } })); }}>
                <span className="achievement-emoji">🚀</span>
                <p>Built an AI job-matching platform and career coach now becoming a portfolio company for a venture firm.</p>
              </a>
              <a className="achievement" href="#portfolio" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openProjectModal', { detail: { title: 'Zot Swap' } })); }}>
                <span className="achievement-emoji">🏆</span>
                <p>Won ETH Denver 2025 with a decentralized marketplace for student rentals through UCI's Blockchain Developer Team.</p>
              </a>
              <a className="achievement" href="#about" onClick={(e) => { e.preventDefault(); setAboutModal('NLP'); }}>
                <span className="achievement-emoji">📚</span>
                <p>Published and presented NLP research at a conference and forthcoming journal.</p>
              </a>
              <a className="achievement" href="#about" onClick={(e) => { e.preventDefault(); setAboutModal('Games'); }}>
                <span className="achievement-emoji">🎮</span>
                <p>Released multiplayer games on Steam and itch.io through UCI's Video Game Development Club.</p>
              </a>
            </div>
            {aboutModal && (
              <div className="project-modal" onClick={() => setAboutModal(null)}>
                <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="project-modal-close" aria-label="Close" onClick={() => setAboutModal(null)}>×</button>
                  {aboutModal === 'NLP' ? (
                    <>
                      <div className="portfolio-image" style={{ marginBottom: '1rem' }}>
                        <div className="project-icon">📚</div>
                      </div>
                      <h3 className="project-title" style={{ marginTop: 0 }}>NLP in Classics Research</h3>
                      <p className="project-description" style={{ marginTop: '-0.25rem', opacity: 0.9 }}>
                        A Quantitative Analysis of Race and Disciplinary Language in Classical Studies
                      </p>
                      <p className="project-description">
                        Explored biases and trends over time in Classics forums and journals through NLP research with the{' '}
                        <a href="https://www.qcrit.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Quantitative Criticism Lab</a>.
                        {' '}Built and analyzed word-embedding models across curated corpora to map semantic associations in Classics. Findings were presented at CAMWS 2023 and are part of a forthcoming journal publication.
                      </p>
                      <div className="project-technologies" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        {[
                          'NLP',
                          'Word-Embedding Models',
                          'word2vec',
                          'Cosine Similarity',
                          'Scratch-Made AI Model',
                          'Training/Testing',
                          'Scraping',
                          'Data Curation',
                          'Corpora',
                          'Data Analysis',
                          'Conference',
                          'Abstract',
                          'Journal Publication',
                          'Research',
                          'Interdisciplinary Studies'
                        ].map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                      <div className="project-links" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <a href="https://youtu.be/GUwPkCh3HXc?si=zNx-1ZpABD6smPet" target="_blank" rel="noopener noreferrer" className="btn btn-small">Watch Talk</a>
                        <a href="https://camws.org/sites/default/files/2979RacialandDisciplinary.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">Read Abstract</a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="portfolio-image" style={{ marginBottom: '1rem' }}>
                        <div className="project-icon">🎮</div>
                      </div>
                      <h3 className="project-title" style={{ marginTop: 0 }}>Game Development</h3>
                      <p className="project-description">Programmed for, designed, and released 3D multiplayer, horror, and strategy/adventure games on Steam and itch.io.</p>
                      <div className="project-technologies" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                        {[
                          'Unity',
                          'C#',
                          '3D',
                          'Multiplayer',
                          'Networked Systems',
                          'UI/UX',
                          'Audio',
                          'Game Dev',
                          'Game Publishing'
                        ].map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                      <div className="project-links" style={{ marginTop: '1rem' }}>
                        <a href="https://store.steampowered.com/app/2925430/Sandwich_Sim/" target="_blank" rel="noopener noreferrer" className="btn btn-small">Steam Page</a>
                        <a href="https://bihandasgupta.itch.io/" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline" style={{ marginLeft: '0.5rem' }}>itch.io</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <p>
              Beyond developing, I enjoy bringing people together — whether through leading Blockchain at UCI as Vice President, collaborations in interdisciplinary research, or teamwork in my classes and projects. I aim to bridge research, entrepreneurship, and engineering to create meaningful technology.
            </p>
            <div className="about-stats">
              <div className="stat" role="button" style={{cursor:'pointer'}} onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat" role="button" style={{cursor:'pointer'}} onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}>
                <h3>15+</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat" role="button" style={{cursor:'pointer'}} onClick={() => document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})}>
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