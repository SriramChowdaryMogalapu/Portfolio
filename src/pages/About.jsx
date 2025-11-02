import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaDownload,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcase,
  FaHandsHelping,
  FaExternalLinkAlt,
  FaTimes,
  FaEye,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import SEO from "../components/SEO";
import "./About.css";

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const skills = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap",
    },
    {
      icon: FaLaptopCode,
      title: "Backend Development",
      description: "Node.js, Express.js, Flask, Python, REST APIs",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "MongoDB, MySQL, PostgreSQL, Snowflake",
    },
    {
      icon: FaCloud,
      title: "Cloud & DevOps",
      description:
        "AWS (Amplify, S3, API Gateway), Azure Cloud Platform, Power Automate",
    },
    {
      icon: FaUsers,
      title: "Data Science & BI",
      description: "Python, Machine Learning, Power BI, Data Visualization",
    },
    {
      icon: FaMobile,
      title: "Problem Solving",
      description:
        "C++, Algorithms, Data Structures, Competitive Programming (LeetCode 1586)",
    },
  ];

  const experiences = [
    {
      title: "Associate Data Solution Architect",
      company: "Piramal Finance, Bengaluru",
      period: "Jul 2025 - Present",
      description:
        "Currently working as Associate Data Solution Architect developing advanced business intelligence solutions, creating comprehensive Intuitive React Applications, and building scalable flask architectures to support strategic business decisions.",
      skills: [
        "React.js",
        "Flask",
        "Python",
        "AWS",
        "Business Intelligence",
        "SQL",
      ],
      projects: [
        "React-based Data Visualization Platform",
        "Automated Document Intelligence Platform",
      ],
      hasDetails: true,
    },
    {
      title: "BIU Intern",
      company: "Piramal Finance, Mumbai",
      period: "Jan 2025 - Jul 2025",
      description:
        "Developed and deployed two React JS frontend applications on AWS Amplify. Designed comprehensive Power BI dashboards for business metrics and built scalable Flask backend architecture integrating AWS API Gateway, S3 storage, and GitHub version control.",
      skills: [
        "React.js",
        "AWS Amplify",
        "Power BI",
        "Flask",
        "AWS API Gateway",
        "AWS S3",
        "GitHub",
        "JavaScript",
        "Python",
      ],
      projects: [
        "React Frontend Applications on AWS Amplify",
        "Power BI Business Metrics Dashboard",
        "Flask Backend with AWS Integration",
        "S3 Storage Management System",
      ],
      hasDetails: true,
    },
    {
      title: "Artificial Intelligence Internship",
      company: "Caring Machines",
      period: "Jun 2024 - Jul 2024",
      description:
        "Worked on AI/ML projects focusing on developing intelligent systems and implementing machine learning algorithms for real-world applications in healthcare technology.",
      skills: [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "Scikit-learn",
        "Data Science",
        "AI Algorithms",
        "Azure",
      ],
      projects: ["Essay Scoring System"],
      certificate: "/certificates/caring-machines-cert.pdf",
      hasDetails: true,
    },
    {
      title: "Research Internship",
      company: "IIIT Sricity under Dr. Chandra Mohan Sir",
      period: "Jun 2023 - Jul 2023",
      description:
        "Conducted research in Deep Learning, focusing on advanced algorithms on Molecular Structure in bioinformatics under the guidance of Dr. Chandra Mohan.",
      skills: [
        "Research Methodology",
        "Advanced Algorithms",
        "Bioinformatics",
        "Deep Learning",
        "Machine Learning",
        "Python",
        "Data Science",
        "PyMOL",
      ],
      projects: ["Deep Pocket Prediction"],
      //   certificate: "/certificates/iiit-research-cert.pdf",
      hasDetails: true,
    },
    {
      title: "Data Science with Python Internship",
      company: "Threat Prism (Coincent)",
      period: "Oct 2023 - Dec 2023",
      description:
        "Gained hands-on experience in data science using Python, working with pandas, numpy, and machine learning libraries to analyze and visualize complex datasets.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
        "Data Visualization",
        "Data Analysis",
      ],
      projects: ["Customer Segmentation Analysis", "House Price Prediction"],
      certificate: "/certificates/threat-prism-cert.pdf",
      hasDetails: true,
    },
  ];

  const openExperienceModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeExperienceModal = () => {
    setSelectedExperience(null);
    setIsModalOpen(false);
  };

  // Add keyboard support for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeExperienceModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const leadership = [
    {
      title: "Web Master",
      company: "ICCINS-2025, NIT Raipur CSE Department",
      period: "Dec 2024 - April 2025",
      description:
        "Currently updating and maintaining the website for the International Conference organized by the CSE Department of NIT Raipur. Responsible for website development and content management.",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      period: "2022 - Present",
      description:
        "Active contributor to open-source projects on GitHub, sharing code repositories, and collaborating with the developer community. Focus on web development projects and educational resources.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "National Institute of Technology, Raipur",
      period: "2021 - 2025",
      description:
        "Successfully completed with specialization in software engineering, data structures, algorithms, and full-stack development. ONGC Scholar 2021.",
      highlight: "CPI: 9.14",
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Tirumala Junior College, Rajahmundry",
      period: "2019 - 2021",
      description:
        "Focused on Mathematics, Physics, and Chemistry with strong foundation in analytical thinking. Top 1% in JEE-Mains 2021.",
      highlight: "Percentile: 98.8%",
    },
    {
      degree: "Secondary (X)",
      institution: "Sri Chaitanya Techno Schools, Devarapalli",
      period: "2018 - 2019",
      description:
        "Perfect academic performance with excellence in all subjects.",
      highlight: "CGPA: 10",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "4+", label: "Internships" },
    { number: "15+", label: "Technologies" },
    { number: "1586", label: "LeetCode Rating" },
  ];

  // Structured data for about page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: "Sriram Chowdary Mogalapu",
      description:
        "Computer Science Engineering graduate from NIT Raipur with 9.14 CPI, Associate Data Solution Architect at Piramal Finance",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Technology Raipur",
      },
      jobTitle: "Associate Data Solution Architect",
      worksFor: {
        "@type": "Organization",
        name: "Piramal Finance",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "B.Tech in Computer Science Engineering",
          educationalLevel: "Bachelor's Degree",
          credentialCategory: "degree",
        },
      ],
      knowsAbout: [
        "MERN Stack Development",
        "AWS Cloud Technologies",
        "Azure Cloud Platform",
        "Power BI",
        "Flask",
        "Data Science",
        "Competitive Programming",
      ],
    },
  };

  return (
    <>
      <SEO
        title="About - Sriram Chowdary Mogalapu | NIT Raipur Graduate & Data Solution Architect"
        description="Learn about Sriram Chowdary Mogalapu - Computer Science Engineering graduate from NIT Raipur with 9.14 CPI, currently working as Associate Data Solution Architect at Piramal Finance. Expert in MERN stack, cloud technologies, and competitive programming."
        keywords="About Sriram Chowdary,NIT Raipur,Computer Science Engineering,Data Solution Architect,Piramal Finance,MERN Stack,AWS,Azure,Competitive Programming,LeetCode,Resume"
        url="https://sriram-chowdary.netlify.app/about"
        structuredData={structuredData}
        canonical="https://sriram-chowdary.netlify.app/about"
      />
      <motion.section
        className="about-section section"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        ref={ref}
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-description">
              {/* Passionate developer with a love for creating beautiful, functional, and user-friendly applications. */}
            </p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-intro" variants={itemVariants}>
              <div className="intro-text">
                <h3>Hello! I'm Sriram Chowdary Mogalapu</h3>
                <p>
                  I'm a Computer Science Engineering graduate from the National
                  Institute of Technology, Raipur, with a CPI of 9.14. Currently
                  working as Associate Data Solution Architect at Piramal
                  Finance, Bengaluru, I specialize in developing advanced data
                  solutions, React applications and comprehensive Flask
                  architectures.
                </p>
                <p>
                  My technical expertise encompasses full-stack development
                  using the MERN stack, cloud technologies including AWS and
                  Azure, and business intelligence tools such as Power BI and
                  Flask for backend services. Through diverse internship
                  experiences across data science, artificial intelligence, and
                  research domains, I have gained comprehensive practical
                  knowledge alongside strong theoretical foundations.
                </p>
                <p>
                  As a competitive programmer with a LeetCode rating of 1586, I
                  have demonstrated strong problem-solving abilities through
                  achievements including ranking 44th in my college's CODERUSH
                  Challenge, securing 963rd position among 15,000 participants
                  in CodeChef's STARTERS 82 contest, and being an ONGC Scholar
                  2021 with Top 1% rank in JEE-Mains 2021.
                </p>
                <a
                  href="/Mogalapu_SriramChowdary_Resume.pdf"
                  download
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>
              <div className="intro-image">
                <div className="image-container">
                  <img
                    src="/photo1.JPG"
                    alt="Sriram Chowdary Mogalapu"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </motion.div>

            <motion.div className="stats-section" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="skills-section" variants={itemVariants}>
              <h3>What I Do</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      className="skill-card"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="skill-icon">
                        <Icon />
                      </div>
                      <h4>{skill.title}</h4>
                      <p>{skill.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="experience-section" variants={itemVariants}>
              <h3>
                <FaBriefcase /> Professional Experience
              </h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`timeline-item ${
                      exp.hasDetails ? "clickable" : ""
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: index * 0.2 }}
                    onClick={() => exp.hasDetails && openExperienceModal(exp)}
                    style={{ cursor: exp.hasDetails ? "pointer" : "default" }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{exp.title}</h4>
                        <span className="company">{exp.company}</span>
                        <span className="period">
                          <FaCalendarAlt /> {exp.period}
                        </span>
                      </div>
                      <p>{exp.description}</p>
                      {exp.hasDetails && (
                        <div className="view-details">
                          <FaEye style={{ marginRight: "0.5rem" }} />
                          Click to view details
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="leadership-section" variants={itemVariants}>
              <h3>
                <FaHandsHelping /> Leadership & Community Involvement
              </h3>
              <div className="timeline">
                {leadership.map((role, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{role.title}</h4>
                        <span className="company">{role.company}</span>
                        <span className="period">
                          <FaCalendarAlt /> {role.period}
                        </span>
                      </div>
                      <p>{role.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="education-section" variants={itemVariants}>
              <h3>
                <FaGraduationCap /> Education
              </h3>
              <div className="education-grid">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4>{edu.degree}</h4>
                    <span className="institution">{edu.institution}</span>
                    <span className="period">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                    {edu.highlight && (
                      <div className="education-highlight">{edu.highlight}</div>
                    )}
                    <p>{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience Details Modal */}
        {isModalOpen && selectedExperience && (
          <motion.div
            className="experience-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeExperienceModal}
          >
            <motion.div
              className="experience-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedExperience.title}</h3>
                <button
                  className="close-button"
                  onClick={closeExperienceModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-content">
                <div className="experience-info">
                  <div className="info-section">
                    <h4>
                      <FaBriefcase /> Role Details
                    </h4>
                    <p>
                      <strong>Company:</strong> {selectedExperience.company}
                    </p>
                    <p>
                      <strong>Period:</strong> {selectedExperience.period}
                    </p>
                    <p>
                      <strong>Description:</strong>{" "}
                      {selectedExperience.description}
                    </p>
                  </div>

                  <div className="info-section">
                    <h4>
                      <FaTools /> Skills & Technologies
                    </h4>
                    <div className="skills-tags">
                      {selectedExperience.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="info-section">
                    <h4>
                      <FaProjectDiagram /> Key Projects
                    </h4>
                    <ul className="projects-list">
                      {selectedExperience.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedExperience.certificate && (
                  <div className="certificate-section">
                    <h4>Internship Certificate</h4>
                    <div className="certificate-viewer">
                      <iframe
                        src={selectedExperience.certificate}
                        title={`${selectedExperience.title} Certificate`}
                        width="100%"
                        height="400"
                        style={{ border: "none", borderRadius: "8px" }}
                      />
                    </div>
                    <div className="certificate-actions">
                      <a
                        href={selectedExperience.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <FaDownload style={{ marginRight: "0.5rem" }} />
                        Download Certificate
                      </a>
                      <a
                        href={selectedExperience.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FaExternalLinkAlt style={{ marginRight: "0.5rem" }} />
                        View in New Tab
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default About;
