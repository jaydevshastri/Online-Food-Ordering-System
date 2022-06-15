import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderItem from "./OrderItem";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function OrderItemsDetails() {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [time, setTime] = useState("");

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "orders", orderId);
    getDoc(docRef)
      .then((res) => {
        setTime(res.data().timestamp.toDate());
        setUserDetails(res.data().userDetails);
        setTotal(res.data().orderTotal);
        setOrderDetails(res.data().orderItems);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {loading ? (
              <div className="loading-div">
                <img
                  src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                  alt="Loading..."
                  className="loading-icon"
                />
              </div>
            ) : (
              <div className="cart-container">
                <div className="cart-items-container-admin">
                  {orderDetails.map((item) => {
                    return (
                      <OrderItem
                        key={item.itemDetails.id}
                        item={item}
                        itemInfo={item.itemDetails.data}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 ">
            <div className="order-summary-container order-summary-div">
              <h4 className="order-summary-heading">Order summary</h4>
              <div className="user-info">
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    defaultValue={userDetails.firstName}
                    disabled
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    defaultValue={userDetails.lastName}
                    disabled
                  />
                </div>
                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    defaultValue={userDetails.email}
                    disabled
                  />
                </div>
                <div className="form-input">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    defaultValue={userDetails.mobile}
                    disabled
                  />
                </div>
              </div>
              <div className="subtotal">
                <span className="amount">Total Amount</span>
                <span>{total} ₹</span>
              </div>
              <div className="payment-method">
                <span>Payment Method</span>
                <span className="payment-method-admin">Pay on Delivery</span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  marginTop: 30,
                }}
              >
                {new Date(time).toString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItemsDetails;
