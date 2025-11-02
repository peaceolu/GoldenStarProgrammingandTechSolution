import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechInnovate Inc.",
      role: "CEO",
      content: "Goldenstar developed our mobile app and the results exceeded our expectations. The team was professional, met all deadlines, and delivered a high-quality product that our users love.",
      rating: 5,
      image: "👩‍💼",
      service: "Mobile App Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StyleHub Fashion",
      role: "Marketing Director",
      content: "Their Shopify marketing services transformed our e-commerce store. Our sales increased by 150% in just 3 months. Highly recommended for any business looking to grow online.",
      rating: 5,
      image: "👨‍💼",
      service: "Shopify Marketing"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "HealthPlus App",
      role: "Product Manager",
      content: "The UI/UX design work was exceptional. They understood our vision and created an intuitive interface that our patients find easy to use. Great communication throughout the project.",
      rating: 5,
      image: "👩‍⚕️",
      service: "UI/UX Design"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FinanceFlow",
      role: "Founder",
      content: "Outstanding digital marketing strategy! Goldenstar helped us reach our target audience effectively. Their data-driven approach delivered measurable results from day one.",
      rating: 5,
      image: "👨‍💻",
      service: "Digital Marketing"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Creative Studio",
      role: "Creative Director",
      content: "Working with Goldenstar was a game-changer. Their attention to detail and creative solutions helped us stand out in a crowded market. Truly exceptional service!",
      rating: 5,
      image: "👩‍🎨",
      service: "Brand Design"
    }
  ];

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentTestimonial ? 'next' : 'prev');
    setCurrentTestimonial(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, isAutoPlaying]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            <span className="title-underline">Trusted by</span> Amazing Clients
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="testimonials-carousel">
          <div className="carousel-container">
            <div 
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${
                    index === currentTestimonial ? 'active' : ''
                  } ${direction}`}
                >
                  <div className="testimonial-card">
                    <div className="floating-shapes">
                      <div className="shape shape-1"></div>
                      <div className="shape shape-2"></div>
                      <div className="shape shape-3"></div>
                    </div>
                    
                    <div className="testimonial-quote-icon">❝</div>
                    
                    <div className="testimonial-content-wrapper">
                      <div className="testimonial-header">
                        <div className="client-avatar-glow">
                          <div className="client-avatar">
                            {testimonial.image}
                          </div>
                          <div className="avatar-glow"></div>
                        </div>
                        <div className="client-info">
                          <h3 className="client-name">{testimonial.name}</h3>
                          <p className="client-company">{testimonial.company}</p>
                          <p className="client-role">{testimonial.role}</p>
                          <span className="service-badge">{testimonial.service}</span>
                        </div>
                      </div>

                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>

                      <blockquote className="testimonial-content">
                        {testimonial.content}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonial-controls">
            <button 
              className="testimonial-nav-btn prev-btn"
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="testimonial-pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className="dot-progress"></div>
                </button>
              ))}
            </div>

            <button 
              className="testimonial-nav-btn next-btn"
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid for Desktop */}
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-grid-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-glow"></div>
              <div className="grid-card-content">
                <div className="grid-card-header">
                  <div className="client-avatar-small">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="client-name-small">{testimonial.name}</h4>
                    <p className="client-company-small">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="testimonial-rating-small">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star-small">★</span>
                  ))}
                </div>

                <p className="testimonial-content-small">
                  "{testimonial.content}"
                </p>
                
                <div className="service-tag">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;