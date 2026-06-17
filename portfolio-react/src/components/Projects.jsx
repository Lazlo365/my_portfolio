function Projects() {
  const projects = [
    {
      id: 1,
      icon: '🌐',
      title: 'Portfolio Website',
      description: 'A personal portfolio built with HTML, CSS and React showcasing my skills and projects.',
      tags: ['HTML', 'CSS', 'React'],
      link: '#'
    },
    {
      id: 2,
      icon: '📝',
      title: 'Coming Soon',
      description: 'A full stack web app built with React and Flask. Currently in progress.',
      tags: ['React', 'Flask', 'SQL'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects