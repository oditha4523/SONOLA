import './RecentSection.css'

function RecentSection() {
  const recentItems = [
    {
      id: 1,
      title: 'Document',
      author: 'Mark',
      date: 'July 14, 2025',
      className: 'document'
    },
    {
      id: 2,
      title: 'Web Pages',
      author: 'Mark',
      date: 'May 14, 2025',
      className: 'webpage'
    },
    {
      id: 3,
      title: '60 Second Cut',
      author: 'Camille',
      date: 'May 17, 2025',
      className: 'video'
    },
    {
      id: 4,
      title: 'Web Pages',
      author: 'Mark',
      date: 'May 14, 2025',
      className: 'webpage-green'
    }
  ]

  return (
    <section className="recent-section">
      <div className="section-header">
        <span className="clock-icon">🕐</span>
        <span>Recents</span>
        <button className="view-all">See in projects →</button>
      </div>
      
      <div className="recent-items">
        {recentItems.map(item => (
          <div key={item.id} className="recent-item">
            <div className={`recent-thumbnail ${item.className}`}>
              <div className="preview"></div>
            </div>
            <div className="recent-info">
              <h4>{item.title}</h4>
              <p>{item.author} - {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentSection
