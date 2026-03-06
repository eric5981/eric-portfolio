import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Skills() {
  const [isCarouselActive, setIsCarouselActive] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleMouseEnter = () => {
    setIsClosing(false)
    setIsCarouselActive(true)
    // 阻止背景滚动
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsCarouselActive(false)
      setIsClosing(false)
      // 恢复滚动
      document.body.style.overflow = ''
    }, 400)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const software = [
    { name: "Visual Studio", icon: "/icons/visualstudio.png", type: "image", color: "#9B59D0" },
    { name: "DBeaver", icon: "/icons/dbeaver.png", type: "image", color: "#7A7A7A" },
    { name: "Cursor", icon: "/icons/cursor.png", type: "image", color: "#808080" },
    { name: "SSMS", icon: "/icons/ssms.png", type: "image", color: "#0078D4" },
    { name: "Postman", icon: "/icons/postman.png", type: "image", color: "#FF6C37" }
  ]

  const technicalSkills = [
    { name: "C#", category: "Language" },
    { name: "VB.NET", category: "Language" },
    { name: "MySQL", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "RESTful API", category: "API" },
    { name: "Dart", category: "Language" },
    { name: "MSSQL", category: "Database" }
  ]

  const languages = [
    { name: "Chinese", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Melayu", level: "Intermediate" },
    { name: "Foochow", level: "Intermediate" }
  ]

  return (
    <div className="skills">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills" className="active">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="skills-content">
        <h1>Skills & Expertise</h1>
        <p className="subtitle">My technical skills, tools, and language proficiency</p>

        <div className="skills-sections">
          {/* Software Section */}
          <section className="skill-section">
            <h2>
              <span 
                className="section-icon"
                onMouseEnter={handleMouseEnter}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                🛠️
              </span>
              <span 
                onMouseEnter={handleMouseEnter}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                Software & Tools
              </span>
            </h2>
            <div className="software-grid">
              {software.map((item, index) => (
                <div key={index} className="software-item" style={{'--icon-color': item.color}}>
                  {item.type === 'image' ? (
                    <img src={item.icon} alt={item.name} className="software-icon-img" />
                  ) : (
                    <span className="software-icon">{item.icon}</span>
                  )}
                  <span className="software-name">{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="skill-section">
            <h2>
              <span className="section-icon">💡</span>
              Technical Skills
            </h2>
            <div className="tech-skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="tech-skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="skill-section">
            <h2>
              <span className="section-icon">🌐</span>
              Languages
            </h2>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <h4>{lang.name}</h4>
                  <p>{lang.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Carousel Popup Modal - 使用 Portal 渲染到 body */}
      {isCarouselActive && createPortal(
        <div className={`carousel-modal ${isClosing ? 'closing' : ''}`}>
          <div className="carousel-backdrop" onClick={handleClose}></div>
          <div className="carousel-container">
            <button 
              className="carousel-close-btn" 
              onClick={handleClose}
              aria-label="Close carousel"
            >
              ✕
            </button>
            <h3>🛠️ Software & Tools Showcase</h3>
            <div className="carousel-track">
              {[...software, ...software, ...software].map((item, index) => (
                <div key={index} className="carousel-item" style={{'--icon-color': item.color}}>
                  {item.type === 'image' ? (
                    <img src={item.icon} alt={item.name} className="carousel-icon-img" />
                  ) : (
                    <span className="carousel-icon" style={{color: item.color}}>{item.icon}</span>
                  )}
                  <span className="carousel-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      <ScrollToTop />
    </div>
  )
}

export default Skills
