import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import HomeCTA from '../components/HomeCTA';
import './Services.css';

const Services = () => {
  const products = [
    { 
      title: 'Wooden Laminates Flooring', 
      img: '/images/laminate.png', 
      desc: 'Expertly crafted wooden laminates that offer a refined, timeless wood aesthetic with contemporary durability. Our laminates are resistant to scratches, moisture, and fading, making them perfect for high-traffic areas.',
      features: ['Scratch Resistant', 'Moisture Proof', 'Easy Maintenance', 'Elegant Finish'],
    },
    { 
      title: 'Wall to Wall Carpets', 
      img: '/images/carpet.png', 
      desc: 'Sumptuous, high-density wall-to-wall carpeting designed for ultimate comfort and acoustic performance. Our carpet collection includes a vast range of textures, colors, and patterns suitable for both luxurious homes and corporate offices.',
      features: ['Noise Reduction', 'Premium Comfort', 'Anti-static', 'Vibrant Colors'],
    },
    { 
      title: 'Commercial Carpets', 
      img: '/images/hero-office.jpg', 
      desc: 'Highly durable and professional commercial carpet flooring designed to withstand heavy foot traffic. Perfect for corporate offices, hotels, and retail spaces seeking long-lasting performance and aesthetic appeal.',
      features: ['High Durability', 'Heavy-Traffic Rated', 'Professional Look', 'Stain Resistant'],
    },
    { 
      title: 'Artificial Grass', 
      img: '/images/grass.png', 
      desc: 'Lush, maintenance-free artificial turf that stays green all year round. Perfectly designed to transform rooftops, balconies, and indoor recreational areas into beautiful green oases without the need for water or intensive upkeep.',
      features: ['Weather Resistant', 'No Watering Needed', 'Environment Friendly', 'Safe for Pets'],
    },
    { 
      title: 'Area Rugs & Designer Rugs', 
      img: '/images/rug.png', 
      desc: 'A handpicked collection of premium area rugs and oriental patterns. From minimalist geometric shapes to traditional Jaipur-style craftsmanship, our rugs serve as exquisite accent pieces for any room.',
      features: ['Artisan Crafted', 'Soft Texture', 'Unique Designs', 'Premium Quality'],
    },
    { 
      title: 'Designer Wallpaper', 
      img: '/images/wallpaper.png', 
      desc: 'Transform your walls with our curated selection of designer wallpapers. We offer high-quality textured, metallic, and patterned wallpapers that can add depth, elegance, and personality to any interior space.',
      features: ['Easy Application', 'Rich Textures', 'Designer Patterns', 'Washable Options'],
    },
    { 
      title: 'Louver Panels (LUARS)', 
      img: '/images/louvers.png', 
      desc: 'Stylish and modern Louver panels (LUARS) designed for high-end wall treatments and decorative highlights. These panels offer a sophisticated three-dimensional look that adds architectural interest to any contemporary interior.',
      features: ['Architectural Depth', 'Moisture Resistant', 'Modern Aesthetic', 'Premium Finish'],
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="product-card glass-card"
              >
                <div className="product-image">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-content">
                  <h2 className="gradient-text">{product.title}</h2>
                  <p className="product-desc">{product.desc}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}><CheckCircle2 size={16} color="var(--secondary)" /> {feature}</li>
                    ))}
                  </ul>
                  <a href="https://wa.me/919462670966" className="btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag size={18} /> Inquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="seo-content container" style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.8 }}>
        <p>If you are searching for a <strong>Flooring Dealer Near Me</strong> or **Wall-to-Wall Carpet Near Me**, we provide quality products and reliable service. We are also a trusted **Carpet Dealer in Jaipur** and **Rugs Dealer in Jaipur**, offering stylish and durable flooring solutions. Looking for an **Artificial Grass Dealer Near Me**? Visit COMPLETE FLOORING COMPANY for a wide range of flooring options.</p>
      </div>

      <HomeCTA />
    </div>
  );
};

export default Services;
