import React from "react";
import footerLogo from "../../images/logo2.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="d-flex">
        <div className="right-item">
          <div>
            <h5>Privacy Policy</h5>
            <p>2021 marcomm assist</p>
          </div>
        </div>
        <div className="footer-logo">
          <img src={footerLogo} alt="footer logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
