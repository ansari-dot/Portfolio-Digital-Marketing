
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Clock, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Conversion Boost',
      category: 'ppc',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tagline: 'PPC & Analytics',
      description: 'Increased e-commerce conversions by 137% through targeted Google Ads and remarketing campaigns.',
      results: ['137% increase in conversions', '43% decrease in cost per acquisition', '89% increase in ROAS'],
      duration: '3 months',
      client: 'FashionHub',
      award: 'Best Retail Campaign 2023'
    },
    {
      id: 2,
      title: 'SaaS Lead Generation',
      category: 'seo',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tagline: 'SEO & Content Strategy',
      description: 'Developed a comprehensive SEO and content strategy for a SaaS company, increasing organic traffic by 210%.',
      results: ['210% increase in organic traffic', '187% increase in qualified leads', '22 high-ranking keywords'],
      duration: '6 months',
      client: 'CloudSolutions',
      award: null
    },
    {
      id: 3,
      title: 'Restaurant Social Media',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      tagline: 'Social Media Marketing',
      description: 'Created a viral social media campaign for a restaurant chain, increasing engagement and footfall.',
      results: ['320% increase in engagement', '14K new followers', '27% increase in physical visits'],
      duration: '2 months',
      client: 'Urban Bites',
      award: 'Food & Beverage Social Campaign 2023'
    },
    {
      id: 4,
      title: 'B2B Lead Nurturing',
      category: 'email',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      tagline: 'Email Marketing',
      description: 'Implemented automated email nurturing sequences for a B2B client, improving lead conversion.',
      results: ['165% increase in email open rates', '82% increase in conversions', '35% reduction in sales cycle'],
      duration: '4 months',
      client: 'IndustryTech',
      award: null
    },
    {
      id: 5,
      title: 'Mobile App Launch',
      category: 'ppc',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tagline: 'App Install Campaign',
      description: 'Coordinated a multi-channel paid campaign for a mobile app launch, exceeding download targets.',
      results: ['250K app installs in first month', '42% lower CPI than industry average', '78% user retention rate'],
      duration: '3 months',
      client: 'FitTracker',
      award: 'Best App Launch Campaign'
    },
    {
      id: 6,
      title: 'Non-profit Awareness',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tagline: 'Social Impact Campaign',
      description: 'Created an impactful social media campaign for a non-profit organization, increasing donations and awareness.',
      results: ['175% increase in donations', '430K campaign reach', '12K new supporters'],
      duration: '2 months',
      client: 'Ocean Cleanup Initiative',
      award: null
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ppc', label: 'PPC Campaigns' },
    { id: 'seo', label: 'SEO Projects' },
    { id: 'social', label: 'Social Media' },
    { id: 'email', label: 'Email Marketing' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-marketing-light/30">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">Explore some of my most successful digital marketing campaigns</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
                activeFilter === filter.id
                  ? 'bg-marketing-primary text-white shadow-md'
                  : 'bg-white text-marketing-dark hover:bg-marketing-light'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-marketing-primary">
                    {project.tagline}
                  </div>
                  {project.award && (
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-marketing-accent/90 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center">
                      <Award size={12} className="mr-1" />
                      Award Winner
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-marketing-dark">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-marketing-dark mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <svg className="w-4 h-4 text-marketing-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock size={14} className="mr-1" />
                      {project.duration}
                    </div>
                    <a 
                      href="#contact" 
                      className="text-marketing-primary font-medium text-sm flex items-center hover:underline"
                    >
                      View Details
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
