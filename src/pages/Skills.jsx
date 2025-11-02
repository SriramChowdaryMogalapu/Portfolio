import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaCloud,
  FaAws,
  FaDatabase,
  FaMobile,
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiExpress,
  SiKubernetes,
  SiJest,
  SiCypress,
  SiFirebase,
  SiLeetcode,
  SiCodechef,
} from "react-icons/si";
import SEO from "../components/SEO";
import "./Skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: "frontend", label: "Frontend", icon: FaCode },
    { id: "backend", label: "Backend", icon: FaDatabase },
    { id: "datascience", label: "Data Science", icon: FaPython },
    { id: "tools", label: "Tools & Others", icon: FaGitAlt },
  ];

  const skillsData = {
    frontend: [
      { name: "React.js", level: 90, icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", level: 88, icon: FaJsSquare, color: "#F7DF1E" },
      { name: "HTML5 & CSS3", level: 92, icon: FaCode, color: "#E34F26" },
      { name: "Tailwind CSS", level: 85, icon: FaCode, color: "#06B6D4" },
      { name: "Bootstrap", level: 88, icon: FaCode, color: "#7952B3" },
      {
        name: "Responsive Design",
        level: 90,
        icon: FaMobile,
        color: "#FF6B6B",
      },
    ],
    backend: [
      { name: "Node.js", level: 85, icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", level: 88, icon: SiExpress, color: "#FF6F00" },
      { name: "Flask", level: 82, icon: FaPython, color: "#F2C811" },
      { name: "Python", level: 85, icon: FaPython, color: "#3776AB" },
      { name: "REST APIs", level: 90, icon: FaCode, color: "#02569B" },
      { name: "MongoDB", level: 85, icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", level: 82, icon: FaDatabase, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#336791" },
      { name: "Snowflake", level: 75, icon: FaDatabase, color: "#29B5E8" },
    ],
    datascience: [
      { name: "Python", level: 85, icon: FaPython, color: "#3776AB" },
      { name: "Power BI", level: 88, icon: FaDatabase, color: "#F2C811" },
      { name: "Machine Learning", level: 78, icon: FaPython, color: "#FF6F00" },
      { name: "Data Science", level: 82, icon: FaDatabase, color: "#4285F4" },
    ],
    tools: [
      { name: "Git & GitHub", level: 92, icon: FaGitAlt, color: "#F05032" },
      { name: "VS Code", level: 95, icon: FaCode, color: "#007ACC" },
      { name: "AWS", level: 80, icon: FaAws, color: "#FF9900" },
      { name: "Azure Cloud", level: 78, icon: FaCloud, color: "#0078D4" },
      { name: "Power Automate", level: 75, icon: FaCode, color: "#0066CC" },
      { name: "C++", level: 88, icon: FaCode, color: "#5C2D91" },
    ],
  };

  const certifications = [
    {
      title: "ONGC Scholar 2021",
      issuer: "Oil and Natural Gas Corporation",
      date: "2021",
      image: "/ongc.png",
      hasImage: true,
      hasCertificate: false,
    },
    {
      title: "Top 1% in JEE-Mains 2021",
      issuer: "National Testing Agency",
      date: "2021",
      image: "/jee-logo.jpg",
      hasImage: true,
      certificateFile: "/certificates/jee-scorecard.pdf",
      hasCertificate: true,
      description:
        "Achieved top 1% ranking in JEE Mains 2021 examination with excellent performance.",
    },
    {
      title: "LeetCode Rating 1586",
      issuer: "LeetCode",
      date: "2024",
      icon: SiLeetcode,
      hasImage: false,
      color: "#FFA116",
      hasCertificate: false,
      hasProfile: true,
      profileUrl: "https://leetcode.com/u/mSrc",
      description:
        "Achieved rating of 1586 in competitive programming contests on LeetCode platform.",
    },
    {
      title: "44th Rank - CODERUSH Challenge",
      issuer: "Algo University",
      date: "2023",
      image: "/algo.png",
      hasImage: true,
      certificateFile: "/certificates/coderush-certificate.pdf",
      hasCertificate: true,
      description:
        "Secured 44th position in the prestigious CODERUSH programming challenge at NIT Raipur.",
    },
    {
      title: "963rd Rank - CodeChef STARTERS 82",
      issuer: "CodeChef",
      date: "2023",
      icon: SiCodechef,
      hasImage: false,
      color: "#5B4638",
      hasCertificate: false,
      hasProfile: true,
      profileUrl: "https://www.codechef.com/users/sriram333",
      description:
        "Achieved 963rd rank in CodeChef STARTERS 82 competitive programming contest.",
    },
  ];

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
    setIsModalOpen(false);
  };

  const handleCertificateClick = (cert) => {
    if (cert.hasCertificate) {
      openCertificateModal(cert);
    } else if (cert.hasProfile) {
      // Add a small delay to show the click feedback before redirecting
      setTimeout(() => {
        window.open(cert.profileUrl, "_blank", "noopener,noreferrer");
      }, 150);
    }
  };

  // Add keyboard support for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeCertificateModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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

  const skillVariants = {
    initial: { width: 0 },
    animate: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  // Structured data for skills page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical Skills of Sriram Chowdary Mogalapu",
    description:
      "Comprehensive technical skills including Frontend Development, Backend Development, Data Science, and Development Tools",
    itemListElement: [
      {
        "@type": "Skill",
        name: "Frontend Development",
        description: "React.js, JavaScript, TypeScript, Next.js, Vue.js",
      },
      {
        "@type": "Skill",
        name: "Backend Development",
        description: "Node.js, Express.js, Python, Flask, MongoDB, PostgreSQL",
      },
      {
        "@type": "Skill",
        name: "Data Science",
        description:
          "Python, Machine Learning, Data Analysis, Jupyter Notebooks",
      },
      {
        "@type": "Skill",
        name: "Cloud & DevOps",
        description: "AWS, Azure, Docker, Kubernetes, Git, CI/CD",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Skills - Sriram Chowdary Mogalapu | Full Stack Development & Data Science"
        description="Explore the comprehensive technical skills of Sriram Chowdary Mogalapu including Frontend Development (React.js, JavaScript), Backend Development (Node.js, Python), Data Science, Cloud Technologies (AWS, Azure), and more."
        keywords="Skills,Technical Skills,React.js,JavaScript,TypeScript,Node.js,Python,Flask,MongoDB,PostgreSQL,AWS,Azure,Docker,Data Science,Machine Learning,Full Stack Development"
        url="https://sriram-chowdary.netlify.app/skills"
        structuredData={structuredData}
        canonical="https://sriram-chowdary.netlify.app/skills"
      />
      <motion.section
        className="skills-section section"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        ref={ref}
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-description">
              A comprehensive overview of my technical expertise and
              professional capabilities.
            </p>
          </motion.div>

          <motion.div className="skills-content" variants={itemVariants}>
            <div className="category-tabs">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`category-tab ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <Icon className="tab-icon" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              className="skills-grid"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skillsData[activeCategory].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <Icon
                          className="skill-icon"
                          style={{ color: skill.color }}
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        custom={skill.level}
                        variants={skillVariants}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="certifications-section"
            variants={itemVariants}
          >
            <h3>Certifications & Achievements</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`certification-card ${
                    cert.hasCertificate || cert.hasProfile ? "clickable" : ""
                  }`}
                  data-type={
                    cert.hasProfile && !cert.hasCertificate
                      ? "profile"
                      : "certificate"
                  }
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => handleCertificateClick(cert)}
                  style={{
                    cursor:
                      cert.hasCertificate || cert.hasProfile
                        ? "pointer"
                        : "default",
                  }}
                >
                  <div className="cert-image">
                    {cert.hasImage ? (
                      <img src={cert.image} alt={cert.title} />
                    ) : (
                      <cert.icon
                        style={{
                          fontSize: "2.5rem",
                          color: cert.color,
                        }}
                      />
                    )}
                  </div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                    {cert.hasCertificate && (
                      <div className="view-certificate">
                        <FaCode style={{ marginRight: "0.5rem" }} />
                        Click to view certificate
                      </div>
                    )}
                    {cert.hasProfile && !cert.hasCertificate && (
                      <div className="view-profile">
                        <FaExternalLinkAlt style={{ marginRight: "0.5rem" }} />
                        Click to view profile
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-content">
              <h3>Technical Expertise Summary</h3>
              <p>
                Fresh B.Tech Computer Science graduate from NIT Raipur with a
                CPI of 9.14, I have developed strong expertise in full-stack
                development using the MERN stack, cloud technologies, and data
                science. My technical journey is backed by competitive
                programming achievements and comprehensive internship experience
                across multiple domains.
              </p>
              <p>
                Currently working as Associate Data Solution Architect at
                Piramal Finance, I'm passionate about building scalable web
                applications, creating intuitive frontend solutions and enhanced
                debugging experiences. My goal is to leverage technology to
                create innovative solutions that drive business impact and
                technological advancement.
              </p>
              <div className="expertise-highlights">
                <div className="highlight">
                  <strong>1+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="highlight">
                  <strong>15+</strong>
                  <span>Technologies</span>
                </div>
                <div className="highlight">
                  <strong>5</strong>
                  <span>Major Achievements</span>
                </div>
                <div className="highlight">
                  <strong>10+</strong>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certificate Modal */}
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificateModal}
          >
            <motion.div
              className="certificate-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedCertificate.title}</h3>
                <button
                  className="close-button"
                  onClick={closeCertificateModal}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                <div className="certificate-info">
                  <p>
                    <strong>Issuer:</strong> {selectedCertificate.issuer}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedCertificate.date}
                  </p>
                  <p>
                    <strong>Description:</strong>{" "}
                    {selectedCertificate.description}
                  </p>
                </div>
                <div className="certificate-viewer">
                  <iframe
                    src={selectedCertificate.certificateFile}
                    title={`${selectedCertificate.title} Certificate`}
                    width="100%"
                    height="500"
                    style={{ border: "none", borderRadius: "8px" }}
                  />
                </div>
                <div className="modal-actions">
                  <a
                    href={selectedCertificate.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaDownload style={{ marginRight: "0.5rem" }} />
                    Download Certificate
                  </a>
                  <button
                    className="btn-secondary"
                    onClick={closeCertificateModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Skills;
