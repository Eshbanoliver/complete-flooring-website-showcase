import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-top section-padding">
        <div className="container footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <img src="/images/logo.png" alt="Complete Flooring Company" style={{ height: '55px', width: 'auto' }} />
            </Link>
            <p className="footer-desc">Premium flooring solutions for your dream spaces. We provide high-quality flooring services across Jaipur and beyond.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/completeflooringcompany/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
              <li><Link to="/services"><ChevronRight size={16} /> Products</Link></li>
              <li><Link to="/testimonials"><ChevronRight size={16} /> Testimonials</Link></li>
              <li><Link to="/contact"><ChevronRight size={16} /> Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>Floor No.: B-67, Kirti Nagar, Tonk Road, Jaipur</span>
              </li>
              <li>
                <Phone size={20} className="contact-icon" />
                <a href="tel:+919462670966">+91 9462670966</a>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <a href="mailto:completeflooringcompany@gmail.com">completeflooringcompany@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            ©️ Copyright 2026 | <Link to="/" className="footer-copyright-link">Complete Flooring Company</Link> | All Rights Reserved | Powered by{' '}
            <a href="https://shapesway.in" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 600 }}>
              Shapesway Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
