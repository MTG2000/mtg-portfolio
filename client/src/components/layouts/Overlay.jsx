import React, { useEffect } from "react";
import styles from "./style/overlay.module.scss";
import BgImage from "./programmer-min.jpg";

const Overlay = () => {
  //Makes image loading async
  useEffect(() => {
    const image = document.querySelector("img[lazySrc]");
    image.setAttribute("src", image.getAttribute("lazySrc"));
  }, []);

  return (
    <div className={styles.overlay}>
      <img lazySrc={BgImage} alt="" className="overlay-image" />
    </div>
  );
};

export default Overlay;
