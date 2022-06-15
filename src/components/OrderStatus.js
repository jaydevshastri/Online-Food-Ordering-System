import "../assets/styles/OrderStatus.css";

function OrderStatus({ orderStatus }) {
  if (orderStatus === "Order Completed") {
    localStorage.removeItem("orderSuccessId");
  }
  return (
    <div className="card">
      <div className="progress-track">
        <ul id="progressbar">
          <li
            className={
              orderStatus === "Pending Receive" ||
              orderStatus === "Order Received" ||
              orderStatus === "Payment Pending" ||
              orderStatus === "Order Completed"
                ? "step0 active "
                : "step0"
            }
            id="step1"
          >
            <span className="status-name ordered-status"> Ordered</span>
          </li>
          <li
            className={
              orderStatus === "Order Received" ||
              orderStatus === "Payment Pending" ||
              orderStatus === "Order Completed"
                ? "step0 active text-center"
                : "step0 text-center"
            }
            id="step2"
          >
            <span className="status-name received-status">Order Received</span>
          </li>
          <li
            className={
              orderStatus === "Payment Pending" ||
              orderStatus === "Order Completed"
                ? "step0 active text-right"
                : "step0 text-right"
            }
            id="step3"
          >
            <span className="status-name delivered-status">Delivered</span>
          </li>
          <li
            className={
              orderStatus === "Order Completed"
                ? "step0 active text-right"
                : "step0 text-right"
            }
            id="step4"
          >
            <span className="status-name payment-status">Payment Done</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderStatus;
