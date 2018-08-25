import * as React from "react";

export const Button = props => (
  <button
    type="button"
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
    style={props.style}
  >
    {props.label}
  </button>
);
