import React, { useEffect } from "react";
import styles from "./style/about.module.scss";

const About = () => {
  document.title = "About me";

  useEffect(() => {
    document.querySelectorAll(".my-skills li").forEach((li, i) => {
      li.setAttribute("data-aos-delay", i * 200);
      // li.setAttribute("data-aos-offset", "0");
    });
  }, []);

  return (
    <main className={styles.about}>
      <div className="container py-2 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="fade-down"
        >
          About Me
        </h1>
        <h2 className="text-primary mb-4" data-aos="fade-right">
          Who Am I
        </h2>
        <h4 className="px-3 text-white" data-aos="fade-in" data-aos-delay="500">
          I am a <span className="text-primary">Web developer</span> specialized
          in <span className="text-primary">Front End</span> , I worked with
          some companies before But I work also as a{" "}
          <span className="text-primary">Freelancer</span> . <br />
          Always Looking for an exciting new project to begin with .
        </h4>
        <h2
          className="text-primary mt-5"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          My Skills
        </h2>
        <h4 className="my-skills px-3 text-white">
          <ul className="row justify-content-around">
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              Html 5
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              CSS 3
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              Design
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              JavaScript
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              Bootstrap
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              Animations
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              React Js
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              Node Js
            </li>
            <li
              data-aos="zoom-in"
              data-aos-offset="0"
              className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
            >
              MySql
            </li>
          </ul>
        </h4>
      </div>
    </main>
  );
};

export default About;
