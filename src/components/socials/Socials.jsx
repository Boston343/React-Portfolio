import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <a
        href="https://twitter.com/BowTiedWebReapr"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.instagram.com/bowtiedwebreaper/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a href="https://github.com/Boston343" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </>
  );
};

export default Socials;
