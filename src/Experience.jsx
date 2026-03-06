import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "SimpleTruss Sdn Bhd",
      position: "Backend Developer",
      period: "Oct 2024 - Current",
      location: "Kuala Lumpur, Malaysia (Hybrid)",
      responsibilities: [
        "Develop backend API integrate with frontend based on requirement and microservice integration in C# language and Background Job by Kafka",
        "Implemented cursor rules, code generation based on the rules",
        "Conducted code reviews to maintain code quality and consistency",
        "Skills: .NET(C#), MySQL, MongoDB, GraphQL, Restful API"
      ]
    },
    {
      id: 2,
      company: "Exact Asia Development Centre Sdn Bhd",
      position: "Software Engineer",
      period: "Dec 2023 - Sep 2024",
      location: "Kuala Lumpur, Malaysia (Hybrid)",
      responsibilities: [
        "Assisted in add some new requirement asked by the PO in C# and vb.net such as subscription module integration for payment gateway",
        "Skills: .NET(VB.NET, C#), MSSQL"
      ]
    },
    {
      id: 3,
      company: "Primal Solutions Sdn Bhd",
      position: "Programmer",
      period: "May 2023 - Nov 2023",
      location: "Sibu, Sarawak, Malaysia (Onsite)",
      responsibilities: [
        "Assisted in designing the user interface of secondary school mobile system in Dart Language and web portal in C# and vb.net language",
        "Assisted in binding the frontend to the API",
        "Skills: Dart, .NET(VB.NET, C#), MySQL"
      ]
    },
    {
      id: 4,
      company: "Primal Solutions Sdn Bhd",
      position: "Intern",
      period: "Nov 2022 - May 2023",
      location: "Sibu, Sarawak, Malaysia (Onsite)",
      responsibilities: [
        "Assisted in updating system java version",
        "Assisted in designing and develop bus tracking system in Dart Language for mobile system and web portal in C# and vb.net language",
        "Skills: Dart, .NET(VB.NET, C#), MySQL"
      ]
    },
    {
      id: 5,
      company: "VMS Solution Sdn Bhd",
      position: "Intern",
      period: "May 2019 - July 2019",
      location: "Sibu, Sarawak, Malaysia (Onsite)",
      responsibilities: [
        "Assisted in designing the system user interface of food ordering system in Adobe XD, design out the UI by using bootstrap",
        "Assisted in checking the hardware of the company store ensure that the hardware still working such as RJ45, CCTV",
        "Skills: HTML, Bootstrap, Adobe XD, Hardware"
      ]
    }
  ]

  return (
    <div className="experience">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience" className="active">Experience</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="experience-content">
        <h1>Work Experience</h1>
        <p className="subtitle">My professional journey and achievements</p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
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

export default Experience
