import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestimonialsPage.css';

const TestimonialsPage = () => {
  const navigate = useNavigate();

  const allTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechInnovate Inc.",
      role: "CEO",
      content: "Goldenstar developed our mobile app and the results exceeded our expectations. The team was professional, met all deadlines, and delivered a high-quality product that our users love. Their attention to detail and commitment to excellence is truly remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Mobile App Development",
      project: "E-commerce Mobile App"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StyleHub Fashion",
      role: "Marketing Director",
      content: "Their Shopify marketing services transformed our e-commerce store. Our sales increased by 150% in just 3 months. The team's data-driven approach and creative strategies helped us reach new customers and build a strong online presence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Shopify Marketing",
      project: "Fashion E-commerce Store"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "HealthPlus App",
      role: "Product Manager",
      content: "The UI/UX design work was exceptional. They understood our vision and created an intuitive interface that our patients find easy to use. Great communication throughout the project and delivered beyond our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "UI/UX Design",
      project: "Healthcare Application"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FinanceFlow",
      role: "Founder",
      content: "Outstanding digital marketing strategy! Goldenstar helped us reach our target audience effectively. Their data-driven approach delivered measurable results from day one. Our ROI increased by 300% in the first quarter.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Digital Marketing",
      project: "Fintech Startup Launch"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Creative Studio",
      role: "Creative Director",
      content: "Working with Goldenstar was a game-changer. Their attention to detail and creative solutions helped us stand out in a crowded market. The brand identity they created perfectly captures our vision and values.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Brand Design",
      project: "Complete Brand Identity"
    },
    {
      id: 6,
      name: "Alex Turner",
      company: "StartUpGrid",
      role: "CTO",
      content: "The web development service was exceptional. They built a scalable, fast, and secure platform that handles our growing user base perfectly. The code quality and documentation were outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Web Development",
      project: "SaaS Platform"
    },
    {
      id: 7,
      name: "Maria Garcia",
      company: "EduTech Solutions",
      role: "Operations Manager",
      content: "Goldenstar's SEO optimization service transformed our online visibility. We went from page 5 to top 3 positions for our main keywords. The results speak for themselves - 400% increase in organic traffic!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "SEO Optimization",
      project: "Educational Platform SEO"
    },
    {
      id: 8,
      name: "James Wilson",
      company: "RealEstate Pro",
      role: "Managing Director",
      content: "The custom software solution they developed streamlined our entire operation. What used to take hours now takes minutes. The team was professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      service: "Custom Software",
      project: "Real Estate Management System"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Industries Served" }
  ];

  return (
    <div className="testimonials-page">
      {/* Hero Section with Video Background */}
      <section className="testimonials-hero">
        <div className="hero-video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
            poster="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-happy-businessman-using-his-laptop-while-sitting-44535-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="container">
          <button onClick={() => navigate('/')} className="back-home-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>

          <div className="hero-content">
            <h1 className="hero-title">
              Success <span className="gold-text">Stories</span> That Inspire
            </h1>
            <p className="hero-subtitle">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results. 
              Our clients' satisfaction is our greatest achievement.
            </p>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="all-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real stories from real clients. Read about their experiences and the impact our services made on their businesses.
            </p>
          </div>

          <div className="testimonials-grid-full">
            {allTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card-full">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="testimonial-content-full">
                  <div className="testimonial-header-full">
                    <div className="client-info-full">
                      <h3 className="client-name-full">{testimonial.name}</h3>
                      <p className="client-company-full">{testimonial.company}</p>
                      <p className="client-role-full">{testimonial.role}</p>
                    </div>
                    <div className="rating-full">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star-full">★</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-info">
                    <span className="service-badge-full">{testimonial.service}</span>
                    <span className="project-name">Project: {testimonial.project}</span>
                  </div>

                  <blockquote className="testimonial-quote-full">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="testimonial-footer">
                    <div className="verified-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Verified Client
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Become Our Next Success Story?</h2>
            <p>Join hundreds of satisfied clients who have transformed their businesses with our expertise.</p>
            <div className="cta-buttons">
              <button 
                onClick={() => navigate('/#contact')}
                className="cta-btn primary"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="cta-btn secondary"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;