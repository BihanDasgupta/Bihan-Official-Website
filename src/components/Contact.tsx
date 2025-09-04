import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'dasguptb@uci.edu',
      icon: '📧',
      link: 'mailto:dasguptb@uci.edu'
    },
    {
      type: 'Telegram',
      value: '@t1yash',
      icon: '📱',
      link: 'https://t.me/t1yash'
    }
  ];

  const portfolioLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BihanDasgupta',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bihan-dasgupta-8b63a5286',
      icon: '💼'
    },
    {
      name: 'Devpost',
      url: 'https://devpost.com/dasguptb',
      icon: '🚀'
    },
    {
      name: 'Itch.io',
      url: 'https://bihandasgupta.itch.io/',
      icon: '🎮'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">Let's work together! 💫</h3>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <h4 className="contact-section-title">Contact Information</h4>
              {contactInfo.map((contact, index) => (
                <a 
                  key={contact.type}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-details">
                    <span className="contact-type">{contact.type}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="portfolio-links-section">
              <h4 className="contact-section-title">Portfolio & Career Sites</h4>
              <div className="portfolio-links-grid">
                {portfolioLinks.map((link, index) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="portfolio-link-icon">{link.icon}</span>
                    <span className="portfolio-link-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form card">
              <h4 className="form-title">Send me a message ✨</h4>
              <form className="contact-form-element">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message 🌸
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 