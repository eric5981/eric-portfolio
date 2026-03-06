import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function About() {
  return (
    <div className="about">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="about-content">
        <h1>About Us</h1>
        <p className="intro">This is a modern web application built with React + Vite.</p>
        
        <section className="features">
          <h2>Tech Stack</h2>
          <ul>
            <li>⚛️ React 19 - User Interface Library</li>
            <li>⚡ Vite - Fast Build Tool</li>
            <li>🛣️ React Router - Routing Management</li>
            <li>🎨 CSS3 - Styling</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>If you have any questions, feel free to contact us!</p>
          <p>📧 Email: example@example.com</p>
        </section>
      </div>
    </div>
  )
}

export default About
