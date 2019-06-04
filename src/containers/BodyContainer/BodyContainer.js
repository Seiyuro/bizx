import React, { Component } from "react";
import styles from "./BodyContainer.module.css";
import Images from "./ImagesContainer/ImagesCotainer";

class BodyContainer extends Component {
  //Small classComponent, could used React Hooks... maybe?...
  state = {
    images: 1
  };

  render() {
    return (
      <div className={styles.main}>
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default BodyContainer;
