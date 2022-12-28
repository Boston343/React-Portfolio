import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  // state to show which nav element is selected
  const [activeNav, setActiveNav] = useState("header");

  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("header")}
        className={activeNav === "header" ? "active" : null}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : null}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : null}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("services")}
        className={activeNav === "services" ? "active" : null}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : null}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
