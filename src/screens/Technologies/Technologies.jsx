import React from "react";
import "./Technologies.css";
import { techs } from "./techs.jsx";

const Technologies = () => {
  const technologiesList = techs.map((tech, idx) => {
    return (
      <div key={idx} className="tech-frames">
        <img src={tech.image} alt="technology" />
        <h3>{tech.name}</h3>
      </div>
    );
  });
  return (
    <div id="technologies" className="technologies-container">
      <h1>Technologies I currently use</h1>
      <div className="tech-grid-container">{technologiesList}</div>
     
    </div>
  );
};

export default Technologies;
