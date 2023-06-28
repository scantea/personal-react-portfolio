import Loader from "react-loaders";
import React from "react";
import data_projects from "../Data/projects_data";
import "./index.scss";
import ProjectCard from "./ProjectCard";
import Resume from "../../assets/resume.pdf";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const onButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = Resume;
        alink.click();
      });
    });
  };

  return (
    <div>
      <h1>Work Experience and Projects</h1>
      <div className="page-wrapper">
        <Link className="flat-button" onClick={onButtonClick}>
          RESUME
        </Link>
        <div className="portfolio-page">
          <div className="projects">
            {data_projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Portfolio;
