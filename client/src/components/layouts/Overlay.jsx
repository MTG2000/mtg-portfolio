import React, { useEffect } from "react";
import styles from "./style/overlay.module.scss";

const Overlay = () => {
  //Makes image loading async
  useEffect(() => {
    const image = document.querySelector("img[lazySrc]");
    image.setAttribute("src", image.getAttribute("lazySrc"));
  }, []);

  return (
    <div className={styles.overlay}>
      <img
        lazySrc="https://drive.google.com/uc?id=1HCINISkACsGbnrMDYTi9l4ICyS87Ds_S"
        alt=""
        className="overlay-image"
      />
    </div>
  );
};

export default Overlay;
