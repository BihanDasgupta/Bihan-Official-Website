import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({num1: 0, num2: 0, answer: 0});

  useEffect(() => {
    // Generate captcha question
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({num1, num2, answer: num1 + num2});
    
    // Check if we're coming back from a successful form submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clear the URL parameter after showing the message
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
      
      // Scroll to contact section
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    // Validate contact method + info
    const contactMethod = (formData.get('contact_method') as string) || '';
    const contactInfo = ((formData.get('contact_info') as string) || '').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const telegramRegex = /^(?:@?[a-zA-Z0-9_]{5,32}|https?:\/\/t\.me\/[a-zA-Z0-9_]{5,32})$/;
    // X (Twitter): @handle (1-15) OR full x.com URL. Entire string must match.
    const xRegex = /^(?:@?[A-Za-z0-9_]{1,15}|https?:\/\/(?:www\.)?x\.com\/[A-Za-z0-9_]{1,15}(?:\/.*)?)$/i;
    const linkedInRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9%_-]+\/?$/i;

    if (!contactMethod) {
      e.preventDefault();
      alert('Please choose a contact method.');
      return;
    }

    if (!contactInfo) {
      e.preventDefault();
      alert('Please provide your contact info.');
      return;
    }

    // Method-specific validation
    if (contactMethod === 'email') {
      const normalized = contactInfo.replace(/^mailto:/i, '');
      if (!emailRegex.test(normalized)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
      }
    } else if (contactMethod === 'telegram') {
      if (!telegramRegex.test(contactInfo)) {
        e.preventDefault();
        alert('Please enter a valid Telegram username (e.g., @username) or t.me link.');
        return;
      }
    } else if (contactMethod === 'x') {
      if (!xRegex.test(contactInfo)) {
        e.preventDefault();
        alert("Please enter a valid X handle (e.g., @yourhandle) or x.com link.");
        return;
      }
    } else if (contactMethod === 'linkedin') {
      if (!linkedInRegex.test(contactInfo)) {
        e.preventDefault();
        alert('Please provide a valid LinkedIn profile URL (e.g., https://www.linkedin.com/in/your-handle).');
        return;
      }
    }
    const userAnswer = parseInt((formData.get('captcha_answer') as string) || 'NaN');
    const expectedAnswer = captchaQuestion.answer;

    // Validate captcha first
    if (userAnswer !== expectedAnswer) {
      e.preventDefault();
      alert('❌ Verification failed! Please check your math and try again.');
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
      return;
    }

    // Try AJAX submission so we can stay on the same tab and show inline success
    try {
      e.preventDefault();

      const payload: Record<string, string> = {};
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          payload[key] = value;
        }
      });

      // Include FormSubmit options
      payload['_subject'] = 'New Portfolio Contact';
      payload['_template'] = 'table';
      payload['_captcha'] = 'false';
      payload['_autoresponse'] = "Thank you for contacting me! I'll get back to you soon.";

      const response = await fetch('https://formsubmit.co/ajax/bihand2005@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Mark success and show confirmation without leaving the page
        localStorage.setItem('formSubmitted', 'true');
        setShowSuccess(true);
        formEl.reset();
        // Regenerate captcha for the next submission
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
        // Ensure we are scrolled to the contact section
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // If AJAX fails for any reason, fall back to normal submission
      formEl.submit();
    } catch (err) {
      // Network/CORS/etc – fall back to normal submission so email still sends
      formEl.submit();
    }
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'dasguptb@uci.edu',
      icon: '📧',
      link: 'mailto:dasguptb@uci.edu?subject=Hello%20from%20your%20site&body=Hi%20Bihan,%0D%0A'
    },
    {
      type: 'Telegram',
      value: '@t1yash',
      icon: '📱',
      link: 'https://t.me/t1yash'
    },
    {
      type: 'X',
      value: '@t1yash',
      icon: '𝕏',
      link: 'https://x.com/t1yash'
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
      name: 'Devfolio',
      url: 'https://devfolio.co/@bihand/projects',
      icon: '🧩'
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
                <div key={contact.type} style={{ animationDelay: `${index * 0.2}s` }}>
                  <a 
                    href={contact.link}
                    target={contact.type === 'Email' ? undefined : '_blank'}
                    rel={contact.type === 'Email' ? undefined : 'noopener noreferrer'}
                    className="contact-method"
                    onClick={contact.type === 'Email' ? (e) => {
                      // Prevent default so we can control both actions in one user gesture
                      e.preventDefault();
                      // 1) Trigger OS mail handler via hidden iframe (does not navigate current tab)
                      try {
                        const iframe = document.createElement('iframe');
                        iframe.style.display = 'none';
                        iframe.src = contact.link; // mailto:
                        document.body.appendChild(iframe);
                        setTimeout(() => {
                          try { document.body.removeChild(iframe); } catch {}
                        }, 2000);
                      } catch {}
                      // 2) Open Gmail compose in a new tab as the visible fallback
                      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=dasguptb@uci.edu&su=Hello%20from%20your%20site';
                      window.open(gmailUrl, '_blank', 'noopener');
                    } : undefined}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <div className="contact-details">
                      <span className="contact-type">{contact.type}</span>
                      <span className="contact-value">{contact.value}</span>
                    </div>
                  </a>
                </div>
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
                  <select 
                    name="contact_method" 
                    required 
                    className="form-input"
                    style={{color: '#b8c5d6'}}
                  >
                    <option value="" disabled selected>Choose Contact Method</option>
                    <option value="email">📧 Email</option>
                    <option value="telegram">📱 Telegram</option>
                    <option value="x">𝕏 X (Twitter)</option>
                    <option value="linkedin">💼 LinkedIn</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="contact_info" 
                    placeholder="Your Contact Info (make sure it's the right link!)" 
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
                <div className="form-group">
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{color: '#b8c5d6', fontSize: '0.9rem'}}>
                      Verification: {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                    </span>
                    <input 
                      type="number" 
                      name="captcha_answer" 
                      placeholder="Answer" 
                      required 
                      className="form-input"
                      style={{width: '100px'}}
                    />
                  </div>
                </div>

                {/* FormSubmit hidden settings */}
                <input type="hidden" name="_subject" value="New Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="http://localhost:3000/#contact?success=true" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I'll get back to you soon." />
                <input type="hidden" name="expected_answer" value={captchaQuestion.answer} />
                
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