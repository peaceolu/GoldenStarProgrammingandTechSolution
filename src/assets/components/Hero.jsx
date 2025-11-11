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
      
      <div className="hero-container">
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

          <div className="hero-visual">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Developer coding on laptop"
                className="hero-image"
              />
              <div className="image-glow"></div>
              
              {/* Floating tech elements */}
              <div className="floating-tech tech-1">💻</div>
              <div className="floating-tech tech-2">📱</div>
              <div className="floating-tech tech-3">🎨</div>
              
              {/* Status badge */}
              <div className="status-badge">
                <div className="status-dot"></div>
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;