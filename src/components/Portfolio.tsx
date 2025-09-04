import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Search_Bihan',
      description: 'My official website for career-related searches and information. A comprehensive platform showcasing my professional journey and expertise.',
      technologies: ['Python', 'Streamlit', 'Web Development', 'Search Engine', 'LangChain', 'RAG LLM'],
      image: '🔍',
      liveLink: 'https://search-bihan.streamlit.app/',
      githubLink: 'https://github.com/BihanDasgupta/Search_Bihan'
    },
    {
      title: 'Cazador',
      description: 'AI-powered job search and career coaching platform built as a monorepo with Next.js frontend, Node.js backend, LangChain agents, and PostgreSQL. Features job scraping, skill scoring, and personalized career guidance.',
      technologies: ['Next.js', 'Node.js', 'LangChain', 'PostgreSQL', 'OpenAI API', 'Perplexity API', 'Whisper API', 'React', 'Scraping'],
      image: '🎯',
      liveLink: 'https://cazador.onrender.com/',
      githubLink: null
    },
    {
      title: 'Zot Swap',
      description: 'ETH Denver 2025 winning decentralized marketplace dApp for student rentals. Built with React, Solidity smart contracts, and blockchain technology to enhance trust and accessibility within the college community.',
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
      description: 'A joyful social app that helps you stop scrolling and start hanging out in real life! Submitted at UCI\'s women-centric hackathon VenusHacks 2025. Features include posting and joining activities, AI-powered recommendations using Cohere API, phone authentication with Twilio, and building real connections through a friend system. Built with React, Vite, Node.js, and Python.',
      technologies: ['React', 'Vite', 'Node.js', 'Python', 'Cohere API', 'Twilio', 'Phone Auth'],
      image: '📱',
      liveLink: 'https://devpost.com/software/livelink-84g7p0',
      githubLink: 'https://github.com/sungks/LiveLinkVH2025'
    },
    {
      title: 'ShotMint',
      description: 'An RNN-powered NBA prediction and betting assistant dApp. Uses machine learning to analyze basketball statistics and provide insights.',
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
                      Live Demo
                    </a>
                  ) : null}
                  {project.githubLink ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                      GitHub
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