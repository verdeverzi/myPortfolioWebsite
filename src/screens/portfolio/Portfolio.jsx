import { useState } from "react";
import "./Portfolio.css";
import { projects } from "./projects";

const Portfolio = () => {
  const [currIdx, setCurrIdx] = useState(null);
  const handleClick = (idx) => setCurrIdx(idx);
  const clearCurrent = () => setCurrIdx(null);

  const projectList = projects.map((project, idx) => {
    return (
      <div key={idx} className="portfolio-projects-frame">
       <h3 className="projectTitle"> {project.title} </h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
        </a>
      </div>
    );
  });

  let currentProject = currIdx >= 0 && projects[currIdx];

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
        {/* Any additional text or elements you want to include */}
      </p>
      <div className="portfolio-grid">
        {projectList}
      </div>
    </div>
  );
};

export default Portfolio;
