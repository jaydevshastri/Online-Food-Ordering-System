import { useContext, useState, useEffect } from "react";
import Mycontext from "../CartContext";
import "../assets/styles/OrderSummary.css";
import { ListGroup } from "react-bootstrap";
import OrderStatus from "./OrderStatus";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Order() {
  const cartContext = useContext(Mycontext);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  let count = 0;
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "orders", cartContext.orderSuccessId);
    const unsub = onSnapshot(docRef, (doc) => {
      setOrder(doc.data());
    });
    setLoading(false);
    return unsub;
  }, [cartContext.orderSuccessId]);
  return (
    <>
      <div>
        {!loading ? (
          <>
            <div className="order">
              <div className="alert alert-success heading1" role="alert">
                Your order has been successfully placed!!
              </div>
              <div className="container table-responsive table-container">
                <table className="table table-bordered border-info ">
                  <thead className="heading">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ITEM</th>
                      <th scope="col">RATE</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order &&
                      order?.orderItems?.map((item) => {
                        const itemInfo = item.itemDetails.data;
                        count = count + 1;
                        return (
                          <tr key={item.itemDetails.id}>
                            <th scope="row">{count}</th>
                            <td>{itemInfo.itemName}</td>
                            <td>{itemInfo.price}</td>
                            <td>{item.itemQuantity}</td>
                            <td>{itemInfo.price * item.itemQuantity}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="totaldiv">
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Billing Amount
                  </ListGroup.Item>
                  <ListGroup.Item as="li">₹ {order?.orderTotal}</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            <div className="order-status-div">
              <OrderStatus orderStatus={order?.orderStatus} />
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
}
