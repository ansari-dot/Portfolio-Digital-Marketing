
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Search, 
  MessageSquare, 
  Mail, 
  Copy, 
  BarChart, 
  Share2, 
  Camera 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic with data-driven SEO strategies.',
      color: 'bg-blue-500',
    },
    {
      icon: LineChart,
      title: 'PPC Campaigns',
      description: 'Targeted paid advertising campaigns that maximize ROI and conversion rates.',
      color: 'bg-green-500',
    },
    {
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement through strategic social media management.',
      color: 'bg-purple-500',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and drive sales with personalized email marketing campaigns.',
      color: 'bg-amber-500',
    },
    {
      icon: Copy,
      title: 'Content Creation',
      description: 'Compelling content that resonates with your audience and drives engagement.',
      color: 'bg-red-500',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and insightful reporting to track campaign performance.',
      color: 'bg-teal-500',
    },
    {
      icon: Share2,
      title: 'Digital Strategy',
      description: 'Holistic digital marketing strategies aligned with your business objectives.',
      color: 'bg-indigo-500',
    },
    {
      icon: Camera,
      title: 'Visual Marketing',
      description: 'Eye-catching visual content that elevates your brand and drives engagement.',
      color: 'bg-pink-500',
    }
  ];

  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: i * 0.05,
        duration: 0.6
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Comprehensive digital marketing solutions tailored to your business needs</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-marketing-dark">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
              <div className="px-6 pb-6">
                <a 
                  href="#contact" 
                  className="text-marketing-primary font-medium text-sm flex items-center hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-marketing-primary to-marketing-secondary p-1 rounded-2xl"
        >
          <div className="bg-white rounded-xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to elevate your digital marketing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how my services can help your business grow and thrive in today's competitive digital landscape.
            </p>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
