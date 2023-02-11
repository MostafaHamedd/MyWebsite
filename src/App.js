import "./App.css";
import image from "./automation.jpg";
import courseTracker from "./CourseTracker.png";
import ims from "./IMS.png";
import React, { Component } from "react";

function project(img, url, title) {
  return (
    <a href={url}>
      <img title={title} className="photo" src={img} alt="pic 1" />
    </a>
  );
}
function App() {
  return (
    <div>
      <h1 className="typing-text">Mostafa Hamed</h1>
      <div className="containerTest">
        <div className="container1">
          {project(
            courseTracker,
            "https://github.com/MostafaHamedd/Course-grade-tracker",
            "Course Tracker"
          )}
        </div>
        <div className="container1">
          {project(
            ims,
            "https://github.com/MostafaHamedd/Inventory-Management-System",
            "IMS"
          )}
        </div>
        <div className="container1">
          {project(
            image,
            "https://github.com/MostafaHamedd/UManitoba-Course-Registration-Automation-Educational-Purposes-",
            "Auotomated Registration"
          )}
        </div>
        <div className="container1">
          {project(
            ims,
            "https://github.com/MostafaHamedd/Tellmore01.github.io",
            "Github.io"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
