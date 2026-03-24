import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/images/hero-grass.jpg',
    title: 'Lush <span class="gradient-text">Artificial Grass</span> for Every Space',
    subtitle: 'Evergreen Outdoor Perfection',
    description: 'Transform your terrace or lawn with our premium, maintenance-free artificial turf that stays green all year round.'
  },
  {
    image: '/images/hero-carpet-pattern.jpg',
    title: 'Luxury <span class="gradient-text">Patterned Carpets</span> & Rugs',
    subtitle: 'Sophistication Underfoot',
    description: 'Elevate your living spaces with our exquisite range of designer carpets featuring timeless patterns and superior comfort.'
  },
  {
    image: '/images/hero-multiple-rugs.png',
    title: 'Diverse <span class="gradient-text">Rug Collections</span> & Office Solutions',
    subtitle: 'Professional & Durable',
    description: 'Explore our vast gallery of premium rugs and carpet tiles, featuring a wide array of patterns, textures, and styles for any space.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="hero-slide-bg"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="hero-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container hero-content">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="hero-subtitle">{slides[currentSlide].subtitle}</h5>
            </motion.div>
            
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}></h1>
            <p className="hero-description">{slides[currentSlide].description}</p>
            
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
        </AnimatePresence>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
