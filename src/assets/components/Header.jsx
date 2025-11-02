import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="logo-star">★</div>
            <span className="logo-text">Goldenstar</span>
          </div>

          <nav className="nav-desktop">
            {['home', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
              <h3
                key={item}
                onClick={() => handleNavigation(item)}
                className="nav-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h3>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav">
              {['home', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
                <h4
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </h4>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;