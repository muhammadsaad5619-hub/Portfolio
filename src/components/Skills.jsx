const categories = [
  {
    title: 'Languages',
    icon: 'fas fa-terminal',
    skills: [
      { name: 'C++', icon: 'fas fa-code' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'SQL', icon: 'fas fa-database' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'fas fa-globe',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    skills: [
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'SQL', icon: 'fas fa-table' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'Cisco Packet Tracer', icon: 'fas fa-network-wired' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: 'fas fa-brain',
    skills: [
      { name: 'DSA', icon: 'fas fa-project-diagram' },
      { name: 'DBMS', icon: 'fas fa-database' },
      { name: 'OOP', icon: 'fas fa-cubes' },
      { name: 'Networking', icon: 'fas fa-wifi' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category fade-in-up" key={cat.title}>
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className={cat.icon} />
                </div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s.name}>
                    <i className={s.icon} /> {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
