import "./App.css";
import image from "./automation.jpg";
import React, { Component } from "react";

function project() {
  return (
    <a href="https://www.google.com">
      <img className="photo" src={image} alt="pic 1" />;
    </a>
  );
}
function App() {
  return (
    <div>
      <h1 className="typing-text">Mostafa's Website..</h1>
      <div className="containerTest">
        <div className="container1"> {project()}</div>
        <div className="container1"> {project()}</div>
        <div className="container1"> {project()}</div>
        <div className="container1"> {project()}</div>
      </div>
    </div>
  );
}

export default App;
