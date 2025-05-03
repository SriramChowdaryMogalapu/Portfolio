// CONFIGURATION - EASY TO MODIFY
const CONFIG = {
  // Personal Information - Edit these values to customize your portfolio
  name: "Sriram Chowdary Mogalapu",
  title: "Full Stack Web Developer",
  email: "mogalapusriram391@gmail.com",
  phone: "+91 9381436552",
  location: "India",
  resumeLink: "https://drive.google.com/file/d/1VaOTAAvVTEi4LSsHuHl17OoGZIAW_SnX/view?usp=drive_link",
  resumeDownloadLink: "https://drive.google.com/uc?export=download&id=1VaOTAAvVTEi4LSsHuHl17OoGZIAW_SnX",
  
  // Typing effect text options
  typingTexts: [
    "Full Stack Web Developer",
    "Explorer of Data Science",
    "Computer Science Student"
  ],
  
  // Social media links
  social: {
    github: "https://github.com/SriramChowdaryMogalapu",
    linkedin: "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/",
    instagram: "https://www.instagram.com/sriram.mogalapu/",
    facebook: "https://www.facebook.com/SriramChowdary123",
    whatsapp: "https://api.whatsapp.com/send?phone=919381436552&text=Hi!%20%20This%20is%20Sriram%20here!!%20Feel%20Free%20to%20message%20me%20for%20any%20doubts!!"
  },
  
  // Skills configuration - add or remove skills as needed
  skills: [
    {
      name: "HTML & CSS",
      icon: "fa-brands fa-html5",
      percentage: 90,
      description: "Creating responsive and accessible web interfaces"
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      percentage: 85,
      description: "Building interactive web applications"
    },
    {
      name: "React",
      icon: "fa-brands fa-react",
      percentage: 80,
      description: "Developing modern frontend applications"
    },
    {
      name: "Node.js",
      icon: "fa-brands fa-node-js",
      percentage: 75,
      description: "Building backend services and APIs"
    },
    {
      name: "Python",
      icon: "fa-brands fa-python",
      percentage: 85,
      description: "Data analysis and backend development"
    },
    {
      name: "Database",
      icon: "fa-solid fa-database",
      percentage: 80,
      description: "SQL and NoSQL database management"
    }
  ],
  
  // Projects configuration - add or remove projects as needed
  projects: [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills and projects.",
      image: "project1.jpg", // Add project images to your repository
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "https://github.com/SriramChowdaryMogalapu/Portfolio"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product management and payment integration.",
      image: "project2.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features.",
      image: "project3.jpg",
      tags: ["React", "Firebase", "Material UI"],
      demoLink: "#",
      codeLink: "#"
    }
  ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1000);
  }
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
      mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });
  }
  
  // Typing Effect
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    let currentTextIndex = 0;
    
    function updateTypingText() {
      typingElement.style.animation = 'none';
      typingElement.offsetHeight; // Trigger reflow
      typingElement.textContent = CONFIG.typingTexts[currentTextIndex];
      typingElement.style.animation = 'typing 3.5s steps(40, end), blink 0.75s step-end infinite';
      
      currentTextIndex = (currentTextIndex + 1) % CONFIG.typingTexts.length;
    }
    
    // Initial text
    updateTypingText();
    
    // Change text every 4 seconds
    setInterval(updateTypingText, 4000);
  }
  
  // Scroll to Top Button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
          mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        }
      }
    });
  });
  
  // Skills Progress Animation
  const progressBars = document.querySelectorAll('.progress');
  
  function animateProgressBars() {
    progressBars.forEach(progress => {
      const percentage = progress.getAttribute('data-percentage');
      progress.style.width = '0%';
      
      setTimeout(() => {
        progress.style.width = percentage + '%';
      }, 100);
    });
  }
  
  // Animate progress bars when they come into view
  if (progressBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('.skills-container'));
  }
  
  // Populate Skills Section
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    CONFIG.skills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card fade-in';
      
      skillCard.innerHTML = `
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <h3 class="skill-title">${skill.name}</h3>
        <p class="skill-description">${skill.description}</p>
        <div class="progress-bar">
          <div class="progress" data-percentage="${skill.percentage}"></div>
        </div>
        <p class="mt-1 text-secondary">${skill.percentage}%</p>
      `;
      
      skillsContainer.appendChild(skillCard);
    });
  }
  
  // Populate Projects Section
  const projectsContainer = document.querySelector('.projects-container');
  if (projectsContainer) {
    CONFIG.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card fade-in';
      
      // Create tags HTML
      const tagsHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
      ).join('');
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
          <div class="project-links">
            <a href="${project.demoLink}" class="project-link demo">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
            <a href="${project.codeLink}" class="project-link code">
              <i class="fas fa-code"></i> Code
            </a>
          </div>
        </div>
      `;
      
      projectsContainer.appendChild(projectCard);
    });
  }
  
  // Populate Personal Information
  document.querySelectorAll('[data-config]').forEach(element => {
    const configPath = element.getAttribute('data-config').split('.');
    let value = CONFIG;
    
    configPath.forEach(key => {
      if (value) value = value[key];
    });
    
    if (value) {
      if (element.tagName === 'A') {
        element.href = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  // Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Send email using SMTP.js
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: CONFIG.email,
        Password: "BE6ADC70400AEBC03E23307414A8B6C95F42", // Consider using environment variables for this
        To: CONFIG.email,
        From: CONFIG.email,
        Subject: "Form Submission in Portfolio",
        Body: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      }).then(message => {
        alert("Message sent successfully!");
        contactForm.reset();
      });
    });
  }
  
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      const icon = themeToggle.querySelector('i');
      icon.classList.toggle('fa-sun');
      icon.classList.toggle('fa-moon');
      
      // Save preference to localStorage
      const isDarkMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', isDarkMode);
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeToggle.querySelector('i').classList.add('fa-moon');
      themeToggle.querySelector('i').classList.remove('fa-sun');
    }
  }
  
  // Animate elements when they come into view
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      observer.observe(element);
    });
  }
});