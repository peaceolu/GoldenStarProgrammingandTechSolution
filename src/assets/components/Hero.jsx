import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>YourLogo</span>
          </div>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#pricing">Pricing</a>
            <a href="#careers">Careers</a>
          </div>
          
          <a href="mailto:raphaelpeace2002@gmail.com" className="nav-cta">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container">
        <div className="hero-content-wrapper">
          {/* Left Content */}
          <div className="hero-left">
            <h1 className="hero-title">
              Fuel Your Growth With Bold Marketing
            </h1>
            
            <p className="hero-subtitle">
              Unlock performance with data-driven campaigns, creative storytelling, and impactful branding
            </p>
            
            <a
              href="#get-started"
              className="cta-button"
            >
              Get Started Free
            </a>
          </div>

          {/* Right Content - Cards Collage */}
          <div className="hero-right">
            {/* Main Desk Photo Card */}
            <div className="card desk-card">
              <div className="card-image">
                <div className="blurred-face"></div>
                <div className="desk-setup"></div>
              </div>
            </div>

            {/* Statistic Card */}
            <div className="card stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-text">Track and analyze business reports</div>
            </div>

            {/* Icon Card */}
            <div className="card icon-card">
              <div className="icon-wrapper">
                <div className="gold-icon">★</div>
              </div>
              <div className="icon-text">Decided Quality</div>
            </div>

            {/* Users Card */}
            <div className="card users-card">
              <div className="avatar-group">
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar">+5</div>
              </div>
              <div className="users-text">1.8M Total Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-background">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;