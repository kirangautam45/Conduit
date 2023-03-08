import React from "react";
const navData = [
  {
    title: "Home",
  },
  {
    title: "Sign In",
  },
  {
    title: "Sign Up",
  },
];

export const Header = () => {
  return (
    <div
      style={{
        top: "0px",
        backgroundColor: "white",
        display: "flex",

        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Titillium-web",
          marginRight: "32px",
          color: " #5CB85C",
          fontSize: "1.5rem",
        }}
      >
        conduit
      </div>
      {navData.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
    </div>
  );
};
