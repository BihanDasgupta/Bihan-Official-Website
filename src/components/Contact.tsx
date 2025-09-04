import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if we're coming back from a successful form submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clear the URL parameter after showing the message
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
    
    // Also check localStorage for form submission
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted === 'true') {
      setShowSuccess(true);
      localStorage.removeItem('formSubmitted');
      
      // Only scroll to contact section if this was a form submission
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleFormSubmit = () => {
    // Set flag in localStorage before form submits
    localStorage.setItem('formSubmitted', 'true');
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'dasguptb@uci.edu',
      icon: '📧',
      link: 'mailto:dasguptb@uci.edu?subject=Hello from your portfolio&body=Hi Bihan,%0D%0A%0D%0AI found your portfolio and wanted to reach out...'
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
              
              {/* Success message - shows when redirected from FormSubmit */}
              {showSuccess && (
                <div className="form-success" style={{marginBottom: '2rem'}}>
                  <h5 style={{color: '#22c55e', marginBottom: '1rem'}}>✅ Message Sent Successfully!</h5>
                  <p style={{color: '#b8c5d6', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0.5rem'}}>
                    Thank you for reaching out! I've received your message and will get back to you as soon as possible. 
                    I typically respond within 24 hours.
                  </p>
                  <p style={{color: '#ff69b4', fontSize: '0.8rem', fontStyle: 'italic'}}>
                    📧 Sent Via: FormSubmit
                  </p>
                </div>
              )}
              <form 
                action="https://formsubmit.co/bihand2005@gmail.com" 
                method="POST"
                className="contact-form-element"
                encType="multipart/form-data"
                onSubmit={handleFormSubmit}
              >
                <div className="form-group">
                  <input 
                    type="text" 
                    name="from_name" 
                    placeholder="Your Name" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="reply_to" 
                    placeholder="Your Email" 
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* FormSubmit hidden settings */}
                <input type="hidden" name="_subject" value="New Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="http://localhost:3000/#contact" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I'll get back to you soon." />
                
                {/* Honeypot spam trap */}
                <input type="text" name="_honey" style={{display:'none'}} tabIndex={-1} autoComplete="off" />

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