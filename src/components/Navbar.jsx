import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Youtube, Instagram, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="mailto:completeflooringcompany@gmail.com" className="top-info">
              <Mail size={16} />
              <span>completeflooringcompany@gmail.com</span>
            </a>
            <a href="tel:+919462670966" className="top-info">
              <Phone size={16} />
              <span>(+91) 9462670966</span>
            </a>
          </div>
          <div className="top-bar-right">
            <div className="social-links">
              <a href="https://www.instagram.com/completeflooringcompany/" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <nav className="main-nav">
        <div className="main-nav-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="Complete Flooring Company" />
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href="/contact" className="get-quote-btn">
              Get a Quote
            </a>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <a href="/contact" className="mobile-cta-btn">
             Get a Quote
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
