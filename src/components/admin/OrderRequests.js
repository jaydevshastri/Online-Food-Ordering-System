import { useEffect, useState } from "react";
import "../../assets/styles/OrderRequests.css";
import OrderRequestItem from "./OrderRequestItem";
import { db } from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";

function OrderRequests() {
  const [orders, setOrders] = useState([]);
  const [localLoading, setlocalLoading] = useState(false);

  useEffect(() => {
    setlocalLoading(true);
    const docRef = collection(db, "orders");
    const q = query(docRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setOrders(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    setlocalLoading(false);
  }, []);
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <h1 className="order-request-heading">Order Requests</h1>
          <Link
            style={{ color: "white" }}
            className="exit-nav-admin"
            to="/admin-dashboard"
          >
            Back
          </Link>
        </div>
        {localLoading ? (
          <div className="loading-div">
            <img
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="Loading..."
              className="loading-icon"
            />
          </div>
        ) : (
          orders.map((item) => {
            return (
              <OrderRequestItem
                key={item.id}
                orderId={item.id}
                item={item.data}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default OrderRequests;
