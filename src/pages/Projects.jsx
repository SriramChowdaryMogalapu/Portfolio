import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaFilter,
  FaTimes,
  FaCloud,
  FaCode,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import SEO from "../components/SEO";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-KYC Verification System",
      category: "fullstack",
      description:
        "Web-based e-KYC solution for seamless user identity verification through financial institutions with blockchain integration.",
      longDescription:
        "Developed and deployed a comprehensive e-KYC verification system that enables financial institutions to verify customer identities securely. The system features blockchain integration for enhanced security, secure user authentication mechanisms, and a user-friendly interface built with React. This solution ensures compliance with regulatory standards while streamlining the onboarding process.",
      image: "/project1.jpg",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
      features: [
        "Blockchain Integration for Security",
        "Identity Verification System",
        "Regulatory Compliance",
        "Secure Authentication",
        "Document Upload & Verification",
        "Real-time Processing",
      ],
      githubUrl: "https://github.com/SriramChowdaryMogalapu/e-kyc-verification",
      liveUrl: "https://msrc-ekyc-verification.netlify.app",
      status: "Completed",
    },
    {
      id: 2,
      title: "Crypto Notes",
      category: "fullstack",
      description:
        "Secure notes-taking application using MERN stack with JWT authentication for data protection.",
      longDescription:
        "Built a comprehensive notes-taking application using the MERN stack that allows users to securely write, save, and manage their personal notes. The application features JWT-based authentication, responsive design with Bootstrap, and encrypted data storage. Users can create, edit, delete, and organize their notes with full CRUD functionality.",
      image: "/project2.jpg",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
      features: [
        "JWT Authentication",
        "Secure Data Storage",
        "CRUD Operations",
        "Responsive Design",
        "User Registration & Login",
        "Notes Organization",
      ],
      githubUrl: "https://github.com/SriramChowdaryMogalapu/crypto-notes",
      liveUrl: "https://crypto-notes.netlify.app",
      status: "Completed",
    },
    // {
    //     id: 3,
    //     title: 'Power BI Business Dashboards',
    //     category: 'frontend',
    //     description: 'Comprehensive Power BI dashboards for business intelligence and data visualization at Piramal Finance.',
    //     longDescription: 'Designed and developed comprehensive Power BI dashboards during my internship at Piramal Finance to visualize key business metrics and support data-driven decision-making processes. The dashboards provide real-time insights into business performance, financial metrics, and operational efficiency.',
    //     image: '/project3.jpg',
    //     technologies: [
    //         { name: 'Power BI', icon: FaDatabase, color: '#F2C811' },
    //         { name: 'DAX', icon: FaDatabase, color: '#FF6B6B' },
    //         { name: 'Excel', icon: FaDatabase, color: '#217346' }
    //     ],
    //     features: [
    //         'Real-time Data Visualization',
    //         'Interactive Dashboards',
    //         'Business Metrics Tracking',
    //         'Automated Reports',
    //         'KPI Monitoring',
    //         'Data-driven Insights'
    //     ],
    //     githubUrl: null,
    //     liveUrl: null,
    //     status: 'Completed'
    // },
    // {
    //     id: 4,
    //     title: 'AWS React Applications',
    //     category: 'fullstack',
    //     description: 'Two React.js frontend applications deployed on AWS Amplify for Business Intelligence Unit operations.',
    //     longDescription: 'Developed and deployed two React.js frontend applications on AWS Amplify during my internship at Piramal Finance. These applications were designed to enhance operational efficiency for the Business Intelligence Unit team, featuring modern UI/UX design, responsive layouts, and integration with backend services.',
    //     image: '/project4.jpg',
    //     technologies: [
    //         { name: 'React', icon: FaReact, color: '#61DAFB' },
    //         { name: 'AWS', icon: FaCloud, color: '#FF9900' },
    //         { name: 'JavaScript', icon: FaCode, color: '#F7DF1E' }
    //     ],
    //     features: [
    //         'AWS Amplify Deployment',
    //         'Responsive Design',
    //         'Modern UI/UX',
    //         'Backend Integration',
    //         'Performance Optimization',
    //         'Scalable Architecture'
    //     ],
    //     githubUrl: null,
    //     liveUrl: null,
    //     status: 'Completed'
    // },
    // {
    //     id: 5,
    //     title: 'Flask Backend with AWS Integration',
    //     category: 'backend',
    //     description: 'Scalable Flask backend architecture with AWS API Gateway, S3 storage, and GitHub integration.',
    //     longDescription: 'Built a robust Flask backend architecture during my internship at Piramal Finance, integrating AWS API Gateway for scalable HTTP endpoints, S3 for storage solutions, and GitHub for version control. The system was developed in collaboration with the DevOps team to ensure reliability and scalability.',
    //     image: '/project5.jpg',
    //     technologies: [
    //         { name: 'Flask', icon: FaPython, color: '#000000' },
    //         { name: 'AWS', icon: FaCloud, color: '#FF9900' },
    //         { name: 'Python', icon: FaPython, color: '#3776AB' }
    //     ],
    //     features: [
    //         'AWS API Gateway Integration',
    //         'S3 Storage Solutions',
    //         'GitHub Version Control',
    //         'RESTful API Endpoints',
    //         'DevOps Collaboration',
    //         'Scalable Architecture'
    //     ],
    //     githubUrl: null,
    //     liveUrl: null,
    //     status: 'Completed'
    // },
    {
      id: 6,
      title: "ICCINS-2025 Conference Website",
      category: "frontend",
      description:
        "Official website for International Conference organized by CSE Department, NIT Raipur.",
      longDescription:
        "Currently serving as Web Master for the ICCINS-2025 International Conference website organized by the Computer Science and Engineering Department at NIT Raipur. Responsible for website development, maintenance, content updates, and ensuring optimal user experience for conference attendees.",
      image: "/project6.jpg",
      technologies: [
        { name: "HTML/CSS", icon: FaCode, color: "#E34F26" },
        { name: "JavaScript", icon: FaCode, color: "#F7DF1E" },
        { name: "Web Design", icon: FaCode, color: "#61DAFB" },
      ],
      features: [
        "Conference Information Portal",
        "Registration System",
        "Speaker Profiles",
        "Schedule Management",
        "Responsive Design",
        "Content Management",
      ],
      githubUrl: null,
      liveUrl: "https://iccin.nitrr.ac.in",
      status: "Completed",
    },
  ];

  // Structured data for projects page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Sriram Chowdary Mogalapu",
    description:
      "Portfolio of full-stack development projects including e-KYC verification system, secure notes application, and conference website development",
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      url:
        project.liveUrl ||
        project.githubUrl ||
        "https://sriram-chowdary.netlify.app/projects",
      creator: {
        "@type": "Person",
        name: "Sriram Chowdary Mogalapu",
      },
      dateCreated: "2023-2024",
      programmingLanguage: project.technologies.map((tech) => tech.name),
      applicationCategory: "Web Application",
      keywords: project.features
        ? project.features.join(", ")
        : project.description,
    })),
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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

  const projectVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <SEO
        title="Projects - Sriram Chowdary Mogalapu | Full Stack Development Portfolio"
        description="Explore the comprehensive project portfolio of Sriram Chowdary Mogalapu featuring full-stack web applications including e-KYC verification system with blockchain integration, secure notes application using MERN stack, and ICCINS-2025 conference website. Showcasing expertise in React, Node.js, MongoDB, and modern web technologies."
        keywords="Projects,Portfolio,Full Stack Projects,React Projects,Node.js,MongoDB,e-KYC Verification,Blockchain Integration,Crypto Notes,MERN Stack,Conference Website,NIT Raipur,Web Applications,GitHub Projects,JavaScript,Express.js"
        url="https://sriram-chowdary.netlify.app/projects"
        structuredData={structuredData}
        canonical="https://sriram-chowdary.netlify.app/projects"
      />
      <motion.section
        className="projects-section section"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-description">
              A showcase of my recent work and side projects demonstrating
              various technologies and skills.
            </p>
          </motion.div>

          <motion.div className="filter-tabs" variants={itemVariants}>
            <FaFilter className="filter-icon" />
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${
                  filter === category.id ? "active" : ""
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={projectVariants}
                  layout
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <span className="view-details">View Details</span>
                    </div>
                    <div
                      className={`project-status ${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={index}
                            className="tech-icon"
                            title={tech.name}
                          >
                            <Icon style={{ color: tech.color }} />
                          </div>
                        );
                      })}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="project-links">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="project-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="modal-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="modal-close"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FaTimes />
                  </button>

                  <div className="modal-image">
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} - Detailed view of ${selectedProject.description}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="modal-info">
                    <h3>{selectedProject.title}</h3>
                    <p className="modal-description">
                      {selectedProject.longDescription}
                    </p>

                    <div className="modal-technologies">
                      <h4>Technologies Used</h4>
                      <div className="tech-list">
                        {selectedProject.technologies.map((tech, index) => {
                          const Icon = tech.icon;
                          return (
                            <div key={index} className="tech-item">
                              <Icon style={{ color: tech.color }} />
                              <span>{tech.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="modal-features">
                      <h4>Key Features</h4>
                      <ul>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-links">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FaGithub />
                        View Code
                      </a>
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
