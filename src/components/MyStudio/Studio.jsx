import React from "react";
import './Studio.css'

const Studio = () => {
  return (
    <div className="studio-container">
      <div className="img-container">
        <img className="img" src="/assets/home-model1.jpg" alt="Model showcasing makeup style 1" />
        <img className="img" src="/assets/home-model2.jpg" alt="Model showcasing makeup style 2" />
        <img className="img" src="/assets/home-model3.jpg" alt="Model showcasing makeup style 3" />
        <img className="img" src="/assets/bridal-makeup2.jpg" alt="Bridal makeup example" />
      </div>
      <div className="description-container">
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
