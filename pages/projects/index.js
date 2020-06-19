import React from "react";
import styles from "../../components/styles/works.module.scss";
import ProjectsWrapper from "../../components/ProjectsWrapper";
import Link from "next/link";
import Head from "next/head";
import classNames from "classnames";
import Axios from "axios";
import cookie from "cookie";

const Projects = ({ projects, isAuth }) => {
  const addProjectClasses = classNames(
    styles.addProject,
    "btn",
    "btn-primary",
    {
      "d-none": !isAuth,
    }
  );
  return (
    <main className={styles.works}>
      <Head>
        <title>My Projects</title>
      </Head>
      >
      <div className="container py-2 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="fade-down"
        >
          My Latest Projects
        </h1>
        <ProjectsWrapper projects={projects} />
        <Link href="/projects/add">
          <a className={addProjectClasses}>Add Project</a>
        </Link>
      </div>
    </main>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { accessToken } = cookie.parse(context.req.headers.cookie || "");

    const result = await Axios.get("https://mtgdev.herokuapp.com/api/projects");

    if (result.data.success) {
      const data = await result.data.projects;
      return {
        props: {
          projects: data,
          isAuth: accessToken || "",
        }, // will be passed to the page component as props
      };
    } else {
      console.log("Not able to get data");
      return {
        props: {},
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default Projects;
