import "../assets/styles/CartItem.css";
import Mycontext from "../CartContext";
import { useContext } from "react";

function CartItem(props) {
  const itemInfo = props.item.itemDetails.data;
  const CartContext = useContext(Mycontext);

  const handleRemove = () => {
    CartContext.deleteCartItem(props.item.itemDetails.id);
  };

  const handleQuantityIncrease = () => {
    CartContext.handleQuantity(props.item.itemDetails.id, "+");
  };
  const handleQuantityDecrease = () => {
    if (props.item.itemQuantity > 1) {
      CartContext.handleQuantity(props.item.itemDetails.id, "-");
    } else {
      const res = window.confirm("Do you want to remove item from your order?");
      if (res) {
        CartContext.deleteCartItem(props.item.itemDetails.id);
      }
    }
  };

  return (
    <>
      <div className="row itemRow">
        <div className="col-lg-3 col-md-12 cart-item-image-div align-centered">
          <img
            className="img cart-item-image"
            src={itemInfo.imageUrl}
            alt={itemInfo.itemName}
          ></img>
        </div>
        <div className="col-lg-3 col-md-12 itemInfo">
          <span className="itemName">{itemInfo.itemName}</span>
          <span className="itemDescription text-muted">
            {itemInfo.description}
          </span>
        </div>
        <div className="col-lg-3 col-md-12 align-centered ">
          <div>
            <button
              onClick={handleQuantityDecrease}
              className="button increase-btn"
            >
              <i className="fas fa-minus"></i>
            </button>
            <span className="itemQuantity">{props.item.itemQuantity}</span>
            <button
              onClick={handleQuantityIncrease}
              className="button decrease-btn"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 price-div align-centered">
          <span className="itemPrice">{itemInfo.price} ₹</span>
        </div>
        <div className="col-lg-1 align-centered">
          <button className="btn-remove" onClick={handleRemove}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
