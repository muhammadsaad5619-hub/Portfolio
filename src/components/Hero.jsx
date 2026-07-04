'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background profile image on the right */}
      <div className="hero-bg-image">
        <Image
          src="/pic.jpeg"
          alt="Muhammad Saad profile"
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">&lt;Hello World /&gt;</p>

          <h1 className="hero-name">
            Hi, I'm <span className="highlight">Muhammad Saad</span>
          </h1>

          <p className="hero-title">Full Stack Developer</p>

          <p className="hero-tagline">
            MERN Stack Developer & CS Student at FAST-NUCES. Passionate about building
            real-world solutions through clean, efficient, and scalable code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
            <a
              href="/MuhammadSaad_Resume.jpg"
              className="btn btn-outline"
              title="Download Resume"
              download="MuhammadSaad_Resume.jpg"
            >
              <i className="fas fa-download" /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/muhammadsaad5619-hub?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-saad01099329a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="mailto:muhammadsaad5619@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
