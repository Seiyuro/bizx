import React from "react";
import styles from "./ImagesContainer.module.css";

const Images = props => {
  // Small for loop to add multiples images to the page.
  const imagenArray = [];
  for (let i = 0; i < props.images; i++) {
    imagenArray.push(
      <figure className={styles.container} key={i}>
        <img src="https://via.placeholder.com/300x150" alt="Figure" />
        <figcaption> </figcaption>
      </figure>
    );
  }
  //We return the image or images.
  return imagenArray;
};

export default Images;
