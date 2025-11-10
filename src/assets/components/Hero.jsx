import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const targetProjects = 50;
  const targetSatisfaction = 98;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Smooth animation using requestAnimationFrame
    const animateValue = (start, end, duration, updateCallback, onComplete) => {
      const startTime = performance.now();
      
      const updateValue = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);
        
        updateCallback(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        } else {
          updateCallback(end);
          if (onComplete) onComplete();
        }
      };
      
      requestAnimationFrame(updateValue);
    };

    // Animate projects counter
    animateValue(0, targetProjects, 2000, setProjectsCompleted);

    // Animate satisfaction counter with delay
    setTimeout(() => {
      animateValue(0, targetSatisfaction, 1500, setClientSatisfaction);
    }, 500);

  }, [isVisible]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Vision.{' '}
              <span className="gold-gradient-text">
                Our Code.
              </span>{' '}
              Limitless Possibilities.
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

            <div className={`hero-stats ${isVisible ? 'animate-in' : ''}`} ref={statsRef}>
              <div className="stat">
                <span className={`stat-number ${projectsCompleted === targetProjects ? 'reached-target' : ''}`}>
                  {projectsCompleted}+
                </span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className={`stat-number ${clientSatisfaction === targetSatisfaction ? 'reached-target' : ''}`}>
                  {clientSatisfaction}%
                </span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>

          {/* Rest of your hero visual content remains the same */}
          <div className="hero-visual">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Developer coding on laptop"
                className="hero-image"
              />
              <div className="image-glow"></div>
              
              <div className="floating-tech tech-1">💻</div>
              <div className="floating-tech tech-2">📱</div>
              <div className="floating-tech tech-3">🎨</div>
              
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