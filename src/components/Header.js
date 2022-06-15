import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>We Believe Good Food Offer Great Smile!!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <Link to="/select-table" className="btn btn-smart">
                Order Now!!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
