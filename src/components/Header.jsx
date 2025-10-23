import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search projects and experiences" />
      </div>
      <button className="try-pro-btn">Try Pro ⚡</button>
    </header>
  )
}

export default Header
