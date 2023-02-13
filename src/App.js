import "./App.css";
import image from "./automation.jpg";
import courseTracker from "./CourseTracker.png";
import ims from "./IMS.png";
import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function project(img, url, title, dis) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div className="card" style={{ width: "20rem" }}>
        <img src={img} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{dis}</p>
          <a href={url} className="btn btn-dark">
            Project Github link
          </a>
        </div>
      </div>
    </div>
  );
}

function navBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mx-auto" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav d-flex justify-content-center">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resume
            </a>
          </li>
        </ul>
        <span class="navbar-text"></span>
      </div>
    </nav>
  );
}
function App() {
  return (
    <div>
      {navBar()}
      <div class="container" style={{ marginTop: "250px" }}>
        {/* <h1 className="typing-text">Mostafa Hamed</h1> */}

        <div class="row row align-content-center">
          {project(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Arandon_-_%C3%89glise_Saint-Cyprien.jpg/1280px-Arandon_-_%C3%89glise_Saint-Cyprien.jpg",
            "https://github.com/MostafaHamedd/Course-grade-tracker",
            "Course Tracker App",
            "An app using dart to help students track course grades and to set a target with the use of a database to store and update user’s changes."
          )}
          {project(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Arandon_-_%C3%89glise_Saint-Cyprien.jpg/1280px-Arandon_-_%C3%89glise_Saint-Cyprien.jpg",
            "https://github.com/MostafaHamedd/Inventory-Management-System",
            "Inventory Managment System",
            "An Inventory Management System app using Agile development that allows the user to customize and manage their own inventory."
          )}

          {project(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Arandon_-_%C3%89glise_Saint-Cyprien.jpg/1280px-Arandon_-_%C3%89glise_Saint-Cyprien.jpg",
            "https://github.com/MostafaHamedd/UManitoba-Course-Registration-Automation-Educational-Purposes-",
            "Automated Registration",
            "A script using Selenium to automate the process of enrolling in courses at the University of Manitoba."
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
