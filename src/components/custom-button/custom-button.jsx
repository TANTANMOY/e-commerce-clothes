import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...othersprops
}) => (
  <button
    className={`${
      inverted ? "inverted" : isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...othersprops}
  >
    {children}
  </button>
);
export default CustomButton;
