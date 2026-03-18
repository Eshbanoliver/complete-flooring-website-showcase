import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Star, Layout, RefreshCw } from 'lucide-react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    { title: 'Integrity', icon: <ShieldCheck />, desc: 'We build relationships based on trust and transparency.' },
    { title: 'Quality', icon: <Star />, desc: 'Superior materials that stand the test of time.' },
    { title: 'Innovation', icon: <Zap />, desc: 'Modern designs and advanced installation techniques.' },
    { title: 'Passion', icon: <Heart />, desc: 'Dedicated to bringing your floor visions to life.' },
  ];

  return (
    <section className="core-values-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Our <span className="gradient-text">Core Values</span></h2>
          <p className="desc">The principles that guide every project we undertake.</p>
        </div>

        <div className="core-values-grid">
          {values.map((v, i) => (
            <motion.div 
               key={v.title}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               viewport={{ once: true }}
               className="value-card glass-card"
            >
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
