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
            Fullstack Java Developer | Frontend with ReactJS & NextJS | Backend
            with Spring Boot & Hibernate
          </p>
        </div>
        <div className="footer-top-right">
          <a href="" className="footer-subscribe">Refresh</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Sumit Sharma. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
