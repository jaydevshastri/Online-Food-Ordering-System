import React from "react";
import "../assets/styles/Cart.css";
import CartItem from "./CartItem";
import { useContext, useState, useRef } from "react";
import Mycontext from "../CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

function Cart() {
  const cartContext = useContext(Mycontext);
  const [loading, setLoading] = useState(false);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const mobileRef = useRef("");
  const history = useHistory();

  const handlePlaceOrder = (e) => {
    setLoading(true);

    let firstName = firstNameRef.current.value;
    let lastName = lastNameRef.current.value;
    let email = emailRef.current.value;
    let mobile = mobileRef.current.value;

    email = email ? email : "Anonymous";
    lastName = lastName ? lastName : "Anomymous";
    mobile = mobile ? mobile : "Anonymous";
    firstName = firstName ? firstName : "Anonymous";
    const timestamp = serverTimestamp();

    const requiredDetails = {
      orderItems: cartContext.cartItems,
      orderTotal: cartContext.totalAmount,
      tableNumber: cartContext.tableNumber,
      userDetails: { email, lastName, firstName, mobile },
      orderStatus: "Pending Receive",
      timestamp,
    };

    addDoc(collection(db, "orders"), requiredDetails)
      .then((res) => {
        if (res.id) {
          cartContext.setOrderSuccessId(res.id);
          localStorage.setItem("orderSuccessId", res.id);
          history.push("/order-success");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (!cartContext.tableNumber) {
      history.push("/select-table");
    }
  }, [cartContext.tableNumber, history]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="cart-container">
              {cartContext.cartItems.length > 0 && (
                <div className="cart-heading">
                  <h2 className="your-order-heading ">Your order</h2>
                  <p className="your-order-summary-para text-muted">
                    You have {cartContext.cartItems.length} food items in your
                    order
                  </p>
                </div>
              )}

              <div className="cart-items-container">
                {cartContext.cartItems.map((item) => {
                  return <CartItem key={item.itemDetails.id} item={item} />;
                })}
                {cartContext.cartItems.length === 0 && (
                  <div className="no-item-in-cart">
                    <h4 className="not-selected">
                      Your have not selected any item from menu!
                    </h4>
                    {cartContext.tableNumber ? (
                      <Link
                        to={`/menu/${cartContext.tableNumber}`}
                        className="continue-to-menu"
                      >
                        Continue to menu
                      </Link>
                    ) : (
                      <Link to="/menu" className="continue-to-menu">
                        Continue to menu
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            {cartContext.cartItems.length > 0 && (
              <div className="order-summary-container order-summary-div">
                <h4 className="order-summary-heading">Order summary</h4>
                <div className="user-info">
                  <form>
                    <div className="form-control">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        ref={firstNameRef}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        ref={lastNameRef}
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        ref={emailRef}
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        ref={mobileRef}
                      />
                    </div>
                  </form>
                </div>
                <div className="subtotal">
                  <span className="amount">Total Amount</span>
                  <span>{cartContext.totalAmount} ₹</span>
                </div>
                <div className="payment-method">
                  <span>Payment method</span>
                  <select>
                    <option>Pay on delivery</option>
                  </select>
                </div>
                {/* <div className="apply-coupon">
                <button>Apply coupen +</button>
              </div> */}
                {loading ? (
                  <img
                    src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                    alt="Loading"
                    className="loading-btn"
                  />
                ) : (
                  <button onClick={handlePlaceOrder} className="checkout-btn">
                    <i className="fas fa-lock"></i> Place Order
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
