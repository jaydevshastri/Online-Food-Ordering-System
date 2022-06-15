import React from "react";
import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";
import Mycontext from "../CartContext";
import { useContext } from "react";

const Navbar = () => {
  const CartContext = useContext(Mycontext);
  return (
    <>
      <div className="mx-a my-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand brand-logo">
              DigitalRestaurant
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav"></div>
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                {CartContext.tableNumber ? (
                  <Link
                    to={`/menu/${CartContext.tableNumber}`}
                    className="nav-item nav-link"
                  >
                    Menu
                  </Link>
                ) : (
                  <Link to="/select-table" className="nav-item nav-link">
                    Menu
                  </Link>
                )}
                <Link to="/feedback" className="nav-item nav-link">
                  Feedback
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
                {CartContext.orderSuccessId && (
                  <Link to="/order-success" className="nav-item nav-link">
                    Order Status
                  </Link>
                )}
                <Link to="/my-order" className="nav-item nav-link">
                  <span
                    className="your-order"
                    value={CartContext.cartItems.length}
                  >
                    Your order
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
