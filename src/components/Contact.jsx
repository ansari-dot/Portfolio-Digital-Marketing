import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);

      // Simulate successful submission (in a real app, this would be based on actual API response)
      if (Math.random() > 0.1) {
        // 90% chance of success for demo purposes
        setSubmitted(true);
        setError(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(true);
        setSubmitted(false);
      }

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@digitalmarketer.com",
      link: "mailto:contact@digitalmarketer.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+(92) 3498881082",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pakistan, Rawalpindi",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how I can help take your digital marketing to the next
            level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-marketing-dark">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to transform your digital marketing strategy? Reach out
                through any of the following channels, and I'll get back to you
                within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-marketing-light rounded-full flex items-center justify-center text-marketing-primary flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-marketing-dark">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-marketing-primary transition-colors">
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100">
              <h4 className="font-medium text-marketing-dark mb-4">
                Connect on Social Media
              </h4>
              <div className="flex space-x-4">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (platform, i) => (
                    <motion.a
                      key={platform}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="w-10 h-10 rounded-full bg-marketing-light flex items-center justify-center text-marketing-primary hover:bg-marketing-primary hover:text-white transition-colors"
                      aria-label={`Follow on ${platform}`}>
                      <i className={`fab fa-${platform}`}></i>
                      {/* This would use Font Awesome or similar in a real implementation */}
                      {/* For now just showing the first letter */}
                      <span>{platform.charAt(0).toUpperCase()}</span>
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl p-8 relative">
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-marketing-light rounded-full"
                style={{ zIndex: -1 }}></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-marketing-primary/10 rounded-full"
                style={{ zIndex: -1 }}></div>

              <h3 className="text-2xl font-bold mb-6 text-marketing-dark">
                Send Me a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-green-800">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-green-600">
                      Thanks for reaching out. I'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle
                    className="text-red-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-red-800">
                      Oops! Something went wrong.
                    </h4>
                    <p className="text-sm text-red-600">
                      Please try again or contact me directly via email.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-marketing-dark mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-marketing-primary focus:ring-2 focus:ring-marketing-primary/20 outline-none transition-all"
                      placeholder="Arsalan Ansari"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-marketing-dark mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-marketing-primary focus:ring-2 focus:ring-marketing-primary/20 outline-none transition-all"
                      placeholder="0349ansari@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-marketing-dark mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-marketing-primary focus:ring-2 focus:ring-marketing-primary/20 outline-none transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-marketing-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-marketing-primary focus:ring-2 focus:ring-marketing-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full flex items-center justify-center">
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
