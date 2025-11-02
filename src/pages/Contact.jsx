import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { sendEmail } from "../utils/emailService";
import SEO from "../components/SEO";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            "Oops! Something went wrong. Please try again or contact me directly.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mogalapusriram391@gmail.com",
      link: "mailto:mogalapusriram391@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 9381436552",
      link: "tel:+919381436552",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/SriramChowdaryMogalapu",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/",
      label: "LinkedIn",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Structured data for contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sriram Chowdary Mogalapu",
    description:
      "Get in touch with Sriram Chowdary Mogalapu for collaboration, opportunities, or project discussions",
    mainEntity: {
      "@type": "Person",
      name: "Sriram Chowdary Mogalapu",
      jobTitle: "Associate Data Solution Architect",
      worksFor: {
        "@type": "Organization",
        name: "Piramal Finance",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "professional",
        email: "sriramchowdary2000@gmail.com",
        areaServed: "Global",
        availableLanguage: "English",
      },
      sameAs: [
        "https://github.com/SriramChowdaryMogalapu",
        "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/",
      ],
    },
  };

  return (
    <>
      <SEO
        title="Contact - Sriram Chowdary Mogalapu | Get in Touch for Collaboration"
        description="Contact Sriram Chowdary Mogalapu, Associate Data Solution Architect at Piramal Finance. Available for freelance projects, collaborations, and professional opportunities in full-stack development and data solutions."
        keywords="Contact,Sriram Chowdary,Contact Information,Hire Developer,Freelance,Collaboration,Professional Contact,Data Solution Architect,Full Stack Developer,Email Contact"
        url="https://sriram-chowdary.netlify.app/contact"
        structuredData={structuredData}
        canonical="https://sriram-chowdary.netlify.app/contact"
      />
      <motion.section
        className="contact-section section"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="section-description">
              Fresh B.Tech CSE graduate from NIT Raipur working as Associate
              Data Solution Architect at Piramal Finance. Always excited to
              discuss new opportunities, innovative projects, or tech
              collaborations.
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Get in Touch</h3>
              <p>
                Whether you have a full-time opportunity, want to collaborate on
                a project, discuss full-stack development, or just want to
                connect, I'd love to hear from you! Currently open to new
                opportunities and challenging projects.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">
                        <Icon />
                      </div>
                      <div className="contact-text">
                        <span className="contact-label">{info.label}</span>
                        {info.link ? (
                          <a href={info.link} className="contact-value">
                            {info.value}
                          </a>
                        ) : (
                          <span className="contact-value">{info.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.label}
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              variants={itemVariants}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send me a message</h3>

                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.type === "success" ? (
                      <FaCheckCircle className="status-icon" />
                    ) : (
                      <FaExclamationCircle className="status-icon" />
                    )}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
