import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<null | { name: string; icon: string }>(null);

  // Short, human-friendly definitions for each skill
  const definitions: Record<string, string> = {
    'React.js': 'A component-based JavaScript library for building fast, interactive UIs.',
    'TypeScript': 'A typed superset of JavaScript that compiles to plain JS for safer, scalable apps.',
    'JavaScript': 'The language of the web used to build dynamic, interactive experiences.',
    'HTML/CSS': 'Structure and style for web pages using semantic markup and modern layouts.',
    'Node.js': 'Server-side JavaScript runtime for building scalable network applications.',
    'Express': 'Minimal Node.js web framework for APIs and server-side logic.',
    'Python': 'General-purpose language great for data, AI, scripting, and backend development.',
    'PostgreSQL / SQL': 'Relational database with strong SQL support, ACID compliance, and extensions.',
    'NLP': 'Natural Language Processing — teaching machines to understand and generate text.',
    'RAG LLMs': 'Retrieval-Augmented Generation — LLMs grounded by external, up-to-date knowledge.',
    'Prompt Engineering': 'Designing effective prompts and chains to guide LLM behavior and outputs.',
    'Neural Networks': 'Learning systems inspired by the brain; core to deep learning and modern AI.',
    'Solidity (EVM)': 'Smart contract language for Ethereum and EVM-compatible chains.',
    'ethers.js': 'A lightweight library for interacting with the Ethereum blockchain.',
    'Hardhat': 'Ethereum development environment for compiling, testing, and deploying contracts.',
    'Docker': 'Containerization platform for reproducible builds and consistent deployments.',
    'Render': 'Cloud hosting platform for web services, workers, and static sites.',
    'Vercel': 'Edge-first hosting and CI/CD for frontend apps, especially Next.js.',
    'Netlify': 'Modern web hosting with serverless functions and instant deploy previews.'
  };

  useEffect(() => {
    if (!selectedSkill) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkill(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedSkill]);
  const skillCategories = [
    {
      title: 'Frontend (UI Layer)',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'HTML/CSS', icon: '🌐' }
      ]
    },
    {
      title: 'Backend & APIs (App Layer)',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚀' },
        { name: 'Python', icon: '🐍' },
        { name: 'PostgreSQL / SQL', icon: '🗄️' }
      ]
    },
    {
      title: 'Data & AI (Intelligence Layer)',
      skills: [
        { name: 'NLP', icon: '🧠' },
        { name: 'RAG LLMs', icon: '🤖' },
        { name: 'Prompt Engineering', icon: '✍️' },
        { name: 'Neural Networks', icon: '🕸️' }
      ]
    },
    {
      title: 'Web3 (Smart Contract Layer)',
      skills: [
        { name: 'Solidity (EVM)', icon: '⛓️' },
        { name: 'ethers.js', icon: '🧩' },
        { name: 'Hardhat', icon: '🛠️' }
      ]
    },
    {
      title: 'Product & Ops (Shipping Layer)',
      skills: [
        { name: 'Docker', icon: '🐳' },
        { name: 'Render', icon: '🚢' },
        { name: 'Vercel', icon: '⚡' },
        { name: 'Netlify', icon: '🎯' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-category card hover-lift" 
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    role="button"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`, cursor: 'pointer' }}
                    onClick={() => setSelectedSkill({ name: skill.name, icon: skill.icon })}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && (
        <div className="project-modal" onClick={() => setSelectedSkill(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" aria-label="Close" onClick={() => setSelectedSkill(null)}>×</button>
            <div className="portfolio-image" style={{ marginBottom: '1rem' }}>
              <div className="project-icon">{selectedSkill.icon}</div>
            </div>
            <h3 className="project-title" style={{ marginTop: 0 }}>{selectedSkill.name}</h3>
            <p className="project-description">{definitions[selectedSkill.name] || 'Technology used across projects for reliable, scalable development.'}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills; 