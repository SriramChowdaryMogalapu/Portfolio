import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import Typed from "typed.js";
import SEO from "../components/SEO";
import "./Home.css";

const Home = () => {
  const canvasRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#00d4ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Initialize Typed.js
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "Associate Data Solution Architect",
          "Data Science Enthusiast",
          "ReactJs Developer",
          "Competitive Programmer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
      });

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        typed.destroy();
      };
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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
    { icon: SiLeetcode, url: "https://leetcode.com/u/mSrc", label: "LeetCode" },
    {
      icon: SiCodechef,
      url: "https://www.codechef.com/users/sriram333",
      label: "CodeChef",
    },
  ];

  // Structured data for home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sriram Chowdary Mogalapu",
    url: "https://sriram-chowdary.netlify.app",
    image: "https://sriram-chowdary.netlify.app/logo.webp",
    description:
      "Associate Data Solution Architect at Piramal Finance, Full Stack Developer, Data Science Enthusiast, and Competitive Programmer",
    jobTitle: "Associate Data Solution Architect",
    worksFor: {
      "@type": "Organization",
      name: "Piramal Finance",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology Raipur",
    },
    sameAs: [
      "https://github.com/SriramChowdaryMogalapu",
      "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/",
      "https://leetcode.com/u/mSrc",
      "https://www.codechef.com/users/sriram333",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React.js",
      "Data Science",
      "Python",
      "JavaScript",
      "Flask",
      "Machine Learning",
      "Competitive Programming",
    ],
  };

  return (
    <>
      <SEO
        title="Sriram Chowdary Mogalapu - Full Stack Developer & Data Solution Architect"
        description="B.Tech CSE graduate from NIT Raipur, currently working as Associate Data Solution Architect at Piramal Finance. Expert in full-stack development, data science, and competitive programming."
        keywords="Sriram Chowdary Mogalapu,Full Stack Developer,Data Solution Architect,React Developer,Data Science,NIT Raipur,Piramal Finance,Portfolio,Competitive Programming,LeetCode,Python,JavaScript"
        url="https://sriram-chowdary.netlify.app"
        structuredData={structuredData}
        canonical="https://sriram-chowdary.netlify.app"
      />
      <motion.section
        className="home-section"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <canvas ref={canvasRef} className="particles-canvas" />

        <div className="home-container">
          <div className="home-content">
            <motion.div className="greeting" variants={itemVariants}>
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1 className="name" variants={itemVariants}>
              <span className="name-text">Sriram Chowdary</span>
              <br />
              <span className="surname">Mogalapu</span>
            </motion.h1>

            <motion.div className="role-container" variants={itemVariants}>
              <span className="role-prefix">I'm a </span>
              <span className="role-typed">
                <span ref={typedRef}></span>
              </span>
            </motion.div>

            <motion.p className="description" variants={itemVariants}>
              B.Tech CSE graduate from NIT Raipur with 9.14 CPI. Currently
              working as Associate Data Solution Architect at Piramal Finance,
              building advanced data solutions, React applications and
              comprehensive Flask architectures. Passionate about full-stack
              development, data science, and competitive programming with
              LeetCode rating of 1586.
            </motion.p>

            <motion.div className="cta-buttons" variants={itemVariants}>
              <Link to="/projects" className="btn-primary">
                View My Work
                <FaArrowRight />
              </Link>
              <a
                href="/Mogalapu_SriramChowdary_Resume.pdf"
                download
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download CV
              </a>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div className="home-image" variants={itemVariants}>
            <div className="image-container">
              <div className="image-bg"></div>
              <img
                src="/photo1.JPG"
                alt="Sriram Chowdary Mogalapu"
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
