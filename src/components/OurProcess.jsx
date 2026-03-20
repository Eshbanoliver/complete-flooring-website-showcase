import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, Ruler, Hammer, Sparkles, HeadphonesIcon, SwatchBook, ScanLine, Wrench, BadgeCheck } from 'lucide-react';
import './OurProcess.css';

const OurProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'Share your vision with us. We listen, understand your needs, budget, and style preferences to craft the perfect plan.',
      icon: <MessageSquare size={28} />,
      decorIcon: <MessageSquare size={48} />,
      bigIcon: <HeadphonesIcon size={56} strokeWidth={1.5} />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B, #EE5A24)',
    },
    {
      number: '02',
      title: 'Design & Selection',
      desc: 'Browse our curated collection. Our experts help you pick the ideal flooring material, pattern, and finish for your space.',
      icon: <Palette size={28} />,
      decorIcon: <Palette size={48} />,
      bigIcon: <SwatchBook size={56} strokeWidth={1.5} />,
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2BC0B4)',
    },
    {
      number: '03',
      title: 'Measurement',
      desc: 'Our team visits your site for precise measurements and surface assessment, ensuring a flawless fit every time.',
      icon: <Ruler size={28} />,
      decorIcon: <Ruler size={48} />,
      bigIcon: <ScanLine size={56} strokeWidth={1.5} />,
      color: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
    },
    {
      number: '04',
      title: 'Installation',
      desc: 'Skilled craftsmen install your flooring with precision and care, using industry-best techniques for lasting durability.',
      icon: <Hammer size={28} />,
      decorIcon: <Hammer size={48} />,
      bigIcon: <Wrench size={56} strokeWidth={1.5} />,
      color: '#F59E51',
      gradient: 'linear-gradient(135deg, #F59E51, #E67E22)',
    },
    {
      number: '05',
      title: 'Final Walkthrough',
      desc: 'We inspect every detail together. Your satisfaction is our benchmark — we ensure perfection before we call it done.',
      icon: <Sparkles size={28} />,
      decorIcon: <Sparkles size={48} />,
      bigIcon: <BadgeCheck size={56} strokeWidth={1.5} />,
      color: '#6B46C1',
      gradient: 'linear-gradient(135deg, #6B46C1, #9333EA)',
    },
  ];

  return (
    <section className="our-process-section section-padding">
      {/* Background decorative elements */}
      <div className="process-bg-shapes">
        <div className="process-shape shape-1"></div>
        <div className="process-shape shape-2"></div>
        <div className="process-shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="process-header"
        >
          <span className="process-badge">
            <span className="process-badge-dot"></span>
            How It Works
          </span>
          <h2 className="process-title">
            Our <span className="process-title-highlight">Process</span>
          </h2>
          <p className="process-subtitle">
            From consultation to completion — here's how we transform your space in 5 simple steps.
          </p>
        </motion.div>

        <div className="process-timeline">
          {/* Connecting line */}
          <div className="timeline-connector"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: 'spring',
                stiffness: 80,
                damping: 20,
              }}
              viewport={{ once: true, margin: '-50px' }}
              className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}
            >
              <div className="step-card" style={{ '--step-color': step.color, '--step-gradient': step.gradient }}>
                {/* Glowing background blob */}
                <div className="step-glow"></div>
                
                {/* Step number watermark */}
                <div className="step-number-watermark">{step.number}</div>
                
                {/* Icon container */}
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>

                {/* Decorative icon on the right */}
                <div className="step-decor-icon">{step.decorIcon}</div>

                {/* Animated border */}
                <div className="step-border-glow"></div>
              </div>

              {/* Timeline node */}
              <div className="timeline-node" style={{ '--step-color': step.color, '--step-gradient': step.gradient }}>
                <span className="node-number">{step.number}</span>
              </div>

              {/* Large icon on the opposite empty side */}
              <div className="step-opposite-icon" style={{ '--step-color': step.color, '--step-gradient': step.gradient }}>
                <div className="opposite-icon-inner">
                  {step.bigIcon}
                </div>
                <span className="opposite-icon-label">{step.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
