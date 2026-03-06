import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you are looking for does not exist or has been removed.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="btn-home">
            <span>🏠</span> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-back">
            <span>←</span> Go Back
          </button>
        </div>

        {/* <div className="suggestions">
          <p>You can visit these pages:</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default NotFound
