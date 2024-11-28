import React from "react";
import Navbars from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbars />
    <div className="bg-img">
      <div className="header-element pt-5">
      <div className=" pt-5">
        <h1 className="header-content">Eteernal beautyy Makeup Studio</h1>
        <p className="d-flex flex-row justify-content-start">
          Eteernal beautyy makeup studio is your one-stop destination for all
          your beauty needs. Our skilled artists specialize in creating stunning
          and long-lasting makeup looks for every occasion. From weddings to
          parties, we'll help you look and feel your best.
        </p>
      </div>
      <div className="pt-5 d-flex flex-row justify-content-start">
        <button className="m-2 btn btn-warning">GET GORGEOUS</button>
        <button className="m-2 btn btn-outline-primary">CONTACT NOW</button>
      </div>
      </div>
    </div>
    </>
  );
};

export default Header;
