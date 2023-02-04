import { useState } from "react";
import "./Portfolio.css";
import { projects } from "./projects";

const Portfolio = () => {
  const [currIdx, setCurrIdx] = useState(null);
  const handleClick = (idx) => setCurrIdx(idx);
const clearCurrent=()=>setCurrIdx(null);
  const projectList = projects.map((project, idx) => {
    return (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className="portfolio-projects-frame"
      >
        <img src={project.image} alt={project.title} />
      </div>
    );
  });

  let currentProject = currIdx >= 0 && projects[currIdx];

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
    
      </p>
      <div className="portfolio-grid">
        

        {projectList}
      </div>
    </div>
  );
};

export default Portfolio;
