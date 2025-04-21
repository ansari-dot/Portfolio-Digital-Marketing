import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import img from "../assets/WhatsApp Image 2025-04-20 at 13.41.38_8d39fe73.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left">
            <motion.div
              className="inline-block px-4 py-1 rounded-full bg-marketing-light text-marketing-primary font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}>
              Digital Marketing Expert
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}>
              Transform Your{" "}
              <span className="gradient-text">Digital Presence</span> Today
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}>
              Elevate your brand with data-driven marketing strategies that
              deliver measurable results and sustainable growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}>
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn-secondary">
                View My Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex justify-center items-center">
            <div className="w-full h-[500px] bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] rounded-3xl overflow-hidden shadow-2xl p-4 flex justify-center items-center border border-white/30">
              <img
                src={img}
                alt="Marketing Visual"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-marketing-dark/50 hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
