'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or want to connect? Reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-in-up">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, internship
              opportunities, or just a friendly chat about tech.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <a href="mailto:muhammadsaad5619@gmail.com">
                    muhammadsaad5619@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-item-text">
                  <h4>Phone</h4>
                  <p>+92 309 2592060</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Faisalabad, Pakistan</p>
                </div>
              </div>

              <a
                className="contact-item"
                href="https://linkedin.com/in/muhammad-saad01099329a"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item-icon">
                  <i className="fab fa-linkedin-in" />
                </div>
                <div className="contact-item-text">
                  <h4>LinkedIn</h4>
                  <p>muhammad-saad01099329a</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div style={{ color: '#ff6b6b', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                {error}
              </div>
            )}
            {sent && (
              <div style={{ color: '#51cf66', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                Your message has been sent successfully.
              </div>
            )}
            <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin" /> Sending...
                </>
              ) : sent ? (
                <>
                  <i className="fas fa-check" /> Message Sent!
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
