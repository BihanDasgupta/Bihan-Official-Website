import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
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
                  <div key={skill.name} className="skill-item" 
                       style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 