import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/sumit_sharma - cv.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>
          I'm Sumit Sharma <br />
        </span>
      </h1>
      <p>
        Fullstack Java Developer | Frontend with ReactJS & NextJS | Backend with
        Spring Boot & Hibernate
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <a href={resume} download="Resume" className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
