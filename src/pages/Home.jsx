import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import KeyMetrics from '../components/KeyMetrics';
import ServicesPreview from '../components/ServicesPreview';
import CoreValues from '../components/CoreValues';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeFAQ from '../components/HomeFAQ';
import HomeCTA from '../components/HomeCTA';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, User, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Exceptional quality and service. Our living room looks absolutely stunning with the new wooden flooring. Highly recommend Complete Flooring!",
      name: "Mr. Rajesh Sharma",
      role: "Interior Designer, Jaipur",
      rating: 5
    },
    {
      quote: "The artificial grass installation on our balcony was flawless. It has completely transformed the vibe of our home. Fast and professional service.",
      name: "Mrs. Ananya Mehta",
      role: "Homeowner, Vaishali Nagar",
      rating: 5
    },
    {
      quote: "Complete Flooring exceeded our expectations with their premium carpet collection. The installation was quick and the quality is outstanding!",
      name: "Mr. Vikram Singh",
      role: "Business Owner, Malviya Nagar",
      rating: 5
    },
    {
      quote: "Professional team, excellent craftsmanship, and amazing attention to detail. Our new floors have completely elevated our office space.",
      name: "Ms. Priya Patel",
      role: "Architect, Civil Lines",
      rating: 5
    },
    {
      quote: "The wall-to-wall carpet installation was perfect. Great products, competitive pricing, and exceptional customer service throughout.",
      name: "Dr. Amit Kumar",
      role: "Homeowner, Mansarovar",
      rating: 5
    },
    {
      quote: "Innovative flooring solutions and expert guidance. They helped us choose the perfect flooring that matches our home's aesthetic beautifully.",
      name: "Mrs. Kavita Reddy",
      role: "Interior Designer, Raja Park",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
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
              <img src="/images/who-we-are.jpg" alt="Staircase Carpeting Showcase" className="main-img" />
              
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
          <div className="testimonials-slider">
            <div className="testimonial-track">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: index === currentTestimonialIndex ? 1 : 0,
                    x: index === currentTestimonialIndex ? 0 : 100,
                    scale: index === currentTestimonialIndex ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`testimonial-card glass-card ${index === currentTestimonialIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-header">
                    <div className="user-avatar">
                      <User size={24} />
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="star-filled" />
                      ))}
                    </div>
                  </div>
                  <p>"{testimonial.quote}"</p>
                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="testimonials-bottom">
            <Link to="/testimonials" className="btn-primary">Read All Testimonials</Link>
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
