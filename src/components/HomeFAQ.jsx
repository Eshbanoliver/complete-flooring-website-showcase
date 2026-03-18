import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './HomeFAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item glass-card ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h3>{question}</h3>
        <button className="faq-icon-btn">
          {isOpen ? <Minus size={22} /> : <Plus size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HomeFAQ = () => {
  const faqs = [
    { question: 'What types of flooring do you offer?', answer: 'We offer a wide range of premium flooring solutions including wooden laminate flooring, wall-to-wall carpets, artificial grass, area rugs, designer wallpapers, and louver panels (LUARS).' },
    { question: 'How long does the installation process take?', answer: 'Installation time varies depending on the type of flooring and the size of the area. Typically, smaller residential projects can be completed within 1-2 days, while larger commercial spaces may take longer. We always provide a clear timeline during our initial consultation.' },
    { question: 'Do you provide flooring services outside of Jaipur?', answer: 'While our primary focus is Jaipur and its surrounding areas, we do undertake large-scale commercial projects across Rajasthan and neighboring states. Please contact us to discuss your requirements.' },
    { question: 'Is artificial grass suitable for rooftops and balconies?', answer: 'Yes, absolutely! Our premium artificial grass is specifically designed for rooftops, balconies, and indoor spaces, providing a lush green look without the need for water or constant maintenance.' },
    { question: 'Do you offer a warranty on your products and services?', answer: 'Yes, we stand by the quality of our materials and workmanship. Most of our high-end flooring products come with manufacturer warranties, and we also provide a service warranty on our professional installations.' },
  ];

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="desc">Everything you need to know about our flooring solutions.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
