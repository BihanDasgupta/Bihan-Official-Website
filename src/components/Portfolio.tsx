import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[number]>(null);
  const projects = [
    {
      title: 'Cazador',
      description: 'A full-stack MVP AI-powered job matching platform and end-to-end career coach. It scrapes and curates tailored postings, scores skills, and provides personalized guidance — from resume workshops and mock interviews to course recommendations for upskilling.\nNOTE: Currently hosted on Render’s free tier, so initial load may take a moment.',
      technologies: ['MVP', 'AI Agents', 'LangChain', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Job Scraping','OpenAI API', 'Perplexity API', 'Whisper API'],
      image: '🎯',
      liveLink: 'https://cazador.onrender.com/',
      githubLink: null
    },
    {
      title: 'Zot Swap',
      description: 'ETH Denver 2025 winning decentralized rental marketplace for students. Uses Solidity smart contracts and a React frontend to let students securely rent and lend items as NFTs. Focused on building trust and accessibility within college campuses and across communities.',
      technologies: ['Solidity', 'Ethereum', 'NFT', 'dApp', 'Blockchain', 'React', 'Buildathon', 'Hackathon'],
      image: '⛓️',
      liveLink: 'https://rental-marketplace-xi.vercel.app/',
      githubLink: 'https://github.com/blockchainuci/rental-marketplace'
    },
    {
      title: 'LiveLink',
      description: 'A community-building and activity/event-planning app created at VenusHacks 2025 that helps people efficiently organize meet-ups with their friends and other contacts. Features friend discovery, activity posts, AI recommendations (Cohere), and phone-based authentication and contact syncing (Twilio).',
      technologies: ['Hackathon', 'AI Recommendations', 'UI/UX', 'React', 'Vite', 'Node.js', 'Python', 'Cohere API', 'Twilio', 'Phone Auth'],
      image: '📱',
      liveLink: 'https://devpost.com/software/livelink-84g7p0',
      githubLink: 'https://github.com/sungks/LiveLinkVH2025'
    },
    {
      title: 'PoppyNest',
      description: 'A cozy mental health and dream journaling app with AI chatbot support and a UI designed to soothe the user. Features include journaling, dream logging, drawing mode, AI guidance with emotional memory, and numerous aesthetic themes/colors/modes.',
      technologies: ['AI Chatbot', 'UI/UX', 'User-Centric Experience', 'React', 'Node.js', 'Firebase', 'OpenAI API'],
      image: '🌸',
      liveLink: 'https://poppynest.netlify.app/',
      githubLink: 'https://github.com/BihanDasgupta/PoppyNest'
    },
    {
      title: 'ShotMint',
      description: 'An NBA analytics and betting assistant that uses RNNs to predict moneyline outcomes. Combines AI sports forcasting with blockchain minting for insights, allowing users to bet on guided AI predictions and have on-chain ownership. RNN model is built from scratch in Python and trained on scraped and curated NBA data. ',
      technologies: ['RNN', 'Scratch-Made AI Model', 'Training/Testing', 'Scraping', 'Data Curation','Blockchain', 'Minting', 'dApp', 'Python', 'Sports Analytics'],
      image: '🏀',
      liveLink: null,
      githubLink: 'https://github.com/BihanDasgupta/ShotMint'
    },
    {
      title: 'Search_Bihan',
      description: 'An interactive portfolio + career search tool built with Streamlit. Integrates RAG-based LLMs to answer career questions, highlight my work, and act as a searchable knowledge hub of my projects and experiences.\nNOTE: Streamlit websites fall asleep after a period of inactivity, please press the blue button to get the app back up and wait a few seconds to minutes.',
      technologies: ['Search Engine', 'RAG LLM', 'LangChain', 'Python', 'Streamlit', 'HTML/CSS'],
      image: '🔍',
      liveLink: 'https://search-bihan.streamlit.app/',
      githubLink: 'https://github.com/BihanDasgupta/Search_Bihan'
    }
  ];

  // Allow other components (e.g., About) to open a project modal by title
  useEffect(() => {
    const handler = (e: CustomEvent<{ title: string }>) => {
      const title = e.detail?.title;
      if (!title) return;
      const proj = projects.find(p => p.title.toLowerCase() === title.toLowerCase());
      if (proj) {
        setSelectedProject(proj);
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    // @ts-ignore - Custom event from other components
    window.addEventListener('openProjectModal', handler as EventListener);
    return () => {
      // @ts-ignore
      window.removeEventListener('openProjectModal', handler as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="portfolio-item card hover-lift" 
                 style={{ animationDelay: `${index * 0.2}s` }}
                 role="button"
                 onClick={() => setSelectedProject(project)}>
              <div className="portfolio-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="portfolio-content">
                <h3 className="project-title">{project.title}</h3>
                {(() => {
                  const desc = project.description;
                  const noteIdx = desc.indexOf('\nNOTE:');
                  if (noteIdx !== -1) {
                    const before = desc.substring(0, noteIdx);
                    return <p className="project-description">{before}</p>;
                  }
                  return <p className="project-description">{desc}</p>;
                })()}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                      {project.title === 'LiveLink' ? 'Devpost' : 'Live Demo'}
                    </a>
                  ) : null}
                  {project.githubLink ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                      GitHub
                    </a>
                  ) : null}
                  {project.title === 'Zot Swap' ? (
                    <a href="https://devfolio.co/projects/zotswap-2f2d" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                      Devfolio
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="project-modal" onClick={() => { setSelectedProject(null); }}>
            <div className="project-modal-content" onClick={e => e.stopPropagation()}>
              <button className="project-modal-close" aria-label="Close" onClick={() => { setSelectedProject(null); }}>×</button>
              <div className="portfolio-image" style={{ marginBottom: '1rem' }}>
                <div className="project-icon">{selectedProject.image}</div>
              </div>
              <h3 className="project-title" style={{ marginTop: 0 }}>{selectedProject.title}</h3>
              {(() => {
                const desc = selectedProject.description;
                const splitIndex = desc.indexOf('\nNOTE:');
                if (splitIndex !== -1) {
                  const before = desc.substring(0, splitIndex);
                  const note = desc.substring(splitIndex + 1); // keep 'NOTE:' prefix below
                  return (
                    <>
                      <p className="project-description">{before}</p>
                      {selectedProject.title === 'Cazador' && (
                        <p className="project-description" style={{ marginTop: '-0.25rem' }}>
                          MVP to be built into a portfolio company funded by{' '}
                          <a href="https://www.linkventures.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Link Ventures</a>.
                        </p>
                      )}
                      <p className="project-description">{note}</p>
                    </>
                  );
                }
                return (
                  <>
                    <p className="project-description">{desc}</p>
                    {selectedProject.title === 'Cazador' && (
                      <p className="project-description" style={{ marginTop: '-0.25rem' }}>
                        MVP to be built into a portfolio company funded by{' '}
                        <a href="https://www.linkventures.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Link Ventures</a>.
                      </p>
                    )}
                  </>
                );
              })()}
              <div className="project-technologies" style={{ marginTop: '1rem' }}>
                {selectedProject.technologies.map((tech, t) => (
                  <span key={t} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                {selectedProject.liveLink ? (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                    {selectedProject.title === 'LiveLink' ? 'Devpost' : 'Live Demo'}
                  </a>
                ) : null}
                {selectedProject.githubLink ? (
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                    GitHub
                  </a>
                ) : null}
                {selectedProject.title === 'Zot Swap' ? (
                  <a href="https://devfolio.co/projects/zotswap-2f2d" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                    Devfolio
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 