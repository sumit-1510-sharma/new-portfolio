import React from "react";
import "./Footer.css";
import s_logo from "../../assets/s_logo.jpg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={s_logo} alt="" />
          <p>
            Java Backend Web Developer | ReactJS Frontend Web Developer | React
            Native Android Dev
          </p>
        </div>
        <div className="footer-top-right">
          <a href="" className="footer-subscribe">
            Refresh
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left"></p>
        <div className="footer-bottom-right">
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
