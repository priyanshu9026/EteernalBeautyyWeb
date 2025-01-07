import React from "react";
import "./Studio.css";

const Studio = () => {
  return (
    <div className="container studio-container">
      <div className="img-container flex justify-end items-center space-x-4">
        <div className="relative d-flex flex-row justify-content-center">
          <div className="m-3">
            <img
              className="rounded-xl shadow-lg transform translate-y-4"
              src="/assets/home-model1.jpg"
              alt="Model showcasing makeup style 1"
            />
          </div>

          <div className="relative">
            <img
              className="rounded-xl mt-5 shadow-lg transform -translate-y-4"
              src="/assets/home-model2.jpg"
              alt="Model showcasing makeup style 2"
            />
          </div>
        </div>

        <div className="relative d-flex float-row">
          <div className="m-3">
            <img
              className="rounded-xl shadow-lg transform translate-y-4"
              src="/assets/home-model3.jpg"
              alt="Model showcasing makeup style 3"
            />
          </div>

          <div className="relative">
            <img
              className="rounded-xl mt-5 shadow-lg transform -translate-y-5 w-95"
              src="/assets/bridal-makeup2.jpg"
              alt="Bridal makeup example"
            />
          </div>
        </div>
      </div>

      <div className="description-container m-4">
        <h5>Welcome To</h5>
        <h1>My Beauty Studio</h1>
        <p>
          We're dedicated to enhancing your natural beauty. Explore our
          services, from everyday makeup to glamorous transformations.
        </p>
        <button className="btn btn-warning">Explore Services</button>
      </div>
    </div>
  );
};

export default Studio;
