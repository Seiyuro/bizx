import React from "react";
import styles from "./FooterContainer.module.css";
const FooterContainer = () => {
  //Staless Component that have the footer.
  return (
    <div className={styles.main}>
      <div className={styles.text}> Copyright 2019 BizX LLC. </div>
    </div>
  );
};
export default FooterContainer;
