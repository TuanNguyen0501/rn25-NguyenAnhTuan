import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header_app">
        <p className="header_des">The Pulpit Rock</p>
      </div>

      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-12 col-md-3">
            <ul className="left-col_items">
              <li className="left-col_des p-4">The Drive</li>
              <li className="left-col_des p-4">The Walk</li>
              <li className="left-col_des p-4">The Return</li>
              <li className="left-col_des p-4">The End</li>
            </ul>
          </div>

          <div className="col-12 col-md-6">
            <h1 className="col_title">The Walk</h1>
            <p className="col_des">
            Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.
            </p>
            <img
              width={"500px"}
              height={"300px"}
              src="https://btnmt.1cdn.vn/2022/07/21/anh-1(1).jpg"
              alt=""
            />
          </div>

          <div className="col-12 col-md-3">
            <ul className="right-col_items">
              <li className="right-col_des">What</li>
              <p>
                The pulpit Rock is a part of a mountain that looks like pupit
              </p>
              <li className="right-col_des">Where</li>
              <p>The Pulpit is in Norway</p>
              <li className="right-col_des">Price</li>
              <p>The walk is free</p>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
