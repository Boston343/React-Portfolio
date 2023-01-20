import React from "react";

function AboutCard(props) {
  return (
    <article className="about__card">
      <div className="about__icon">{props.icon}</div>
      <h5>{props.desc}</h5>
      <small>{props.details}</small>
    </article>
  );
}

export default AboutCard;
