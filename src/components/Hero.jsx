import resumeFile from '../assets/MuhammadSaad_Resume.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">&lt;Hello World /&gt;</p>

          <h1 className="hero-name">
            I'm <span className="highlight">Muhammad Saad</span>
          </h1>

          <p className="hero-title">
            Full Stack Developer | MERN Stack | CS Student at FAST-NUCES
          </p>

          <p className="hero-tagline">
            Building real-world solutions through code
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-code" /> View My Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope" /> Contact Me
            </a>
            <a
              href={resumeFile}
              className="btn btn-outline"
              title="Download Resume"
              download="MuhammadSaad_Resume.jpg"
            >
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>4+</h3>
              <p>Projects Built</p>
            </div>
            <div className="hero-stat">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
            <div className="hero-stat">
              <h3>2027</h3>
              <p>Graduating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
