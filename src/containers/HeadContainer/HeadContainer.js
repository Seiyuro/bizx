import React from "react";
import TitleContainer from "./TitleContainer/TitleContainer";
import MiddleContainer from "./MiddleContainer/MiddleContainer";
import HomeContainer from "./HomeContainer/HomeContainer";
import styles from "./HeaderContainer.module.css";

//We add all the elements of the header.
const HeadContainer = () => {
  return (
    <header className={styles.header}>
      <TitleContainer />
      <MiddleContainer />
      <HomeContainer />
    </header>
  );
};

export default HeadContainer;
