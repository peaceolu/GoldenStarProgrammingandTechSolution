import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="company-info">
            <div className="footer-logo">
              <div className="logo-star">★</div>
              <span className="logo-text">Goldenstar</span>
            </div>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
              We build innovative tech solutions that help businesses shine in the digital world. 
              From mobile apps to digital marketing, we're here to bring your ideas to life.
            </p>
            <div className="footer-social">
              {[
                { name: 'WhatsApp', url: 'https://wa.me/234XXXXXXXXXX', icon: '💬' },
                { name: 'Telegram', url: 'https://t.me/yourusername', icon: '✈️' },
                { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
                { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            {['home', 'services', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            {[
              'Mobile App Development',
              'UI/UX Design',
              'Shopify Marketing',
              'Digital Marketing'
            ].map((service) => (
              <a key={service} href="#services">
                {service}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Goldenstar Programming and Tech Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;