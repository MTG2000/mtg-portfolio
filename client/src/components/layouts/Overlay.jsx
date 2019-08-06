import React from "react";
import styles from "./style/overlay.module.scss";

const Overlay = () => {
  return (
    <div className={styles.overlay}>
      <img
        src="https://drive.google.com/uc?id=1HCINISkACsGbnrMDYTi9l4ICyS87Ds_S"
        alt=""
        className="overlay-image"
      />
    </div>
  );
};

export default Overlay;
