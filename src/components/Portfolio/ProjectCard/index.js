import React from "react";
import github from "../../../assets/images/github.svg";
import "./index.scss";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div>
      <div className="projectCard__wrapper">
        <div className="projectCard__title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github link" className="projectCard__icon" />
          </a>
          {name}
        </div>
        <div className="projectCard__init">
          <a href={deployed_url} rel="noopener noreferrer" target="_blank">
            <img src={image} alt={name} className="projectCard_image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
