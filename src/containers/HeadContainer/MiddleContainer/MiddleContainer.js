import React from "react";
import styles from "./MiddleContainer.module.css";

//Small Container that use an image via placeholder.com
const MiddleContainer = () => {
  return (
    <div className={styles.middleContainer}>
      <img
        className={styles.greyContainer}
        src="https://via.placeholder.com/120x30"
        alt="placeholder"
      />
    </div>
  );
};

export default MiddleContainer;
