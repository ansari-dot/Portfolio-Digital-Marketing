import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}>
      <div className="container-custom flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-display font-bold text-marketing-dark">
          <span className="text-marketing-accent">Suhail</span> Ameen
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}>
                <a
                  href={link.href}
                  className="font-medium text-marketing-dark hover:text-marketing-primary transition-colors">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-marketing-dark hover:text-marketing-accent transition-colors"
                aria-label={link.name}>
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-marketing-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="container-custom py-6 space-y-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}>
                    <a
                      href={link.href}
                      className="block font-medium text-lg text-marketing-dark hover:text-marketing-primary transition-colors"
                      onClick={() => setIsOpen(false)}>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-marketing-dark hover:text-marketing-accent transition-colors"
                    aria-label={link.name}>
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
