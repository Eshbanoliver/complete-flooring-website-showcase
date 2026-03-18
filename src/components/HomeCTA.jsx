import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import './HomeCTA.css';

const HomeCTA = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-card glass-card"
        >
          {/* Floating Particles */}
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          
          <div className="cta-content">
            <h2 className="title">Ready to Transform Your <span className="gradient-text">Floors</span>?</h2>
            <p className="desc">Get in touch with us today for a free consultation and quote. Experience the best flooring services in Jaipur.</p>
            
            <div className="cta-actions">
              <a href="tel:+919462670966" className="btn-primary cta-btn primary">
                <Phone size={18} /> Call us Now
              </a>
              <a href="https://wa.me/919462670966" target="_blank" rel="noopener noreferrer" className="btn-secondary cta-btn whatsapp-cta">
                <MessageCircle size={18} /> WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
