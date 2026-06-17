function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Flask', 'SQL']

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills