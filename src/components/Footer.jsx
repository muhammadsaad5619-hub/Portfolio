export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {year} Muhammad Saad. All rights reserved.</p>

          <div className="footer-socials">
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
            <a
              href="https://github.com/muhammadsaad5619-hub?tab=repositories"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
