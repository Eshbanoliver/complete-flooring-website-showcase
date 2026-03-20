import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HomeCTA from '../components/HomeCTA';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const products = [
    { 
      title: 'Wooden Laminates', 
      img: '/images/laminate.png', 
      desc: 'Durable and elegant wooden flooring for a classic, sophisticated look. Resistance to scratches and moisture.',
    },
    { 
      title: 'Wall to Wall Carpets', 
      img: '/images/carpet.png', 
      desc: 'Cozy and luxurious carpets for ultimate comfort and acoustic performance in homes and corporate offices.',
    },
    { 
      title: 'Commercial Carpets', 
      img: '/images/hero-office.jpg', 
      desc: 'High-performance carpeting designed to withstand heavy foot traffic while maintaining a professional office vibe.',
    },
    { 
      title: 'Artificial Grass', 
      img: '/images/grass.png', 
      desc: 'Lush, maintenance-free artificial turf that stays green all year round. Perfect for rooftops and balconies.',
    },
    { 
      title: 'Area Rugs & Designer Rugs', 
      img: '/images/rug.png', 
      desc: 'Handpicked decorative rugs featuring traditional craftsmanship and modern minimalist patterns.',
    },
    { 
      title: 'Designer Wallpaper', 
      img: '/images/wallpaper.png', 
      desc: 'Transform your walls with high-quality textured, metallic, and patterned wallpapers for any interior.',
    },
    { 
      title: 'Louver Panels (LUARS)', 
      img: '/images/louvers.png', 
      desc: 'Modern LUARS panels for stylish wall treatments that add architectural depth and elegance to your room.',
    },
    { 
      title: 'Staircase Carpeting', 
      img: '/images/who-we-are.jpg', 
      desc: 'Professional installation of durable carpets on staircases, providing safety and a premium look for your home.',
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero hero-subpage">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h5 className="gradient-text subtitle">Our Products</h5>
            <h1 className="hero-title">Premium <span className="gradient-text">Flooring</span> Solutions</h1>
            <p className="hero-description">
              COMPLETE FLOORING COMPANY is your trusted Flooring Dealer and Carpet Dealer in Jaipur. We offer stylish and durable flooring solutions that add comfort, beauty, and style to your space.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="products-grid-section section-padding">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div 
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="product-card"
                onClick={() => navigate('/contact')}
              >
                <img src={product.img} alt={product.title} className="product-bg-img" />
                <div className="product-overlay"></div>
                <div className="product-info-card">
                   <h2 className="gradient-text">{product.title}</h2>
                   <p>{product.desc}</p>
                   <Link to="/contact" className="product-learn-more">
                     <span>Contact Us</span>
                     <ArrowRight size={18} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <HomeCTA />
    </div>
  );
};

export default Services;
