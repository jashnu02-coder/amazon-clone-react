import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Back to top</p>
      <div className="footer__links">
        <div className="footer__section">
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>About Us</p>
        </div>
        <div className="footer__section">
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Affiliate Program</p>
        </div>
        <div className="footer__section">
          <h4>Let Us Help You</h4>
          <p>Returns</p>
          <p>Customer Service</p>
        </div>
      </div>
      <p>© 2026 Amazon Clone</p>
    </div>
  );
}

export default Footer;