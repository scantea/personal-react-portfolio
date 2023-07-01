import React from "react";
import github from "../../../assets/images/github.svg";
import "./index.scss";
import { motion } from "framer-motion";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div>
      {/* <div className="projectCard__wrapper"> */}
      <motion.div
        className="card_container"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <motion.div className="card">
          <div className="projectCard__title">
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="github link"
                className="projectCard__icon"
              />
            </a>
            {name}
          </div>
          <div className="projectCard__init">
            <a href={deployed_url} rel="noopener noreferrer" target="_blank">
              <img src={image} alt={name} className="projectCard_image" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
    // </div>
  );
};

export default ProjectCard;
