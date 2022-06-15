import "../assets/styles/MenuItem.css";
import Mycontext from "../CartContext";
import { useContext } from "react";
import { useAlert } from "react-alert";

function MenuItem(props) {
  const { itemName, price, description, imageUrl } = props.item.data;
  const CartContext = useContext(Mycontext);
  const alert = useAlert();

  const handleAdd = () => {
    CartContext.addCartItem(props.item);
    alert.success(itemName + " Included in your order!");
  };

  return (
    <div className="col-lg-6">
      <div className="container menu-item-container">
        <div className="row menu-row">
          <div className="col-lg-3 col-md-3 col-sm-12 left-div-menu-item">
            <img
              className="item-image img img-fluid"
              src={imageUrl}
              alt={itemName}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 middle-div-menu-item-container">
            <div className="middle-div-menu-item">
              <h4 className="item-name">{itemName}</h4>
              <span className="item-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="item-price">₹ {price}</span>
              <p className="item-description text-muted">{description}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 right-div-menu-item">
            <button onClick={handleAdd} className="add-item-btn">
              Add +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
