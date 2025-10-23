import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill="#6366f1"/>
        </svg>
        <span className="logo-text">SONOLA</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-item active">
          <span className="icon">🏠</span>
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📁</span>
          <span>Projects</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📋</span>
          <span>Templates</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📤</span>
          <span>Uploads</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">⋯</span>
          <span>More</span>
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar
