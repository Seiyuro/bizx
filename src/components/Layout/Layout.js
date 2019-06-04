import React from "react";
import Aux from "../../hoc/Aux";
import HeadContainer from "../../containers/HeadContainer/HeadContainer";
import BodyContainer from "../../containers/BodyContainer/BodyContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";

// We load the 3 main Containers
// We use the Aux to avoid use divs.
const layout = () => (
  <Aux>
    <HeadContainer />
    <BodyContainer />
    <FooterContainer />
  </Aux>
);

export default layout;
