import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <h2>Aakash Gupta</h2>
        <p><strong>Career Objective:</strong> Dynamic technology professional with 15+ years of experience in software quality and automation, leveraging MBA education from IIM Kozhikode to transition into product management. Seeking to apply my unique blend of technical expertise, business acumen, and leadership skills to drive innovative product strategies and deliver exceptional user experiences. Committed to bridging the gap between technology and business objectives while fostering cross-functional collaboration and data-driven decision-making.</p>
      </div>
      <div className="cta-section">
        <h3>Let's Connect!</h3>
        <p>I'm always interested in new opportunities and collaborations. If you'd like to discuss a project or just say hello, feel free to reach out!</p>
        <div className="contact-links">
          <a href="mailto:aakashji@outlook.com" className="contact-link contact-links">
            <FaEnvelope /> aakashji@outlook.com
          </a>
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/aakashgupta-/" target="_blank" rel="noopener noreferrer" className="contact-link contact-links">
            <FaLinkedin /> LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;