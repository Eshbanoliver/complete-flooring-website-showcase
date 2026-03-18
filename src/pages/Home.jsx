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

      {/* About Section - Short Intro */}
      <section className="about-intro section-padding">
        <div className="container about-intro-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-intro-text"
          >
            <h5 className="gradient-text subtitle">Who We Are</h5>
            <h2 className="title">Crafting Beautiful <span className="gradient-text">Floors</span> with Precision</h2>
            <p className="desc">Complete Flooring Company is Jaipur's leading destination for premium flooring solutions. With over 12 years of expertise, we specialize in high-quality wooden laminates, designer carpets, and modern interior elements that transform ordinary spaces into extraordinary masterpieces.</p>
            <div className="about-intro-btns">
              <Link to="/about" className="btn-secondary learn-more-btn">
                 About Us <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-intro-img"
          >
            <div className="img-frame glass-card">
              <img src="/images/rug.png" alt="Flooring showcase" />
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
