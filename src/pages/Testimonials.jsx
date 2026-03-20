import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import HomeCTA from '../components/HomeCTA';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { 
      name: 'Mr. Rajesh Sharma', 
      role: 'Interior Designer', 
      quote: "The wooden laminate flooring I sourced from Complete Flooring Company for a high-end villa project in Jaipur was exceptional. The quality, finish, and durability surpassed our expectations. Their professional installation team is the best in town.", 
      rating: 5,
      avatar: 'RS'
    },
    { 
      name: 'Mrs. Ananya Mehta', 
      role: 'Homeowner, Vaishali Nagar', 
      quote: "We recently renovated our balcony with their artificial grass. It's been 6 months and it looks as fresh as day one. The transformation is unbelievable! Excellent service and very polite staff.", 
      rating: 5,
      avatar: 'AM'
    },
    { 
      name: 'Dr. Vikramaditya Singh', 
      role: 'Medical Professional', 
      quote: "Their wall-to-wall carpets have added a new level of sophistication to my clinic's waiting area. Patients often compliment the comfort and premium look. A job well done by the Complete Flooring team.", 
      rating: 5,
      avatar: 'VS'
    },
    { 
      name: 'Suresh Kumar', 
      role: 'Architectural Consultant', 
      quote: "Finding high-quality LUARS louver panels in Jaipur was a challenge until I found Complete Flooring. Their collection is modern and trendy. I now recommend them for all my residential projects.", 
      rating: 5,
      avatar: 'SK'
    },
    { 
      name: 'Ms. Pooja Batra', 
      role: 'HR Manager', 
      quote: "The area rug we purchased for our living room is a masterpiece. It ties the whole room together beautifully. The staff was very helpful in helping us choose the right size and texture.", 
      rating: 5,
      avatar: null // Will show golden user icon
    },
    { 
      name: 'Rahul Verma', 
      role: 'Business Owner', 
      quote: "Top-notch flooring solutions. We had our entire office flooring redone with their wooden laminates. The finish is stunning, and the maintenance is incredibly easy. Truly professional work.", 
      rating: 5,
      avatar: 'RV'
    },
    { 
      name: 'Sonal Jain', 
      role: 'Home Maker', 
      quote: "The staircase carpeting they did for us is simply beautiful. It's safe for children and looks so elegant. The team was very patient while we were choosing the colors.", 
      rating: 5,
      avatar: 'SJ'
    },
    { 
      name: 'Amit Shekhawat', 
      role: 'Real Estate Developer', 
      quote: "Complete Flooring Company is our go-to partner for all our projects. Their consistency in quality and timelines is what makes them stand out in the Jaipur market.", 
      rating: 5,
      avatar: 'AS'
    },
    { 
      name: 'Neelam Gupta', 
      role: 'Boutique Owner', 
      quote: "Highly impressed by their designer wallpaper collection. It completely changed the look of my store. Great aesthetic sense and fast execution.", 
      rating: 5,
      avatar: 'NG'
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero hero-subpage">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h5 className="gradient-text subtitle">Client Feedback</h5>
            <h1 className="hero-title">Words from <span className="gradient-text">Happy Homes</span></h1>
            <p className="hero-description">Transforming spaces across Jaipur, one floor at a time. Read what our clients have to say about their experience with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="testimonials-grid-section section-padding">
        <div className="decor-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container">
          <div className="all-testimonials-grid">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="testimonial-modern-card"
              >
                <div className="card-top">
                  <div className="quote-badge">
                    <Quote size={20} />
                  </div>
                  <div className="rating-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--secondary)" color="var(--secondary)" />
                    ))}
                  </div>
                </div>
                
                <p className="testimonial-text">"{t.quote}"</p>
                
                <div className="testimonial-author">
                  <div className="author-avatar-wrapper">
                    <div className="author-avatar">
                      <User size={28} color="var(--secondary)" />
                    </div>
                  </div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
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

export default Testimonials;

