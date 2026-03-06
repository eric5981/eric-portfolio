import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
        <ThemeToggle />
      </nav>

      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard page!</p>
        
        <div className="dashboard-cards">
          <div className="card">
            <h3>User Statistics</h3>
            <p className="stat-number">1,234</p>
            <p className="stat-label">Active Users</p>
          </div>
          
          <div className="card">
            <h3>Page Views</h3>
            <p className="stat-number">5,678</p>
            <p className="stat-label">Today's Visits</p>
          </div>
          
          <div className="card">
            <h3>Articles</h3>
            <p className="stat-number">89</p>
            <p className="stat-label">Total Articles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
