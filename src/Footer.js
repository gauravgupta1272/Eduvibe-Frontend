import React from "react";

export const Footer = () => {
    let footstyle = {
        position : "absolute",
      
        down : "0vh",
        width : "100%"
    }
  return (
    <div className="bg-light text-success " style={footstyle}>
      <p className="text-center"> &copy; Eduvibe </p>
    </div>
  );
};