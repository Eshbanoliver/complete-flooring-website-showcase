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
    { title: 'Excellence', icon: <Layout />, desc: 'Setting the highest standards in flooring craftsmanship.' },
    { title: 'Reliability', icon: <RefreshCw />, desc: 'Consistent service and timely project delivery.' },
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
               initial={{ opacity: 0, y: 50, rotateX: -15 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ 
                 delay: i * 0.15, 
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100,
                 damping: 20
               }}
               viewport={{ once: true, margin: "-100px" }}
               whileHover={{ 
                 y: -20,
                 scale: 1.02,
                 transition: { duration: 0.3 }
               }}
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
