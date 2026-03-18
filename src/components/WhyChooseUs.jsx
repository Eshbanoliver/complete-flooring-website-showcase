import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Clock, PhoneCall } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { text: 'Extensive Range of Modern Flooring', icon: <CheckCircle2 /> },
    { text: 'Expert Installation Team in Jaipur', icon: <Trophy /> },
    { text: 'Durable and Long-lasting Materials', icon: <Clock /> },
    { text: 'Personalized Customer Support', icon: <PhoneCall /> },
    { text: 'Competitive and Transparent Pricing', icon: <CheckCircle2 /> },
    { text: '12+ Years of Industry Experience', icon: <Trophy /> },
  ];

  return (
    <section className="why-us-section section-padding">
      <div className="container why-us-grid">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="why-us-content"
        >
          <h5 className="gradient-text subtitle">Better for your home</h5>
          <h2 className="title">Why Choose <span className="gradient-text">Complete Flooring</span>?</h2>
          <p className="desc">With over a decade of excellence in the furniture and flooring industry, we bring a level of expertise and quality control that is unmatched in the market.</p>
          
          <ul className="reasons-list">
            {reasons.map((r, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="check-icon">{r.icon}</div>
                <span>{r.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="why-us-image"
        >
          <div className="image-stack glass-card">
            <img src="/images/laminate.png" alt="Flooring installation" />
            <div className="experience-badge glass-card">
              <h1 className="gradient-text">12+</h1>
              <p>Years of <br /> Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
