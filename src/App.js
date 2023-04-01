import "./App.css";
import image from "./automation.jpg";
import courseTracker from "./course_tracker_img.png";
import ims from "./Inventory-Management-System-Pic.jpg";
import auto_reg from "./automted_reg.png";
import React, { Component } from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import resume from "./resume.pdf";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function openResume() {
  window.open("data:application/pdf;base64, " + { resume });
}
function project(img, url, title, dis, langs, tech) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <img src={img} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{dis}</p>
          <p className="card-text">
            Languages : <strong>{langs}</strong>
          </p>
          <p className="card-text">
            Technologies used : <strong>{tech}</strong>
          </p>
          <a href={url} target="_blank" className="btn btn-dark button">
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
      <div
        class="collapse navbar-collapse d-flex justify-content-center"
        id="navbarText"
      >
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://github.com/mostafaHamedd"
            >
              Github
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://www.linkedin.com/in/mostafa-hamed-393a5b215/"
            >
              LinkedIn
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://github.com/MostafaHamedd/MyWebsite/blob/master/Mostafa's%20Resume%20(April%201st).pdf"
            >
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
    <div className="mainPage">
      {navBar()}
      <h1 className="headerText">Mostafa Hamed</h1>
      {/* <div class="row row align-content-center projectHeader">
        <h2 class="text-black " style={{ marginTop: "50px" }}>
          Latest Projects
        </h2>
      </div> */}
      <hr className="projectLine"></hr>
      <div class="container" style={{ marginTop: "50px" }}>
        <div class="row row align-content-center">
          {project(
            auto_reg,
            "https://github.com/MostafaHamedd/UManitoba-Course-Registration-Automation-Educational-Purposes-",
            "Automated Registration",
            "A script using Selenium to automate the process of enrolling in courses at the University of Manitoba.",
            "Python",
            "Selenium"
          )}

          {project(
            courseTracker,
            "https://github.com/MostafaHamedd/Course-grade-tracker",
            "Course Tracker App (Andriod/IOS)",
            "An app using dart to help students track course grades and to set a target with the use of a database to store and update user’s changes.",
            "Dart",
            "Google Flutter"
          )}

          {project(
            ims,
            "https://github.com/MostafaHamedd/Inventory-Management-System",
            "Inventory Managment System",
            "An Inventory Management System app using Agile development that allows the user to customize and manage their own inventory.",
            "Java",
            "Android Studio"
          )}
        </div>
      </div>
      <footer>
        <div class="under-construction">
          <h2>Website under construction</h2>
          <p>Please check back soon for updates.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
