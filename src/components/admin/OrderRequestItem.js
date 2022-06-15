import { useState } from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function OrderRequestItem(props) {
  const { orderId } = props;
  const { item } = props;
  const [status, setStatus] = useState(item.orderStatus);

  const handleStatusChange = (e) => {
    const currentStatus = e.target.value;
    setStatus(currentStatus);
    let updateDetails = {
      orderStatus: currentStatus,
    };
    if (currentStatus === "Order Completed") {
      updateDetails = {
        orderStatus: currentStatus,
        timestamp: 1,
      };
    }
    const docRef = doc(db, "orders", orderId);
    updateDoc(docRef, updateDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const orderStatus = item.orderStatus;
  let orderStatusClass = "order-status ";
  if (orderStatus === "Pending Receive") {
    orderStatusClass = orderStatusClass + "pending-receive";
  } else if (orderStatus === "Order Received") {
    orderStatusClass = orderStatusClass + "order-received";
  } else if (orderStatus === "Payment Pending") {
    orderStatusClass = orderStatusClass + "payment-remaining";
  } else {
    orderStatusClass = orderStatusClass + "order-completed";
  }

  return (
    <div className="row order-request-row">
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Order ID : </span>
        <span className="order-id">{orderId}</span>
      </div>
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Total Order Items : </span>
        <span className="total-order-items">{item.orderItems.length}</span>
      </div>
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Order Items : </span>
        <span className="order-items-link">
          <Link to={`order-requests/${orderId}`}>Click Here</Link>
        </span>
      </div>
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Order Status : </span>
        <span style={{ textAlign: "center" }} className={orderStatusClass}>
          {item.orderStatus}
        </span>
      </div>
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Change Order Status : </span>
        <span className="select-status">
          <select value={status} onChange={handleStatusChange}>
            <option>Pending Receive</option>
            <option>Order Received</option>
            <option>Payment Pending</option>
            <option>Order Completed</option>
          </select>
        </span>
      </div>
      <div className="col-lg-2 details-item">
        <span className="order-list-heading">Table Number : </span>
        <span className="order-table-number">{item.tableNumber}</span>
      </div>
    </div>
  );
}

export default OrderRequestItem;
