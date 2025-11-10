import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "A full-featured shopping app with payment integration and real-time inventory management.",
      category: "Mobile App",
      image: "🛒",
      tech: ["React Native", "Firebase", "Stripe"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and SEO optimization.",
      category: "Web Development",
      image: "💼",
      tech: ["React", "GSAP", "Framer Motion"]
    },
   {
  id: 3,
  title: "Dating App",
  description: "A modern dating platform which Features profile verification, location-based matching, and secure chat functionality.",
  category: "Mobile App",
  image: "💑",
  tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase", "Redis"]
},
    
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSeeMore = () => {
    navigate('/services');
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className=''>
        {/* Animated Background Elements */}
        <div className="floating-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-subtitle">
            See how we've helped businesses transform their digital presence with our innovative solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-inner">
                {/* Card Glow Effect */}
                <div className="card-glow"></div>
                
                {/* Animated Border */}
                <div className="animated-border"></div>
                
                <div className="project-content">
                  {/* Floating Icon */}
                  <div className="project-icon-wrapper">
                    <div className="project-icon">
                      {project.image}
                    </div>
                    <div className="icon-orbits">
                      <div className="orbit orbit-1"></div>
                      <div className="orbit orbit-2"></div>
                    </div>
                  </div>

                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Elements */}
                  <div className="hover-elements">
                    <div className="hover-dot dot-1"></div>
                    <div className="hover-dot dot-2"></div>
                    <div className="hover-dot dot-3"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;