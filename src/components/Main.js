import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import home from "./Assets/home.png";

const Main = () => {
  return (
    <div style={{ color: "#fff" }}>
      <h1>Ahahahahahahahahahahahah This is home !!</h1>
      <img src={home}></img>

      <Outlet />
    </div>
  );
};

export default Main;
