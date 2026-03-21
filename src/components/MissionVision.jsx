import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section section-padding">
      <div className="container mission-vision-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mission-vision-card-v2"
        >
          <div className="card-bg-glow"></div>
          <div className="mv-icon-v2"><Target size={32} /></div>
          <h2>Our Mission</h2>
          <p>To provide high-quality flooring solutions that combine aesthetics, durability, and innovation, creating beautiful spaces one floor at a time. We strive to offer our clients top-tier materials and exceptional service that exceed expectations in every project.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mission-vision-card-v2"
        >
          <div className="card-bg-glow"></div>
          <div className="mv-icon-v2"><Eye size={32} /></div>
          <h2>Our Vision</h2>
          <p>To be the most trusted and preferred flooring partner in India, recognized for our commitment to quality, integrity, and customer satisfaction. We aim to revolutionize the flooring industry with modern designs and sustainable practices.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
