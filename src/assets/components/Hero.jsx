import React from "react";
import { FaUsers, FaCog, FaChartLine } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">TechWorld</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </nav>

      {/* Hero Content */}
      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-text">
          <h1>
            Fuel Your Growth <br />
            With <span className="gold-text">Bold Marketing</span>
          </h1>
          <p>
            Unlock performance with data-driven campaigns, creative storytelling,
            and impactful branding.
          </p>
          <a href="#start" className="cta-btn">Get Started Free</a>
        </div>

        {/* Right Section */}
        <div className="hero-visuals">
          <div className="card image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Working desk"
            />
          </div>

          <div className="card small-card">
            <FaCog className="icon" />
            <h3>Decided Quality</h3>
          </div>

          <div className="card small-card">
            <FaChartLine className="icon" />
            <h3 className="gold-number">99%</h3>
            <p>Track and analyze business reports</p>
          </div>

          <div className="card user-card">
            <FaUsers className="icon" />
            <div>
              <h3>1.8M</h3>
              <p>Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
