
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: Users, 
      value: '250+', 
      label: 'Clients Helped',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    { 
      icon: TrendingUp, 
      value: '370%', 
      label: 'Average ROI',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    { 
      icon: Award, 
      value: '12+', 
      label: 'Industry Awards',
      color: 'text-amber-500',
      bgColor: 'bg-amber-100'
    },
    { 
      icon: CheckCircle, 
      value: '8+', 
      label: 'Years Experience',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-marketing-light/50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A digital marketing strategist with a passion for creating data-driven campaigns that convert.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-marketing-primary/40 to-marketing-accent/40 rounded-2xl relative p-8">
                  <div className="absolute inset-4 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Digital Marketing Specialist</h3>
                    <p className="text-marketing-dark mb-6">
                      With over 8 years of experience transforming brands through strategic digital marketing, I've helped businesses of all sizes achieve their goals and exceed their targets.
                    </p>
                    <ul className="space-y-3">
                      {['SEO & Content Strategy', 'Paid Media Management', 'Social Media Marketing', 'Email Marketing', 'Analytics & Optimization'].map((skill, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="text-marketing-accent" size={16} />
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-marketing-accent rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="text-white font-semibold">
                  100% <br /> Results
                </span>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                My career began with a simple belief: great marketing should be both creative and measurable. 
                Since then, I've been combining artistic vision with analytical precision to create marketing 
                campaigns that don't just look good—they deliver results.
              </p>
              <p className="text-muted-foreground">
                I've worked with startups looking to establish their brand, as well as established enterprises 
                seeking to innovate and adapt to changing market conditions. What unites all my work is a 
                dedication to excellence and a commitment to driving real business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-marketing-dark">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
