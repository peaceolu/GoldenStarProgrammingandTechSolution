// Updated Hero Component
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="floating-tech tech-1">💻</div>
      <div className="floating-tech tech-2">📱</div>
      <div className="floating-tech tech-3">🎨</div>
      
      {/* Status Badge */}
      <div className="status-badge">
        <div className="status-dot"></div>
        <span>Available for Projects</span>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line-1">Your Vision.{' '}</span>
            <span className="line-2">
              <span className="gold-gradient-text">
                Our Code.
              </span>{' '}
              Limitless Possibilities.
            </span>
          </h1>
          
          <p className="hero-subtitle">
            From mobile apps to digital marketing, we bring your ideas to life with cutting-edge technology and creative solutions that drive real business results.
          </p>
          
          <div className="hero-buttons">
            <a
              href="mailto:raphaelpeace2002@gmail.com"
              className="cta-button primary"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="cta-button secondary"
            >
              View Our Work
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;