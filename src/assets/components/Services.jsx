import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android using React Native and Flutter. We create performant, user-friendly apps that drive engagement.",
      price: "$499",
      features: ["Cross-platform", "UI/UX Design", "App Store Deployment", "3 Months Support"],
      serviceId: "mobile-app"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive conversions. We focus on both aesthetics and functionality.",
      price: "$299",
      features: ["Wireframing", "Prototyping", "User Testing", "Design System"],
      serviceId: "ui-ux"
    },
    {
      id: 3,
      title: "Shopify Marketing",
      description: "Boost your Shopify store's visibility and sales with our comprehensive marketing strategies including SEO, PPC, and social media marketing.",
      price: "$350",
      features: ["SEO Optimization", "PPC Management", "Social Media Ads", "Sales Analytics"],
      serviceId: "shopify"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "End-to-end digital marketing solutions to grow your online presence, increase traffic, and generate qualified leads for your business.",
      price: "$400",
      features: ["Content Strategy", "Social Media", "Email Marketing", "Performance Tracking"],
      serviceId: "digital-marketing"
    }
  ];

 

  const handleLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const handleSeeMoreServices = () => {
    navigate('/services');
  };

  const handlePayment = () => {
    alert(`Redirecting to payment for ${selectedService.title} - ${selectedService.price}`);
    setShowPaymentModal(false);
  };

  return (
    <section id="services" className="section bg-gray-900">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional tech solutions tailored to your business needs. Quality guaranteed.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-price">{service.price}</div>

              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="service-buttons">
              
                <button
                  onClick={() => handleLearnMore(service.serviceId)}
                  className="btn-secondary"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Services Button */}
        <div className="see-more-services-container">
          <button onClick={handleSeeMoreServices} className="see-more-services-btn">
            Explore All Services
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="btn-arrow">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedService && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-title">Complete Your Purchase</h3>
              <div className="modal-service-info">
                <p className="modal-service-name">{selectedService.title}</p>
                <p className="modal-service-description">{selectedService.description}</p>
                <p className="modal-service-price">{selectedService.price}</p>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="form-input"
                />
              </div>

              <div className="modal-buttons">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  className="btn-pay"
                >
                  Pay {selectedService.price}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;