import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#header">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
