import React from "react";
import styles from "./styles/card.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ img, url, tags, name, code }) => {
  const urlClasses = classNames("btn", "btn-primary", { "d-none": !url });
  const codeUrlClasses = classNames("btn btn-primary", styles.codeUrl, {
    "d-none": !code
  });
  return (
    <div
      className={`${styles.card} mx-3 my-5`}
      data-toggle="tooltip"
      title={name}
    >
      <img src={img} alt="project" />
      <a
        href={url}
        className={urlClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
      <a
        href={code}
        className={codeUrlClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon="code" />
      </a>
      <div className={`bg-primary px-2 py-2 ${styles.tags}`}>
        <h5 className="m-0 p-0">
          {JSON.parse(tags).map((tag, index) => {
            const tagClasses = classNames("badge mx-2", {
              "badge-warning": tag.toLowerCase() === "solo",
              "badge-dark": tag.toLowerCase() !== "solo"
            });
            return (
              <span className={tagClasses} key={index}>
                {tag}
              </span>
            );
          })}
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard;
