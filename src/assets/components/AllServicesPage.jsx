import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllServicesPage = () => {
  const navigate = useNavigate();

  const allServices = [
    {
      id: 'mobile-app',
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android using React Native and Flutter. We create performant, user-friendly apps that drive engagement.",
      price: "$499",
      image: "📱",
      features: ["Cross-platform Development", "UI/UX Design", "App Store Deployment", "3 Months Support", "API Integration"],
      category: "Development",
      icon: "📱"
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive conversions. We focus on both aesthetics and functionality.",
      price: "$299",
      image: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Design System", "Responsive Design"],
      category: "Design",
      icon: "🎨"
    },
    {
      id: 'shopify',
      title: "Shopify Marketing",
      description: "Boost your Shopify store's visibility and sales with comprehensive marketing strategies including SEO, PPC, and social media marketing.",
      price: "$350",
      image: "🛍️",
      features: ["SEO Optimization", "PPC Management", "Social Media Ads", "Sales Analytics", "Conversion Optimization"],
      category: "Marketing",
      icon: "🛍️"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "End-to-end digital marketing solutions to grow your online presence, increase traffic, and generate qualified leads for your business.",
      price: "$400",
      image: "📈",
      features: ["Content Strategy", "Social Media Marketing", "Email Marketing", "Performance Tracking", "ROI Analysis"],
      category: "Marketing",
      icon: "📈"
    },
    {
      id: 'web-development',
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices for optimal performance and user experience.",
      price: "$599",
      image: "💻",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Security", "Maintenance"],
      category: "Development",
      icon: "💻"
    },
    {
      id: 'branding',
      title: "Brand Design",
      description: "Complete branding solutions that make your business stand out and create a memorable identity in the market.",
      price: "$450",
      image: "✨",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Social Media Kit", "Brand Strategy"],
      category: "Design",
      icon: "✨"
    },
    {
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment integration and inventory management systems.",
      price: "$699",
      image: "🛒",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Processing", "Analytics"],
      category: "Development",
      icon: "🛒"
    },
    {
      id: 'seo',
      title: "SEO Optimization",
      description: "Improve your website's visibility on search engines and drive organic traffic with our proven SEO strategies.",
      price: "$299",
      image: "🔍",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy", "Rank Tracking"],
      category: "Marketing",
      icon: "🔍"
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <section className="all-services-page">
      <div className="container">
        <button onClick={handleBackToHome} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </button>

        <div className="services-page-header">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Explore our comprehensive range of digital solutions designed to elevate your business to new heights
          </p>
        </div>

        {/* Services by Category */}
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="services-category-section">
            <h2 className="category-title">{category} Services</h2>
            <div className="all-services-grid">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="service-card-expanded"
                  onClick={() => handleServiceClick(service.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-card-header">
                    <div className="service-icon-large">
                      {service.icon}
                    </div>
                    <div className="service-basic-info">
                      <h3 className="service-title-large">{service.title}</h3>
                      <span className="service-price-large">{service.price}</span>
                    </div>
                  </div>
                  
                  <p className="service-description-large">
                    {service.description}
                  </p>

                  <div className="service-features-preview">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="feature-tag-more">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="service-card-footer">
                    <span className="service-category">{service.category}</span>
                    <button className="learn-more-btn">
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="services-cta-section">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and let's discuss how we can help your business grow.</p>
          <button 
            onClick={() => navigate('/#contact')} 
            className="cta-contact-btn"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllServicesPage;