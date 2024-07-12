import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <h2>Aakash Gupta</h2>
        <p><strong>Profession:</strong> Software Developer</p>
        <p><strong>Email:</strong> <a href="mailto:aakash@example.com">aakash@example.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aakashgupta" target="_blank" rel="noopener noreferrer">linkedin.com/in/aakashgupta</a></p>
      </div>
      <div className="cta-section">
        <h3>Let's Connect!</h3>
        <p>I'm always interested in new opportunities and collaborations. If you'd like to discuss a project or just say hello, feel free to reach out!</p>
        <Link to="/contact/form" className="cta-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Contact;