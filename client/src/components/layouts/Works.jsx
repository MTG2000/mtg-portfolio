import React, { useContext } from "react";
import styles from "./style/works.module.scss";
import ProjectsWrapper from "../ProjectsWrapper";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import classNames from "classnames";
import { Helmet } from "react-helmet";

const Works = () => {
  document.title = "My Projects";

  const { user } = useContext(UserContext);
  const addProjectClasses = classNames(
    styles.addProject,
    "btn",
    "btn-primary",
    {
      "d-none": !user.isAuth
    }
  );
  return (
    <main className={styles.works}>
      <Helmet>
        <meta name="description" content="My latest projects ....." />
      </Helmet>
      <div className="container py-2 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="fade-down"
        >
          My Latest Projects
        </h1>
        <ProjectsWrapper />
        <Link to="/projects/add" className={addProjectClasses}>
          Add Project
        </Link>
      </div>
    </main>
  );
};

export default Works;
