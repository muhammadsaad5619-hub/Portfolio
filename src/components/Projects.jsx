const projects = [
  {
    title: 'Job Portal System',
    icon: 'fas fa-briefcase',
    description:
      'Full-stack job portal where employers post jobs and candidates search, filter, and apply. Includes REST APIs for authentication and job management.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'Google Drive Clone',
    icon: 'fas fa-cloud',
    description:
      'Simulates core Google Drive features — file upload, folder hierarchy, and search using custom data structures.',
    tech: ['C++', 'Data Structures'],
  },
  {
    title: 'Banking Transaction System',
    icon: 'fas fa-university',
    description:
      'Relational database for bank transactions with normalization, stored procedures, and reporting queries.',
    tech: ['SQL', 'DBMS'],
  },
  {
    title: 'Network Simulation',
    icon: 'fas fa-network-wired',
    description:
      'Configured routers, switches, and devices to simulate a multi-subnet LAN/WAN environment with IP addressing and routing protocols.',
    tech: ['Cisco Packet Tracer'],
  },
  {
    title: 'Battle City — AI Tank Game',
    icon: 'fas fa-gamepad',
    description:
      'AI-driven recreation of Battle City (Tank 1990) with distinct agent architectures (Simple Reflex, Goal-Based, Model-Based Reflex, Adversarial). Features a CSP-based procedural map generator using backtracking & forward checking, BFS/A*/Greedy Best-First pathfinding, and a Minimax boss with Alpha-Beta pruning.',
    tech: ['Python', 'CSP', 'BFS', 'A*', 'Minimax', 'Alpha-Beta Pruning'],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card fade-in-up" key={p.title}>
              <div className="project-card-header">
                <div className="project-icon">
                  <i className={p.icon} />
                </div>
              </div>
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
