import React from "react";
import '../styles/Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Transaction Services</li>
            <li>Terms and Conditions</li>
            <li> Feedback Survey</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shopping with Us</h4>
          <ul>
            <li>Making Payments</li>
            <li> Delivery Options</li>
            <li>Buyer Protections</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4> Stay Connected </h4>
          <div className="social-icons">
            <a href="facebook.com"  className="icon-link">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="twitter.com" className="icon-link">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="instagram.com" className="icon-link">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="whatsapp.com" className="icon-link">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
         </div>
      <p>&copy; 2025 Prowess technologies. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
