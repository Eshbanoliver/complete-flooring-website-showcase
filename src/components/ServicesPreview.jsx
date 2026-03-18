import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    { title: 'Wooden Laminates', img: '/images/laminate.png', desc: 'Durable and elegant wooden flooring for a classic look.' },
    { title: 'Wall to Wall Carpets', img: '/images/carpet.png', desc: 'Cozy and luxurious carpets for ultimate comfort.' },
    { title: 'Artificial Grass', img: '/images/grass.png', desc: 'Perfect green landscapes without the maintenance.' },
    { title: 'Louver Panels', img: '/images/louvers.png', desc: 'Modern LUARS panels for stylish wall treatments.' },
  ];

  return (
    <section className="services-preview-section section-padding">
      <div className="container">
        <div className="section-header">
          <h5 className="gradient-text subtitle">Top Offerings</h5>
          <h2 className="title">Premium <span className="gradient-text">Flooring</span> & Interior</h2>
          <p className="desc">Discover our range of professional flooring products designed to enhance any environment.</p>
        </div>

        <div className="services-preview-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="service-preview-card"
            >
              <div className="card-img-wrapper">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="card-content glass-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="learn-more">
                   Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="services-footer-cta">
          <Link to="/services" className="btn-primary">View All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
