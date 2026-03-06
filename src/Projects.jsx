import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Clinic Appointment System",
      description: "Comprehensive healthcare management system with separate portals for patients, nurses, and doctors. Streamlines clinic operations including appointments, dispensary management, and patient records. Developed as Final Year Project (FYP).",
      tech: ["C#", "ASP.NET", "Bootstrap", "MSSQL", "RESTful API"],
      image: "🏥",
      highlights: [
        "Final Year Project (FYP) - Academic Capstone",
        "Multi-role portal system (Patient, Nurse, Doctor)",
        "Appointment scheduling & management",
        "Dispensary & medication tracking",
        "Patient medical records & history",
        "Real-time appointment notifications"
      ]
    },
    {
      id: 2,
      title: "Facility Booking System",
      description: "University facility management platform for booking study rooms, meeting rooms, and sports courts. Enables students and staff to reserve campus facilities efficiently with real-time availability tracking.",
      tech: ["C#", "ASP.NET", "Bootstrap", "MSSQL"],
      image: "🏫",
      highlights: [
        "Multi-facility support (Meeting rooms, Study rooms, Sports courts)",
        "Real-time availability calendar",
        "Booking conflict prevention",
        "User booking history & management",
        "Admin dashboard for facility oversight"
      ]
    },
    {
      id: 3,
      title: "Smart Parking System",
      description: "District-wide street parking management solution with integrated e-wallet payment system. Enables users to purchase parking time flexibly with options to extend sessions remotely.",
      tech: ["Dart", "Flutter", "MySQL", "REST API", "Payment Gateway"],
      image: "🅿️",
      highlights: [
        "E-wallet integration for seamless payments",
        "Flexible time-based parking (30 mins, 1 hour, etc.)",
        "Remote parking session extension",
        "Monthly parking pass subscription",
        "Parking fine management & payment",
        "Cross-platform mobile application (iOS & Android)"
      ]
    }
  ]

  return (
    <div className="projects">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects" className="active">Projects</Link>
          <Link to="/education">Education</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="projects-content">
        <h1>My Projects</h1>
        <p className="subtitle">Real-world applications I've built using various technologies</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>✓ {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Projects
