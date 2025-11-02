import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showOrderModal, setShowOrderModal] = useState(false);

  const servicesData = {
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
    'ui-ux': {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Transform your digital presence with intuitive, beautiful designs that users love and that drive business results.",
      detailedDescription: "Our UI/UX design service focuses on creating digital experiences that are not only visually appealing but also highly functional and user-friendly. We conduct thorough user research, create detailed wireframes, and design interfaces that align with your brand while ensuring optimal user engagement and conversion rates.",
      price: "$299",
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
    'shopify': {
      id: 'shopify',
      title: "Shopify Marketing",
      description: "Maximize your Shopify store's potential with data-driven marketing strategies that boost sales and customer engagement.",
      detailedDescription: "Our Shopify marketing service is designed to help e-commerce businesses thrive in the competitive online marketplace. We implement comprehensive marketing strategies including SEO optimization, paid advertising, social media marketing, and conversion rate optimization to drive targeted traffic and increase your store's revenue.",
      price: "$350",
      image: "🛍️",
      features: [
        "Shopify SEO Optimization",
        "Google & Facebook Ads Management",
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
        "Sales Analytics & Reporting",
        "Customer Retention Strategies",
        "Abandoned Cart Recovery",
        "Product Listing Optimization",
        "Competitor Analysis"
      ],
      process: [
        "Store Audit & Analysis",
        "Strategy Development",
        "Implementation",
        "Monitoring & Optimization",
        "Performance Reporting"
      ],
      deliverables: [
        "Marketing Strategy Document",
        "Monthly Performance Reports",
        "Optimized Product Listings",
        "Ad Campaign Structures",
        "Analytics Dashboard"
      ],
      timeline: "Ongoing (Monthly)",
      category: "Marketing"
    },
    'digital-marketing': {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions that drive growth, increase visibility, and generate qualified leads.",
      detailedDescription: "Our digital marketing service provides end-to-end solutions to help your business succeed online. From content creation and social media management to paid advertising and analytics, we develop customized strategies that align with your business goals and deliver measurable results.",
      price: "$400",
      image: "📈",
      features: [
        "Content Strategy & Creation",
        "Social Media Management",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
        "Conversion Optimization",
        "Brand Awareness Campaigns",
        "Lead Generation Strategies",
        "ROI Analysis & Reporting"
      ],
      process: [
        "Goal Setting & Research",
        "Strategy Development",
        "Content Creation",
        "Campaign Execution",
        "Analysis & Optimization"
      ],
      deliverables: [
        "Comprehensive Marketing Plan",
        "Monthly Performance Reports",
        "Content Calendar",
        "Analytics Dashboard Access",
        "Optimization Recommendations"
      ],
      timeline: "Ongoing (Monthly)",
      category: "Marketing"
    },
    'web-development': {
      id: 'web-development',
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies to ensure speed, security, and scalability.",
      detailedDescription: "Our web development service creates powerful, responsive websites that provide exceptional user experiences across all devices. We use modern frameworks and best practices to ensure your website is fast, secure, and optimized for search engines while aligning perfectly with your business objectives.",
      price: "$599",
      image: "💻",
      features: [
        "Responsive Web Design",
        "Custom WordPress Development",
        "E-commerce Solutions",
        "SEO Optimization",
        "Fast Loading Speed",
        "Security Implementation",
        "Content Management System",
        "Website Maintenance",
        "Performance Monitoring",
        "Technical Support"
      ],
      process: [
        "Planning & Discovery",
        "Design & Development",
        "Testing & Quality Assurance",
        "Deployment",
        "Maintenance"
      ],
      deliverables: [
        "Fully Functional Website",
        "Source Code",
        "Documentation",
        "Training Materials",
        "Support & Maintenance"
      ],
      timeline: "3-5 weeks",
      category: "Development"
    },
    'branding': {
      id: 'branding',
      title: "Brand Design",
      description: "Complete branding solutions that establish your unique identity and make your business memorable.",
      detailedDescription: "Our brand design service helps businesses create a strong, cohesive identity that resonates with their target audience. From logo design to comprehensive brand guidelines, we ensure your brand tells a compelling story and stands out in the marketplace.",
      price: "$450",
      image: "✨",
      features: [
        "Logo Design & Variations",
        "Brand Identity Development",
        "Color Palette & Typography",
        "Brand Guidelines Document",
        "Marketing Materials Design",
        "Social Media Kit",
        "Brand Strategy Development",
        "Voice & Tone Guidelines",
        "Stationery Design",
        "Brand Application Examples"
      ],
      process: [
        "Brand Discovery",
        "Concept Development",
        "Design Creation",
        "Refinement",
        "Guidelines Development"
      ],
      deliverables: [
        "Logo Package (All Formats)",
        "Brand Guidelines PDF",
        "Social Media Kit",
        "Stationery Templates",
        "Marketing Material Templates"
      ],
      timeline: "3-4 weeks",
      category: "Design"
    }
  };

  const service = servicesData[serviceId];

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
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    alert(`Thank you for your order! We'll contact you soon about ${service.title}`);
    setShowOrderModal(false);
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
              Order Now - {service.price}
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
                <p><strong>{service.title}</strong> - {service.price}</p>
                <p>{service.description}</p>
              </div>
              <form onSubmit={handleSubmitOrder} className="order-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input type="text" id="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={handleCloseModal} className="btn-cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn-confirm-order">
                    Confirm Order - {service.price}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetailPage;