import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and dedicated Fullstack Java Developer with a
              strong focus on both frontend and backend technologies. With a
              robust foundation in Java and extensive experience working with
              modern frameworks, I thrive on building dynamic, responsive, and
              scalable web applications. <br /> <br />
              <span className="frontend-expertise">
                Frontend Expertise:
              </span>{" "}
              <br />
              <ul>
                <li>ReactJs and NextJs</li>
                <li>TypeScript and JavaScript</li>
                <li>CSS and Tailwind CSS</li>
              </ul>
              <br />
              <span className="frontend-expertise">
                Backend Proficiency:
              </span>{" "}
              <br />
              <ul>
                <li>Spring and Springboot</li>
                <li>Hibernate and JPA</li>
                <li>MySQL</li>
              </ul>
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div> */}
          <p className="consider-cv">
            For more information, please consider downloading my CV
          </p>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>GITHUB CONTRIBUTIONS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>TECHNOLOGIES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
