import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { 
      name: 'Mr. Rajesh Sharma', 
      role: 'Interior Designer', 
      quote: "The wooden laminate flooring I sourced from Complete Flooring Company for a high-end villa project in Jaipur was exceptional. The quality, finish, and durability surpassed our expectations. Their professional installation team is the best in town.", 
      rating: 5,
    },
    { 
      name: 'Mrs. Ananya Mehta', 
      role: 'Homeowner, Vaishali Nagar', 
      quote: "We recently renovated our balcony with their artificial grass. It's been 6 months and it looks as fresh as day one. The transformation is unbelievable! Excellent service and very polite staff.", 
      rating: 5,
    },
    { 
      name: 'Dr. Vikramaditya Singh', 
      role: 'Medical Professional', 
      quote: "Their wall-to-wall carpets have added a new level of sophistication to my clinic's waiting area. Patients often compliment the comfort and premium look. A job well done by the Complete Flooring team.", 
      rating: 5,
    },
    { 
      name: 'Suresh Kumar', 
      role: 'Architectural Consultant', 
      quote: "Finding high-quality LUARS louver panels in Jaipur was a challenge until I found Complete Flooring. Their collection is modern and trendy. I now recommend them for all my residential projects.", 
      rating: 5,
    },
    { 
      name: 'Ms. Pooja Batra', 
      role: 'HR Manager', 
      quote: "The area rug we purchased for our living room is a masterpiece. It ties the whole room together beautifully. The staff was very helpful in helping us choose the right size and texture.", 
      rating: 5,
    },
    { 
      name: 'Rahul Verma', 
      role: 'Business Owner', 
      quote: "Top-notch flooring solutions. We had our entire office flooring redone with their wooden laminates. The finish is stunning, and the maintenance is incredibly easy. Truly professional work.", 
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero hero-subpage">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h5 className="gradient-text subtitle">Client Feedback</h5>
            <h1 className="hero-title">What Our <span className="gradient-text">Clients</span> Say</h1>
            <p className="hero-description">Honest reviews from our valued customers who have transformed their spaces with our premium flooring solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="testimonials-grid-section section-padding">
        <div className="container">
          <div className="all-testimonials-grid">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="testimonial-card full-card glass-card"
              >
                <div className="quote-icon"><Quote size={40} /></div>
                <div className="rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="quote">"{t.quote}"</p>
                <div className="client-footer">
                  <div className="client-meta">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
