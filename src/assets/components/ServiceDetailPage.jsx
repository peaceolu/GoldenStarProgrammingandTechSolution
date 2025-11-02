import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesData = {
    // ... your existing services data remains the same
    'mobile-app': {
      id: 'mobile-app',
      title: "Mobile App Development",
      description: "We create stunning, high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      detailedDescription: "Our mobile app development service combines cutting-edge technology with user-centered design to create applications that not only look great but also perform flawlessly. We specialize in cross-platform development using React Native and Flutter, ensuring your app reaches the widest possible audience while maintaining native-like performance.",
      price: "$499",
      image: "📱",
      features: [
        "Cross-platform Development (iOS & Android)",
        "Custom UI/UX Design",
        "App Store & Play Store Deployment",
        "API Integration & Backend Development",
        "Push Notifications",
        "In-app Purchases & Payment Gateway",
        "Real-time Features",
        "3 Months Free Maintenance",
        "Performance Optimization",
        "Security Implementation"
      ],
      process: [
        "Discovery & Planning",
        "UI/UX Design",
        "Development & Testing",
        "Deployment",
        "Maintenance & Support"
      ],
      deliverables: [
        "Source Code",
        "Design Files",
        "Documentation",
        "App Store Ready Package",
        "Support Documentation"
      ],
      timeline: "4-6 weeks",
      category: "Development"
    },
    // ... other services
  };

  const budgetOptions = [
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' },
    { value: 'custom', label: 'Custom Budget' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'standard', label: 'Standard (3-4 weeks)' },
    { value: 'flexible', label: 'Flexible (1-2 months)' },
    { value: 'long-term', label: 'Long Term (3+ months)' }
  ];

  const service = servicesData[serviceId];

  useEffect(() => {
    if (showOrderModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showOrderModal]);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <button onClick={() => navigate('/services')} className="back-to-services">
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const handleOrderNow = () => {
    setShowOrderModal(true);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setCurrentStep(1);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend
    console.log('Order submitted:', { service, formData });
    
    // Show success message
    alert(`🎉 Thank you for your order! We'll contact you within 24 hours about ${service.title}`);
    
    setIsSubmitting(false);
    setShowOrderModal(false);
    setCurrentStep(1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.budget && formData.timeline;
      case 3:
        return formData.message;
      default:
        return false;
    }
  };

  return (
    <section className="service-detail-page">
      <div className="container">
        <button onClick={() => navigate('/services')} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Services
        </button>

        <div className="service-detail-header">
          <div className="service-hero">
            <div className="service-hero-icon">
              {service.image}
            </div>
            <div className="service-hero-content">
              <h1 className="service-detail-title">{service.title}</h1>
              <p className="service-detail-description">{service.description}</p>
              <div className="service-price-timeline">
                <span className="service-detail-price">{service.price}</span>
                <span className="service-timeline">• {service.timeline}</span>
              </div>
              <button onClick={handleOrderNow} className="order-now-btn-large">
                <span>Order Now</span>
                <div className="btn-sparkle"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Rest of your service detail content remains the same */}
        <div className="service-detail-content">
          {/* ... existing content ... */}
        </div>
      </div>

      {/* Modern Order Modal */}
      {showOrderModal && (
        <div className="modern-modal-overlay">
          <div className="modern-modal-container">
            <div className="modern-modal">
              {/* Animated Background */}
              <div className="modal-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
              </div>

              {/* Modal Header */}
              <div className="modern-modal-header">
                <div className="modal-service-badge">
                  <span className="service-icon">{service.image}</span>
                  <div>
                    <h3 className="modal-title">{service.title}</h3>
                    <p className="modal-price">{service.price}</p>
                  </div>
                </div>
                <button onClick={handleCloseModal} className="modern-close-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="progress-steps">
                {[1, 2, 3].map((step) => (
                  <div key={step} className={`step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}>
                    <div className="step-circle">
                      {step < currentStep ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span className="step-label">
                      {step === 1 && 'Contact Info'}
                      {step === 2 && 'Project Details'}
                      {step === 3 && 'Requirements'}
                    </span>
                  </div>
                ))}
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Multi-step Form */}
              <form onSubmit={handleSubmitOrder} className="modern-order-form">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="form-step active">
                    <div className="step-header">
                      <h4>Contact Information</h4>
                      <p>Let us know how to reach you</p>
                    </div>
                    
                    <div className="form-grid">
                      <div className="form-group-modern">
                        <label className="floating-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="modern-input"
                          required
                        />
                        <div className="input-underline"></div>
                      </div>

                      <div className="form-group-modern">
                        <label className="floating-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="modern-input"
                          required
                        />
                        <div className="input-underline"></div>
                      </div>

                      <div className="form-group-modern">
                        <label className="floating-label">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="modern-input"
                          required
                        />
                        <div className="input-underline"></div>
                      </div>

                      <div className="form-group-modern">
                        <label className="floating-label">Company (Optional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="modern-input"
                        />
                        <div className="input-underline"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="form-step active">
                    <div className="step-header">
                      <h4>Project Details</h4>
                      <p>Help us understand your project needs</p>
                    </div>

                    <div className="form-grid">
                      <div className="form-group-modern">
                        <label className="floating-label">Project Budget *</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="modern-select"
                          required
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="select-arrow">▼</div>
                      </div>

                      <div className="form-group-modern">
                        <label className="floating-label">Timeline *</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="modern-select"
                          required
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="select-arrow">▼</div>
                      </div>
                    </div>

                    <div className="budget-cards">
                      <div className="budget-card">
                        <div className="budget-icon">💰</div>
                        <h5>Transparent Pricing</h5>
                        <p>No hidden fees. What you see is what you pay.</p>
                      </div>
                      <div className="budget-card">
                        <div className="budget-icon">⚡</div>
                        <h5>Fast Delivery</h5>
                        <p>We respect deadlines and deliver on time.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Requirements */}
                {currentStep === 3 && (
                  <div className="form-step active">
                    <div className="step-header">
                      <h4>Project Requirements</h4>
                      <p>Tell us more about your project</p>
                    </div>

                    <div className="form-group-modern full-width">
                      <label className="floating-label">Project Description *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="modern-textarea"
                        rows="6"
                        placeholder="Describe your project goals, target audience, specific features you need, and any other relevant details..."
                        required
                      ></textarea>
                      <div className="textarea-underline"></div>
                    </div>

                    <div className="features-preview">
                      <h5>What you'll get with {service.title}:</h5>
                      <div className="features-grid-mini">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="feature-mini">
                            <span className="feature-check">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation */}
                <div className="form-navigation">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="nav-btn prev-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Back
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`nav-btn next-btn ${!isStepValid() ? 'disabled' : ''}`}
                    >
                      Continue
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      disabled={!isStepValid() || isSubmitting}
                      className={`nav-btn submit-btn ${isSubmitting ? 'submitting' : ''} ${!isStepValid() ? 'disabled' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="submit-spinner"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Order - {service.price}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>

              {/* Quick Contact */}
              <div className="quick-contact">
                <p>Need immediate assistance?</p>
                <div className="contact-buttons">
                  <a href={`https://wa.me/2349012345678`} className="whatsapp-quick-btn">
                    💬 WhatsApp
                  </a>
                  <a href="tel:+2349012345678" className="call-quick-btn">
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetailPage;