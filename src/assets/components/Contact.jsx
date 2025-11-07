import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Your EmailJS credentials - REPLACE WITH YOUR ACTUAL KEYS!
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_crtiwpo', // From EmailJS dashboard
    TEMPLATE_ID: 'template_ea84y2d', // From EmailJS dashboard  
    PUBLIC_KEY: 'sggP_OsinNL1mxXUD' // From EmailJS dashboard
  };

  const whatsappNumbers = [
    '447387695524',
  ];

  const services = [
    'Mobile App Development',
    'UI/UX Design',
    'Shopify Marketing',
    'Digital Marketing',
    'Web Development',
    'Brand Design',
    'E-commerce Solutions',
    'SEO Optimization',
    'Other'
  ];

  const budgetRanges = [
    '$100 - $500',
    '$500 - $1000',
    '$1000 - $5000',
    '$5000+',
    'Not sure'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          budget: formData.budget || 'Not specified',
          message: formData.message,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      // Success
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        budget: '', 
        message: '' 
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid
  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to start your project? Fill out the form and we'll get back to you via email!
        </p>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="alert alert-success">
            ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="alert alert-error">
            ❌ Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp.
          </div>
        )}

        <div className="contact-grid">
          {/* Contact Methods */}
          <div className="contact-methods">
            <h3 className="contact-methods-title">Quick Connect</h3>
            
            <div className="contact-links">
              {/* WhatsApp Number */}
              <a
                href={`https://wa.me/${whatsappNumbers[0].replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link whatsapp-link"
              >
                <div className="contact-icon whatsapp-icon">
                  💬
                </div>
                <div className="contact-link-info">
                  <h4 className="contact-link-title">WhatsApp</h4>
                  <p className="contact-link-desc">{whatsappNumbers[0]}</p>
                  <p className="contact-link-sub">Primary contact</p>
                </div>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:goldenstartech@gmail.com"
                className="contact-link email-link"
              >
                <div className="contact-icon email-icon">
                  ✉️
                </div>
                <div className="contact-link-info">
                  <h4 className="contact-link-title">Email Us</h4>
                  <p className="contact-link-desc">goldenstartech@gmail.com</p>
                  <p className="contact-link-sub">Direct email</p>
                </div>
              </a>
            </div>

            <div className="contact-benefits">
              <h4 className="benefits-title">Why Contact Us?</h4>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Instant response via WhatsApp
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Free project consultation
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Detailed project proposal
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Fast project turnaround
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Professional team support
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  Quality guaranteed work
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="contact-form-container">
            <h3 className="contact-form-title">Project Enquiry Form</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 234 567 8900"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget" className="form-label">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-textarea"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`submit-btn ${isFormValid && !isSubmitting ? 'submit-btn-active' : 'submit-btn-disabled'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="email-icon-svg">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="form-note">
                * Required fields. We'll respond to your email within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;