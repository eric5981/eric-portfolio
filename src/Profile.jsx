import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'
import { useRef, useState, useEffect } from 'react'

function Profile() {
  const hoverTimerRef = useRef(null)
  const countdownIntervalRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [countdown, setCountdown] = useState(3000)
  const [showBlockedTooltip, setShowBlockedTooltip] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    setCountdown(3000)
    setShowBlockedTooltip(false)
    
    const startTime = Date.now()
    
    // Update countdown every 10ms for smooth animation
    countdownIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 3000 - elapsed)
      setCountdown(remaining)
      
      if (remaining === 0) {
        clearInterval(countdownIntervalRef.current)
      }
    }, 10)
    
    // Open resume after 3 seconds
    hoverTimerRef.current = setTimeout(() => {
      const newWindow = window.open('/resume.pdf', '_blank')
      
      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowBlockedTooltip(true)
        setTimeout(() => setShowBlockedTooltip(false), 5000)
      }
      
      setIsHovering(false)
    }, 3000)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setCountdown(3000)
    
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current)
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current)
    }
  }, [])

  return (
    <div className="profile">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/profile-photo.png" alt="Eric Wong" className="avatar-image" />
          </div>
          <div className="profile-info">
            <h1>Eric Wong</h1>
            <h2 className="title">Backend Developer</h2>
            <div className="contact-info">
              <p>
                <a href="mailto:eric5981@hotmail.com" className="contact-link">
                  📧 eric5981@hotmail.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/60133533585" target="_blank" rel="noopener noreferrer" className="contact-link">
                  📱 +60 133533585
                </a>
              </p>
              <p>📍 Kuala Lumpur</p>
              <p className="linkedin-link">
                💼 <a href="https://www.linkedin.com/in/ewts/" target="_blank" rel="noopener noreferrer" data-url="linkedin.com/in/ewts">LinkedIn</a>
              </p>
            </div>
          </div>
          <div className="resume-section-header">
            <div 
              className="resume-button-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-button"
              >
                📄 View My Resume
              </a>
              <div className="resume-hint-wrapper">
                <span className="resume-hint">
                  💡 Hover 3 seconds to auto-open
                </span>
                {isHovering && (
                  <span className="resume-countdown">
                    ⏱️ {(countdown / 1000).toFixed(2)}s
                  </span>
                )}
              </div>
              {showBlockedTooltip && (
                <div className="popup-blocked-tooltip">
                  <span className="tooltip-icon">🚫</span>
                  <div className="tooltip-content">
                    <strong>Oops!</strong> Looks like your browser's popup blocker is triggered.
                    <br />
                    <small>Please click the button to view the resume instead.</small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="about-section">
          <h3>About Me</h3>
          <p>
            Passionate Backend Developer with over 3 years of experience in designing and implementing 
            scalable server-side applications and RESTful APIs. Proficient in modern backend frameworks, 
            database optimization, and background task processing. Strong problem-solver with expertise in 
            building robust, high-performance systems that handle complex business logic and large-scale 
            data processing. Committed to writing clean, maintainable code and following industry best practices.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Currently transitioning to <strong>Full-Stack Development</strong>, actively learning and building projects 
            with <strong>React</strong> and <strong>Angular</strong> to expand my frontend expertise and become a 
            well-rounded full-stack engineer.
          </p>
        </section>

        <section className="highlights-section">
          <h3>Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <span className="highlight-icon">💼</span>
              <h4>3+ Years</h4>
              <p>Work Experience</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">⭐</span>
              <h4>84/100 (B+)</h4>
              <p>Performance Reviews</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🎓</span>
              <h4>B.S. Software Engineering</h4>
              <p>TARUMT</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🏆</span>
              <h4>4 Distinctions</h4>
              <p>Academic Excellence</p>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <h3>Interests & Hobbies</h3>
          <p className="interests-intro">When I'm not coding, you can find me...</p>
          <div className="interests-grid">
            <div className="interest-card">
              <span className="interest-icon">🏸</span>
              <h4>Badminton</h4>
              <p>Smashing shuttlecocks on the court</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🏀</span>
              <h4>Basketball</h4>
              <p>Shooting hoops and staying active</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🎮</span>
              <h4>Gaming</h4>
              <p>League of Legends & Honor of Kings</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🍣</span>
              <h4>Sushi</h4>
              <p>Fresh sashimi and rolls enthusiast</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🍲</span>
              <h4>Hotpot</h4>
              <p>Enjoying steaming hotpot with friends</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🛍️</span>
              <h4>Shopping</h4>
              <p>Solo retail therapy and exploring malls</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🌳</span>
              <h4>Park Walks</h4>
              <p>Peaceful strolls in nature alone</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🎬</span>
              <h4>Movies</h4>
              <p>Watching films at the cinema</p>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Profile
