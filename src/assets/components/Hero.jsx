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

    // Projects counter animation
    const projectsDuration = 2000; // 2 seconds
    const projectsStep = targetProjects / (projectsDuration / 16); // 60fps
    
    let projectsCurrent = 0;
    const projectsTimer = setInterval(() => {
      projectsCurrent += projectsStep;
      if (projectsCurrent >= targetProjects) {
        setProjectsCompleted(targetProjects);
        clearInterval(projectsTimer);
      } else {
        setProjectsCompleted(Math.floor(projectsCurrent));
      }
    }, 16);

    // Satisfaction counter animation (starts after a small delay)
    setTimeout(() => {
      const satisfactionDuration = 1500; // 1.5 seconds
      const satisfactionStep = targetSatisfaction / (satisfactionDuration / 16);
      
      let satisfactionCurrent = 0;
      const satisfactionTimer = setInterval(() => {
        satisfactionCurrent += satisfactionStep;
        if (satisfactionCurrent >= targetSatisfaction) {
          setClientSatisfaction(targetSatisfaction);
          clearInterval(satisfactionTimer);
        } else {
          setClientSatisfaction(Math.floor(satisfactionCurrent));
        }
      }, 16);
    }, 300);

    return () => {
      clearInterval(projectsTimer);
    };
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

            <div className="hero-stats" ref={statsRef}>
              <div className="stat">
                <span className="stat-number">
                  {projectsCompleted}+
                </span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">
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