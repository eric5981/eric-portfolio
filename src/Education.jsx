import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor in Software Engineering",
      school: "Tunku Abdul Rahman University of Management and Technology (TARUMT)",
      period: "2020 - 2023",
      gpa: "CGPA 3.7472",
      location: "W.P. Kuala Lumpur",
      achievements: [
        "Achieved 4 Distinctions during academic studies",
        "Maintained consistent academic excellence throughout the program"
      ]
    },
    {
      id: 2,
      degree: "Diploma in Mobile Computing",
      school: "Methodist Pilley Institute",
      period: "2017 - 2019",
      gpa: "CGPA: 3.14",
      location: "Sibu, Sarawak",
      achievements: [
        "Completed comprehensive mobile development program",
        "Built foundation in software development and programming"
      ]
    }
  ]

  return (
    <div className="education">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education" className="active">Education</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="education-content">
        <h1>Education</h1>
        <p className="subtitle">Academic background and qualifications</p>

        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <div className="education-main">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p className="education-location">📍 {edu.location}</p>
                </div>
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                  <span className="gpa">{edu.gpa}</span>
                </div>
              </div>

              <div className="education-details">
                <h5>Achievements</h5>
                <ul>
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Education
