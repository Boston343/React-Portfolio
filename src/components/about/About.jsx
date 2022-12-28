import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <AboutCard
              icon={<FaAward />}
              desc="Experience"
              details="3+ Years Working"
            />
            <AboutCard
              icon={<HiUsers />}
              desc="Clients"
              details="300+ Worldwide"
            />
            <AboutCard
              icon={<VscFolderLibrary />}
              desc="Project"
              details="80+ Completed"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
