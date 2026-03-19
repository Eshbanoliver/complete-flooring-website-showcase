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
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.971c0 2.112.552 4.175 1.598 6.026L0 24l6.148-1.613a11.774 11.774 0 005.9 1.594h.005c6.605 0 11.97-5.364 11.973-11.972a11.85 11.85 0 00-3.413-8.304" />
          </svg>
        </a>
        <a href={callLink} className="float-btn call-btn" title="Call Us">
          <Phone size={30} />
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
