import React from "react";


export const Card = ({ className = "", ...props }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
    {...props}
  />
);


export const CardContent = ({ className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

export default Card;
