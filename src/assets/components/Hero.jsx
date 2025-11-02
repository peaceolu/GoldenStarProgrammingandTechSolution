import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Vision.  {' '}
            <span className="gold-gradient-text">
              Our Code. 
            </span>{' '}
            Limitless Possibilities.
          </h1>
          
          <p className="hero-subtitle">
            From mobile apps to digital marketing, we bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          
          <a
            href="mailto:raphaelpeace2002@gmail.com"
            className="cta-button"
          >
            Hire Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;