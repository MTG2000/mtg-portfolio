import React, { useEffect } from "react";
import styles from "./style/home.module.scss";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime";
import { Helmet } from "react-helmet";

const Home = () => {
  document.title = "Mtg Dev";
  useEffect(() => {
    anime({
      targets: ".my-name  span",
      translateY: -250,
      rotateY: 180,
      opacity: 0.3,
      scaleX: 0.2,
      duration: 2000,
      direction: "reverse",
      easing: "easeInElastic(.5,1)"
    });
    anime({
      targets: ".my-work  span",
      translateX: 250,
      rotateZ: -180,
      opacity: 0,
      scaleX: 0.2,
      duration: 2000,
      direction: "reverse",
      easing: "easeInOutElastic(.5,1)"
    });
    anime({
      targets: ".my-offer  span",
      translateY: -150,
      rotateZ: -180,
      opacity: 0,
      scaleX: 0.2,
      duration: 3000,
      direction: "reverse",
      easing: "easeInOutElastic(.5,1)"
    });
  }, []);
  return (
    <main className={styles.home}>
      <Helmet>
        <meta
          name="description"
          content="I am Mtg, I am a Web Developer, Got an interesting project ??"
        />
      </Helmet>
      <div
        className="container py-2 mx-auto w-100"
        style={{ overflowX: "hidden" }}
      >
        <h1 className="my-name text-center text-white mt-6">
          I Am{" "}
          <span className="text-primary display-1 d-inline-block">MTG</span>
          <br />
        </h1>
        <h2 className="my-work text-white text-center h1 mb-6">
          I work as a
          <span className="text-primary display-4 d-inline-block mx-1">
            Web Developer
          </span>
        </h2>
        <h2 className="my-offer text-white text-center ">
          You have an interesting{" "}
          <span className="text-primary d-inline-block">Project</span> & need
          some help ??
        </h2>
        <div className="d-flex justify-content-center">
          <Link
            to="/contact"
            className={`my-btn my-5 d-inline-block mx-auto text-primary px-4 py-3 border border-primary ${
              styles.button
            }`}
          >
            Contact Me Now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
