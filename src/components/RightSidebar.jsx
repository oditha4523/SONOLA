import './RightSidebar.css'

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="schedule-card">
        <h3>Schedule Posts</h3>
        <p>Instagram Content Calendar</p>
        <div className="schedule-preview">
          <div className="schedule-images"></div>
        </div>
      </div>
      
      <div className="integrations-card">
        <h3>Integrations</h3>
        <p>Connect with your favorite app</p>
        <div className="integration-icons">
          <div className="app-icon"></div>
          <div className="app-icon"></div>
          <div className="app-icon"></div>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
