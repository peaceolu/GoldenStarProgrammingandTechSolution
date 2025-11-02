import React from 'react';

const CustomMessage = () => {
  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    // Replace with your actual WhatsApp number (include country code, remove any spaces or special characters)
    const phoneNumber = '+2349035043293'; // Example: +1234567890
    // Optional: Pre-filled message
    const message = 'Hello! I would like to get more information about your services.';
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="custom-message bg-gray-900">
      <div className="container">
        <div className="custom-message-content">
          <h2 className="custom-message-title">
            Can't find what you're looking for?
          </h2>
          <p className="custom-message-text">
            Contact us — we'll tailor a custom solution just for you. Our team is ready to understand your unique requirements and deliver exactly what you need.
          </p>
          <button
            onClick={redirectToWhatsApp}
            className="cta-button"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomMessage;
