import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spiner.styles.jsx";

function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default Spinner;
