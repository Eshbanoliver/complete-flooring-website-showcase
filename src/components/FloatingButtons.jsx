import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappLink = "https://wa.me/919462670966";
  const callLink = "tel:+919462670966";

  return (
    <div className="floating-container">
      {/* Left side floating buttons */}
      <div className="left-floating">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="float-btn whatsapp-btn" title="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.256-.041.401.305.145.348.493 1.203.536 1.29.043.087.073.189.014.305-.058.117-.087.189-.174.29-.087.101-.182.225-.261.302-.087.085-.177.177-.077.348.099.172.446.735.96 1.192.663.593 1.22.776 1.396.863.175.088.277.073.376-.043s.435-.508.552-.682c.117-.174.232-.145.392-.087s1.015.478 1.189.565c.174.088.289.13.333.203.044.072.044.419-.101.823z"/></svg>
        </a>
        <a href={callLink} className="float-btn call-btn" title="Call Us">
          <Phone size={24} />
        </a>
      </div>

      {/* Right side floating button */}
      <div className={`right-floating ${showScroll ? 'visible' : ''}`}>
        <button className="float-btn scroll-btn" onClick={scrollToTop} title="Scroll to Top">
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
