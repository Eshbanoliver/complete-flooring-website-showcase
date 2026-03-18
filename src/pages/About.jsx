import React from 'react';
import { motion } from 'framer-motion';
import MissionVision from '../components/MissionVision';
import CoreValues from '../components/CoreValues';
import WhyChooseUs from '../components/WhyChooseUs';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero hero-subpage">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h5 className="gradient-text subtitle">Our Story</h5>
            <h1 className="hero-title">Beyond <span className="gradient-text">Floors</span></h1>
            <p className="hero-description">We are more than just a flooring company; we are your partners in creating spaces that inspire and delight. Discover our journey and Commitment to Excellence in Jaipur.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-details section-padding">
        <div className="container about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="glass-card img-frame">
              <img src="/images/carpet.png" alt="Flooring details" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="title">Jaipur's Trusted Flooring <span className="gradient-text">Partner</span> Since 2012</h2>
            <p className="desc">Established with a vision to revolutionize the flooring industry in Jaipur, Complete Flooring Company has grown from a small family business to a respected regional leader in premium flooring solutions. We understand that a floor is the foundation of any room's design and functionality.</p>
            <p className="desc">Our team combines deep technical knowledge with an artistic eye for interior design, ensuring that every piece of laminate, carpet, or artificial grass is perfectly chosen and expertly installed. We pride ourselves on our meticulous attention to detail and our unwavering commitment to customer satisfaction.</p>
          </motion.div>
        </div>
      </section>

      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
    </div>
  );
};

export default About;
