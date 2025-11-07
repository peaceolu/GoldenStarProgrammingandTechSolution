import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const servicesData = {
    'mobile-app': {
      id: 'mobile-app',
      title: "Mobile App Development",
      description: "We create stunning, high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      detailedDescription: "Our mobile app development service combines cutting-edge technology with user-centered design to create applications that not only look great but also perform flawlessly. We specialize in cross-platform development using React Native and Flutter, ensuring your app reaches the widest possible audience while maintaining native-like performance.",
      price: 499, // Changed from "$499" to 499
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
    'ui-ux': {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Transform your digital presence with intuitive, beautiful designs that users love and that drive business results.",
      detailedDescription: "Our UI/UX design service focuses on creating digital experiences that are not only visually appealing but also highly functional and user-friendly. We conduct thorough user research, create detailed wireframes, and design interfaces that align with your brand while ensuring optimal user engagement and conversion rates.",
      price: 299, // Changed from "$299" to 299
      image: "🎨",
      features: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Interactive Prototypes",
        "User Testing & Validation",
        "Responsive Design",
        "Design Handoff",
        "Style Guide Creation",
        "Usability Optimization"
      ],
      process: [
        "Research & Discovery",
        "Wireframing",
        "Visual Design",
        "Prototyping",
        "Testing & Iteration"
      ],
      deliverables: [
        "High-fidelity Mockups",
        "Interactive Prototype",
        "Design System",
        "Style Guide",
        "Assets Package"
      ],
      timeline: "2-3 weeks",
      category: "Design"
    },
    // ... keep your other services with price as number instead of string
  };

  const service = servicesData[serviceId];

  // Paystack payment function
  const handleProceedToPayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.message) {
      alert('Please fill in all required fields: Name, Email, and Project Details');
      return;
    }

    setIsLoading(true);
    
    try {
      // Call our Vercel serverless function
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: customerInfo.email,
          amount: service.price, // Now using the number directly
          serviceName: service.title,
          customerName: customerInfo.name,
          projectDetails: customerInfo.message
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      // Open Paystack payment in new tab
      const paymentWindow = window.open(data.authorizationUrl, '_blank');
      
      if (!paymentWindow) {
        alert('Popup blocked! Please allow popups for this site to complete payment.');
        return;
      }

      // Check when payment window closes
      const checkWindow = setInterval(() => {
        if (paymentWindow.closed) {
          clearInterval(checkWindow);
          alert('Thank you for your order! We will contact you shortly.');
          setShowOrderModal(false);
          // Reset form
          setCustomerInfo({
            name: '',
            email: '',
            company: '',
            message: ''
          });
        }
      }, 1000);
      
    } catch (error) {
      console.error('Payment initialization error:', error);
      alert('Failed to initialize payment: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOrderNow = () => {
    setShowOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    // Reset form when closing modal
    setCustomerInfo({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

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
                <span className="service-detail-price">${service.price}</span>
                <span className="service-timeline">• {service.timeline}</span>
              </div>
              <button onClick={handleOrderNow} className="order-now-btn-large">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="service-detail-content">
          <div className="detail-section">
            <h2>About This Service</h2>
            <p className="detailed-description">{service.detailedDescription}</p>
          </div>

          <div className="detail-section">
            <h2>What's Included</h2>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-sections-grid">
            <div className="detail-section">
              <h2>Our Process</h2>
              <ol className="process-list">
                {service.process.map((step, index) => (
                  <li key={index} className="process-step">
                    <span className="step-number">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="detail-section">
              <h2>Deliverables</h2>
              <ul className="deliverables-list">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="deliverable-item">
                    <span className="deliverable-icon">📦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Let's bring your vision to life with our professional {service.title} service.</p>
            <button onClick={handleOrderNow} className="order-now-btn-bottom">
              Order Now - ${service.price}
            </button>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="modal-overlay">
          <div className="order-modal">
            <div className="modal-header">
              <h3>Order {service.title}</h3>
              <button onClick={handleCloseModal} className="close-modal">×</button>
            </div>
            <div className="modal-content">
              <div className="order-summary">
                <h4>Service Summary</h4>
                <p><strong>{service.title}</strong> - ${service.price}</p>
                <p>{service.description}</p>
              </div>
              <div className="order-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={customerInfo.name}
                    onChange={(e) => handleCustomerInfoChange('name', e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={customerInfo.email}
                    onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={customerInfo.company}
                    onChange={(e) => handleCustomerInfoChange('company', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={customerInfo.message}
                    onChange={(e) => handleCustomerInfoChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={handleCloseModal} className="btn-cancel">
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    onClick={handleProceedToPayment} 
                    disabled={isLoading}
                    className="btn-confirm-order"
                  >
                    {isLoading ? 'Processing...' : `Proceed to Payment - $${service.price}`}
                  </button>
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