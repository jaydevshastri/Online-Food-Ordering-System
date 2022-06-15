import React from "react";

function OrderItem(props) {
  const { itemInfo } = props;
  return (
    <>
      <div className="row itemRow" style={{ marginBottom: 10 }}>
        <div className="col-lg-3 col-md-12 cart-item-image-div align-centered">
          <img
            className="img cart-item-image"
            src={itemInfo.imageUrl}
            alt={itemInfo.itemName}
          ></img>
        </div>
        <div className="col-lg-3 col-md-12 itemInfo margin-bottom">
          <span className="itemName">{itemInfo.itemName}</span>
          <span className="itemDescription text-muted">
            {itemInfo.description}
          </span>
        </div>
        <div className="col-lg-3 col-md-12 align-centered margin-bottom">
          <div>
            <span className="itemQuantity">{props.item.itemQuantity}</span>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 price-div align-centered">
          <span className="itemPrice">{itemInfo.price} ₹</span>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
