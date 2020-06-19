import React, { useEffect } from "react";
import styles from "./styles/overlay.module.scss";

const Overlay = () => {
  //Makes image loading async
  useEffect(() => {
    const image = document.querySelector("img[lazysrc]");
    image.setAttribute("src", image.getAttribute("lazysrc"));
  }, []);

  return (
    <div className={styles.overlay}>
      <img
        lazysrc="/static/programmer-min.jpg"
        alt=""
        className="overlay-image"
      />
    </div>
  );
};

export default Overlay;
