export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Passionate developer with a drive to build impactful solutions
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-container fade-in-up">
            <div className="about-image-wrapper">
              <div className="about-image-inner">
                <i className="fas fa-user-astronaut" style={{ fontSize: '5rem', color: 'var(--accent)' }} />
              </div>
              <div className="about-image-decoration" />
            </div>
          </div>

          <div className="about-text fade-in-up">
            <h3>
              BSCS Student & <span style={{ color: 'var(--accent)' }}>MERN Stack Developer</span>
            </h3>
            <p>
              I'm a Computer Science student at FAST University, Chiniot-Faisalabad
              Campus (2023–2027), passionate about building full-stack web
              applications and solving real-world problems through code.
            </p>
            <p>
              My interests span web development, data structures &amp; algorithms,
              database management, and computer networking. I love exploring new
              technologies and am currently seeking internship opportunities to
              grow my skills in a professional environment.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <i className="fas fa-graduation-cap" />
                <span>BSCS @ FAST-NUCES</span>
              </div>
              <div className="about-info-item">
                <i className="fas fa-calendar" />
                <span>2023 – 2027</span>
              </div>
              <div className="about-info-item">
                <i className="fas fa-map-marker-alt" />
                <span>Faisalabad, PK</span>
              </div>
              <div className="about-info-item">
                <i className="fas fa-briefcase" />
                <span>Open to Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
