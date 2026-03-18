import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import KeyMetrics from '../components/KeyMetrics';
import ServicesPreview from '../components/ServicesPreview';
import MissionVision from '../components/MissionVision';
import CoreValues from '../components/CoreValues';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeFAQ from '../components/HomeFAQ';
import HomeCTA from '../components/HomeCTA';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* About Section - Creative Intro */}
      <section className="about-intro section-padding">
        <div className="container about-intro-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-intro-text"
          >
            <div className="section-badge">
                <span className="badge-dot"></span> Who We Are
            </div>
            <h2 className="title">Crafting Beautiful <span className="gradient-text">Floors</span> with Precision</h2>
            <p className="desc dec-text">
                Complete Flooring Company is Jaipur's leading destination for premium flooring solutions. We specialize in high-quality wooden laminates, designer carpets, and modern interior elements that transform ordinary spaces into extraordinary masterpieces.
            </p>
            
            <div className="experience-badge">
                <div className="exp-number gradient-text">12+</div>
                <div className="exp-text">Years of<br/>Expertise</div>
            </div>

            <div className="about-intro-btns">
              <Link to="/about" className="btn-primary creative-btn">
                 Explore Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-intro-img creative-img-wrapper"
          >
            <div className="img-frame creative-frame-v2">
              <img src="/images/rug.png" alt="Flooring showcase" className="main-img" />
              
              {/* Bulletproof Inline-Styled Card to defeat browser caching */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '16px 24px',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                zIndex: 100,
                border: '1px solid rgba(0,0,0,0.05)',
                width: 'fit-content'
              }}>
                 <div style={{
                   width: '45px',
                   height: '45px',
                   backgroundColor: 'rgba(128, 74, 138, 0.15)',
                   borderRadius: '50%',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   flexShrink: 0
                 }}>
                    <ShoppingBag size={20} color="#3A0353" />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ margin: '0 0 4px 0', color: '#1a0126', fontSize: '1.1rem', fontWeight: 700 }}>Premium Quality</h4>
                    <p style={{ margin: 0, color: 'gray', fontSize: '0.9rem' }}>Guaranteed Materials</p>
                 </div>
              </div>

              {/* Bulletproof Solid Border inline */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '-20px',
                width: '100%',
                height: '100%',
                border: '5px solid #3A0353',
                borderRadius: '30px',
                zIndex: -1,
                pointerEvents: 'none'
              }}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <KeyMetrics />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Core Values Section */}
      <CoreValues />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials (Short Preview Version) */}
      <section className="testimonials-preview section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="gradient-text subtitle">Testimonials</h5>
            <h2 className="title">What Our <span className="gradient-text">Clients</span> Say</h2>
          </div>
          <div className="testimonials-grid">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="testimonial-card glass-card"
            >
              <p>"Exceptional quality and service. Our living room looks совершенно wonderful with the new wooden flooring. Highly recommend Complete Flooring!"</p>
              <div className="client-info">
                <h4>Mr. Rajesh Sharma</h4>
                <p>Interior Designer, Jaipur</p>
              </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="testimonial-card glass-card"
            >
              <p>"The artificial grass installation on our balcony was flawless. It has completely changed the vibe of our home. Fast and professional."</p>
              <div className="client-info">
                <h4>Mrs. Ananya Mehta</h4>
                <p>Homeowner, Vaishali Nagar</p>
              </div>
            </motion.div>
          </div>
          <div className="testimonials-bottom">
            <Link to="/testimonials" className="btn-secondary">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
};

export default Home;
