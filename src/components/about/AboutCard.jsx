import React from "react";

function AboutCard(props) {
  return (
    <article className="about-card">
      <div className="about-icon">{props.icon}</div>
      <h5>{props.desc}</h5>
      <small>{props.details}</small>
    </article>
  );
}

export default AboutCard;
