import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your inquiry! Our team will get back to you shortly.");
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero hero-subpage">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h5 className="gradient-text subtitle">Get In Touch</h5>
            <h1 className="hero-title">Start Your <span className="gradient-text">Project</span> Today</h1>
            <p className="hero-description">We're here to help you choose the best flooring for your space. Reach out to us through any of the channels below.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-details section-padding">
        <div className="section-decor">
          <div className="decor-blob blob-1"></div>
          <div className="decor-blob blob-2"></div>
        </div>
        <div className="container contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-cards"
          >
            {[
              { 
                icon: <MapPin size={24} />, 
                title: "Our Address", 
                content: <p>Floor No.: B-67, Building No./Flat No.: Kirti Nagar, <br />Road/Street: Tonk Road, Jaipur</p>,
                delay: 0.1
              },
              { 
                icon: <Phone size={24} />, 
                title: "Phone & WhatsApp", 
                content: (
                  <>
                    <p>Call: <a href="tel:+919462670966">+91 9462670966</a></p>
                    <p>WhatsApp: <a href="https://wa.me/919462670966">+91 9462670966</a></p>
                  </>
                ),
                delay: 0.2
              },
              { 
                icon: <Mail size={24} />, 
                title: "Email Us", 
                content: <p><a href="mailto:completeflooringcompany@gmail.com">completeflooringcompany@gmail.com</a></p>,
                delay: 0.3
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                whileHover={{ x: 15, scale: 1.02 }}
                viewport={{ once: true }}
                className="contact-card glass-card"
              >
                <div className="icon-wrapper circle-glow">{card.icon}</div>
                <div className="info-content">
                  <h3>{card.title}</h3>
                  {card.content}
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="contact-socials glass-card"
            >
               <h3>Follow Us</h3>
               <div className="social-links-row">
                 <motion.a 
                   whileHover={{ y: -5, scale: 1.2, color: 'var(--accent)' }}
                   href="https://www.instagram.com/completeflooringcompany/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link instagram"
                 >
                   <Instagram size={24} />
                 </motion.a>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-wrapper glass-card"
          >
            <h2 className="title">Send Us a <span className="gradient-text">Message</span></h2>
            <p className="desc">Fill out the form below and we will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Phone Number" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email Address" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your Message..." 
                  rows="5" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="map-section section-padding">
        <div className="container">
          <div className="map-placeholder glass-card p-0" style={{ padding: 0, height: '400px', overflow: 'hidden' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56946.62249755539!2d75.71356824863281!3d26.866533100000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5003ebf79df%3A0x1c20d968900855af!2sCOMPLETE%20FLOORING%20COMPANY!5e0!3m2!1sen!2sin!4v1773825030085!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, borderRadius: '16px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
