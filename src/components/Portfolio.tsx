import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Search_Bihan',
      description: 'An interactive portfolio + career search tool built with Streamlit. Integrates RAG-based LLMs to answer career questions, highlight my work, and act as a searchable knowledge hub of my projects and experiences. NOTE: Streamlit websites fall asleep after a period of inactivity, if so please press the blue button to get the app back up and wait a few seconds to minutes.',
      technologies: ['Python', 'Streamlit', 'Web Development', 'Search Engine', 'LangChain', 'RAG LLM'],
      image: '🔍',
      liveLink: 'https://search-bihan.streamlit.app/',
      githubLink: 'https://github.com/BihanDasgupta/Search_Bihan'
    },
    {
      title: 'Cazador',
      description: 'A full-stack MVP AI-powered job matching platform and end-to-end career coach. Scrapes/curates tailored postings, scores skills, and gives personalized guidance to help you land your desired roles. Built as a monorepo with Next.js and Node.js, and powered by LangChain agents and PostgreSQL.',
      technologies: ['Next.js', 'Node.js', 'LangChain', 'PostgreSQL', 'OpenAI API', 'Perplexity API', 'Whisper API', 'React', 'Scraping'],
      image: '🎯',
      liveLink: 'https://cazador.onrender.com/',
      githubLink: null
    },
    {
      title: 'Zot Swap',
      description: 'ETH Denver 2025 winning decentralized rental marketplace for students. Uses Solidity smart contracts and a React frontend to let students securely rent and lend items as NFTs.',
      technologies: ['React', 'Solidity', 'Blockchain', 'Ethereum', 'dApp'],
      image: '⛓️',
      liveLink: 'https://rental-marketplace-xi.vercel.app/',
      githubLink: 'https://github.com/blockchainuci/rental-marketplace'
    },
    {
      title: 'PoppyNest',
      description: 'A cozy mental health and dream journaling app with AI chatbot support. Features include journaling, dream logging, drawing mode, and emotional memory.',
      technologies: ['React', 'Node.js', 'Firebase', 'OpenAI API'],
      image: '🌸',
      liveLink: 'https://poppynest.netlify.app/',
      githubLink: 'https://github.com/BihanDasgupta/PoppyNest'
    },
    {
      title: 'LiveLink',
      description: 'A social activity app created at VenusHacks 2025 that helps people connect offline instead of scrolling. Features friend discovery, activity posts, AI recommendations (Cohere), and phone-based authentication (Twilio)',
      technologies: ['React', 'Vite', 'Node.js', 'Python', 'Cohere API', 'Twilio', 'Phone Auth'],
      image: '📱',
      liveLink: 'https://devpost.com/software/livelink-84g7p0',
      githubLink: 'https://github.com/sungks/LiveLinkVH2025'
    },
    {
      title: 'ShotMint',
      description: 'An NBA analytics and betting assistant that uses RNNs to predict moneyline outcomes. Combines sports stats with blockchain minting for insights and on-chain ownership of predictions.',
      technologies: ['Python', 'RNN', 'Blockchain', 'Sports Analytics', 'Minting'],
      image: '🏀',
      liveLink: null,
      githubLink: 'https://github.com/BihanDasgupta/ShotMint'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="portfolio-item card hover-lift" 
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="portfolio-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="portfolio-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
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
      </div>
    </section>
  );
};

export default Portfolio; 