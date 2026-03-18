import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import './KeyMetrics.css';

const KeyMetrics = () => {
  const metrics = [
    { id: 1, label: 'Projects Completed', value: '500+', icon: <Briefcase /> },
    { id: 2, label: 'Years of Experience', value: '12+', icon: <TrendingUp /> },
    { id: 3, label: 'Happy Clients', value: '450+', icon: <Users /> },
    { id: 4, label: 'Awards Winning', value: '15+', icon: <Award /> },
  ];

  return (
    <section className="metrics-section section-padding">
      <div className="container metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="metric-card-v2"
          >
            <div className="metric-icon">{metric.icon}</div>
            <h2 className="gradient-text">{metric.value}</h2>
            <p>{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyMetrics;
