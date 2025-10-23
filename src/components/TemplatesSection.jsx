import './TemplatesSection.css'

function TemplatesSection() {
  const templates = [
    {
      id: 1,
      title: 'Web Pages',
      description: 'Good products deserves good websites.',
      className: 'web-pages'
    },
    {
      id: 2,
      title: 'Presentations',
      description: 'Easily edit our animated templates.',
      className: 'presentations',
      content: '89%'
    },
    {
      id: 3,
      title: 'Social Media',
      description: 'Everything you need for socials.',
      className: 'social-media'
    },
    {
      id: 4,
      title: 'Sales Pitch',
      description: 'Turn your dreams into reality.',
      className: 'sales-pitch'
    }
  ]

  return (
    <section className="templates-section">
      <div className="section-header">
        <span className="star-icon">⭐</span>
        <span>For you</span>
        <button className="view-all">View all templates →</button>
      </div>
      
      <div className="template-categories">
        {templates.map(template => (
          <div key={template.id} className="template-category">
            <div className={`template-preview ${template.className}`}>
              {template.content && (
                <div className="preview-content">{template.content}</div>
              )}
            </div>
            <h3>{template.title}</h3>
            <p>{template.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TemplatesSection
