import React from "react";

const PlainDiv = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export default PlainDiv;
