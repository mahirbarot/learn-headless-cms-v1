import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>React CMS</h3>
            <p>Built with React and Netlify CMS for easy content management.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/admin">Admin Panel</a></li>
              <li><a href="https://www.netlifycms.org/" target="_blank" rel="noopener noreferrer">Netlify CMS Docs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>React</li>
              <li>Netlify CMS</li>
              <li>Netlify Identity</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 React CMS App. Built for content management demo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
