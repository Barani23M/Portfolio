import React, { useState, useEffect } from 'react';
import './App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} glass`}>
      <div className="container navbar-content">
        <a href="#" className="logo">Barani<span className="dot">.</span></a>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="hero section">
    <div className="container grid-cols-2 flex-center">
      <div className="hero-content animate-fade-in">
        <div className="status-badge">
          <span className="status-dot"></span>
          Seeking Entry-Level Opportunities
        </div>
        <h1>Hi, I'm <span className="text-gradient">Barani A</span></h1>
        <h2 className="role-title">Software Developer</h2>
        <p className="subtitle">
          A passionate Computer Science Engineering student equipped with strong foundations in <strong>Java, Flutter, and React</strong>. I am eager to launch my career in the IT industry, ready to tackle challenging projects and contribute to team success immediately.
        </p>
        <div className="cta-group">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
          <a href="/Portfolio/resume.pdf" className="btn btn-outline" download>Download CV</a>
        </div>
        <div className="social-links">
          <a href="mailto:jayambarani27@gmail.com" className="social-icon" title="Email">📧</a>
          <a href="tel:+919489315805" className="social-icon" title="Call">📱</a>
          <a href="https://www.linkedin.com/in/barani-a-927b41257/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">🔗</a>
          <a href="https://github.com/Barani23M" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">💻</a>
        </div>
        <p className="location-tag">📍 Dharmapuri, Tamil Nadu (Willing to Relocate)</p>
      </div>
      <div className="hero-visual flex-center">
        <div className="profile-container">
          <img src="/Portfolio/profile.jpg" alt="Barani A" className="profile-img" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="glass p-8 rounded-2xl">
        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              I am a final-year <strong>B.E. Computer Science and Engineering</strong> student at Excel Engineering College with a CGPA of <strong>7.95</strong>. My journey has been driven by a curiosity to understand how software solves real-world problems.
            </p>
            <p className="about-description mt-4">
              I have hands-on experience building web and mobile applications through internships and academic projects. I am currently <strong>seeking an entry-level software development role</strong> where I can apply my skills in <strong>Java, SQL, and Frontend Technologies</strong> while learning from experienced professionals. I am a quick learner, adaptable, and committed to writing clean, efficient code.
            </p>

            <div className="info-grid mt-8">
              <div className="info-item">
                <span className="label">Languages:</span>
                <span className="value">Tamil (Native), English (Professional)</span>
              </div>
              <div className="info-item">
                <span className="label">Soft Skills:</span>
                <span className="value">Problem Solving, Team Collaboration, Adaptability, Quick Learning</span>
              </div>
            </div>
          </div>

          <div className="education-timeline">
            <h3 className="subsection-title">Education Journey</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>B.E - Computer Science & Engineering</h4>
                <p className="institution">Excel Engineering College (2022 - 2026)</p>
                <p className="grade">CGPA: 7.95</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>HSC (12th Grade)</h4>
                <p className="institution">Vaagai Vidhiyalaya Matric Hr Sec School</p>
                <p className="grade">81%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCards = [
    { name: "React.js", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#68A063" },
    { name: "Express.js", icon: "⚡", color: "#000000" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Redux", icon: "🔄", color: "#764ABC" },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "💨", color: "#06B6D4" },
    { name: "Git & GitHub", icon: "🔀", color: "#F05032" },
    { name: "Java", icon: "☕", color: "#007396" },
    { name: "Spring Boot", icon: "🍃", color: "#6DB33F" },
    { name: "Flutter", icon: "📱", color: "#02569B" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "SQL", icon: "🗄️", color: "#4479A1" },
    { name: "GitHub Copilot", icon: "🤖", color: "#000000" },
    { name: "Antigravity", icon: "🚀", color: "#FF6B6B" }
  ];

  const interests = [
    "Full Stack Development", "Mobile App Dev",
    "UI/UX Design", "Software Testing"
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <div className="skills-grid">
          {skillCards.map((skill, index) => (
            <div key={index} className="skill-card glass" style={{'--skill-color': skill.color}}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
        <div className="skill-category mt-6">
          <h3>Areas of Interest</h3>
          <div className="skills-list">
            {interests.map(item => (
              <span key={item} className="skill-tag glass interest">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="section experience">
    <div className="container">
      <h2 className="section-title">Internships & <span className="text-gradient">Experience</span></h2>
      <div className="grid-cols-2">
        <div className="experience-card glass">
          <h3>Web Development Intern</h3>
          <p className="company">NXTLOGIC (30 Days)</p>
          <ul className="experience-list">
            <li>Built dynamic and responsive web apps using React and Angular.</li>
            <li>Developed reusable components, state management, and routing.</li>
            <li>Collaborated on UI/UX optimization and integrated RESTful APIs.</li>
          </ul>
        </div>
        <div className="experience-card glass">
          <h3>Web Development Intern</h3>
          <p className="company">CRESCENT INFOTECH (30 Days)</p>
          <ul className="experience-list">
            <li>Created responsive web interfaces using React and Angular.</li>
            <li>Implemented components, routing, and state management.</li>
            <li>Collaborated to integrate RESTful APIs and optimize user experience.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "Anti-Drug Assistant",
      desc: "A comprehensive full-stack web application developed using Flask and SQLite to aid in substance abuse recovery. Features include personalized recovery plans, meditation guides, nutritional advice, and an AI-powered chatbot for 24/7 support. Implements secure user authentication and data privacy measures.",
      tags: ["Flask", "SQLite", "Python", "AI/ML"],
      gradient: "gradient-0"
    },
    {
      title: "Pregnancy & Baby Care",
      desc: "A holistic health monitoring system built with React.js, Node.js, and Supabase. Tracks maternal health metrics during pregnancy and newborn development post-delivery. Features include automated vaccination reminders, digital health records, and growth tracking charts.",
      tags: ["React.js", "Node.js", "Supabase", "Express"],
      gradient: "gradient-1"
    },
    {
      title: "FarmSmart AI",
      desc: "A precision agriculture mobile app built with Flutter. Integrates real-time weather data, Soil Health Card analysis, and AI-driven Leaf Color Chart analysis for fertilizer recommendations. Uses a Python backend for ML model processing and Supabase for data storage.",
      tags: ["Flutter", "Python", "TensorFlow", "Supabase"],
      gradient: "gradient-2"
    },
    {
      title: "HR Portal",
      desc: "A robust Human Resource Management System developed using Spring Boot framework. Streamlines employee management, attendance tracking, and payroll processing. Features include role-based access control, leave management workflows, automated salary calculations, and RESTful API integration.",
      tags: ["Spring Boot", "Java", "MySQL", "REST API"],
      gradient: "gradient-3"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => (
  <section className="section achievements">
    <div className="container">
      <h2 className="section-title">Achievements & <span className="text-gradient">Certifications</span></h2>
      <div className="glass p-8 rounded-2xl">
        <div className="achievement-highlight">
          <h3>🏆 AppViewX Payoda Hackathon Winner</h3>
          <p>Won the hackathon by designing and developing a functional prototype under time constraints. Demonstrated expertise in full-stack development and real-time data handling.</p>
        </div>
        <div className="cert-grid mt-8">
          <ul className="cert-list">
            <li>Udemy Certificate for Programming in Java</li>
            <li>Udemy Certificate for Trending Stocks with Python, Twitter & ChatGPT</li>
            <li>GUVI Certificate for JavaScript</li>
            <li>Paper Presentation at Knowledge Institute of Technology</li>
            <li>Workshops on Web Development, PowerBI, AI & Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container flex-center column">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      <div className="contact-info glass p-8 rounded-2xl">
        <p className="contact-item"><strong>📞 Phone:</strong> +91 9489315805</p>
        <p className="contact-item"><strong>📧 Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jayambarani27@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">jayambarani27@gmail.com</a></p>
        <p className="contact-item"><strong>📍 Location:</strong> Dharmapuri, Tamil Nadu</p>
        <div className="social-links-lg mt-4">
          <a href="https://www.linkedin.com/in/barani-a-927b41257/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="https://github.com/Barani23M" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>

    </div>
  </section>
);

function App() {
  return (
    <div className="app">
      <div className="bg-glow"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
