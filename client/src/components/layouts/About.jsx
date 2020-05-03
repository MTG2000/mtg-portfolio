import React, { useEffect } from "react";
import styles from "./style/about.module.scss";

const frontendSkills = [
  "ReactJs",
  "Redux",
  "VueJs",
  "MobX",
  "GraphQl",
  "JavaScript",
  "Material UI",
  "Bootstrap",
  "Html & Css",
];
const backendSkills = [
  "NodeJs",
  "Asp.Net Core",
  "GraphQl",
  "MySql",
  "MongoDB",
  "Wordpress",
];

const About = () => {
  document.title = "About me";

  useEffect(() => {
    document.querySelectorAll(".my-skills li").forEach((li, i) => {
      li.setAttribute("data-aos-delay", i * 0);
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
        <h4
          className="px-3 text-white"
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          I am a <span className="text-primary">Web developer</span> specialized
          in <span className="text-primary">Front End</span> , I worked with
          some companies & I also work as a{" "}
          <span className="text-primary">Freelancer</span> . <br />
          Always Looking for an exciting new project to begin with .
        </h4>
        <h2
          className="text-primary mt-5"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          Back-end Skills
        </h2>
        <h4 className="my-skills px-3 text-white mb-5">
          <ul className="row justify-content-around">
            {backendSkills.map((skill) => (
              <li
                data-aos="zoom-in"
                data-aos-offset="0"
                className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </h4>
        <h2
          className="text-primary mt-5"
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="0"
        >
          Front-end Skills
        </h2>
        <h4 className="my-skills px-3 text-white">
          <ul className="row justify-content-around">
            {frontendSkills.map((skill) => (
              <li
                data-aos="zoom-in"
                data-aos-offset="0"
                className="col-lg-3 mx-2 pb-3 my-3 h-text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </h4>
      </div>
    </main>
  );
};

export default About;
