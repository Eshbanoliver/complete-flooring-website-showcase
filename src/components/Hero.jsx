import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hero-text"
        >
          <h5 className="hero-subtitle">Transforming Your Floors into Art</h5>
          <h1 className="hero-title">Experience the Finest <span className="gradient-text">Flooring Solutions</span> in Jaipur</h1>
          <p className="hero-description">Elevate your home and commercial spaces with our premium collection of wooden laminates, carpets, and more. Quality that speaks for itself.</p>
          
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">
              <ShoppingBag size={20} />
              <span>Explore Products</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              <span>Get a Free Quote</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
