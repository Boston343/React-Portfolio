import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: img2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: img3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

// =======================================================
//              Portfolio Item Component
function PortfolioItem({ image, title, github, demo }) {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt="portfolio project 1" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}

// =======================================================
//                      Portfolio
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((props, index) => (
          <PortfolioItem key={index} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
