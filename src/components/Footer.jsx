import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-marketing-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-marketing-accent">Digital</span>Marketer
            </h3>
            <p className="text-gray-400">
              Transforming brands through strategic digital marketing solutions
              that drive real business growth.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (platform, i) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-marketing-accent/80 transition-colors"
                    aria-label={platform}>
                    {/* This would use actual icons in a real implementation */}
                    {platform.charAt(0)}
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "PPC Campaigns",
                "Email Marketing",
                "Content Creation",
                "Analytics & Reporting",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-marketing-accent">📍</span>
                <span className="text-gray-400">Pakistan, Rawalpindi</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-marketing-accent">📧</span>
                <a
                  href="mailto:contact@digitalmarketer.com"
                  className="text-gray-400 hover:text-white transition-colors">
                  contact@digitalmarketer.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-marketing-accent">📱</span>
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition-colors">
                  +(92) 3498880182
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-marketing-accent">🕒</span>
                <span className="text-gray-400">Mon - Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DigitalMarketer. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-marketing-primary flex items-center justify-center hover:bg-marketing-secondary transition-colors"
            aria-label="Scroll to top">
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
