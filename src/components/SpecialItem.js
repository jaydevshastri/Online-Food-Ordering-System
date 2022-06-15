import Mycontext from "../CartContext";
import { useContext } from "react";
import { useAlert } from "react-alert";

function SpecialItem(props) {
  const { itemName, imageUrl, description, price } = props.item.data;
  const CartContext = useContext(Mycontext);
  const alert = useAlert();

  const handleAdd = () => {
    CartContext.addCartItem(props.item);
    alert.success(itemName + " Included in your order!");
  };
  return (
    <>
      <div className="special">
        <div className="special-img img-01">
          <img src={imageUrl} alt="special-1" />
        </div>
        <div className="special-items spec-01">
          <h2 className="scroll-reveal" data-origin="top" data-distance="20%">
            {itemName}
          </h2>
          <span
            className="line scroll-reveal"
            data-origin="top"
            data-distance="20%"
          ></span>
          <p className="scroll-reveal" data-origin="bottom" data-distance="30%">
            {description}
          </p>
          <span
            className="scroll-reveal"
            data-origin="bottom"
            data-distance="60%"
          >
            ₹ {price}
          </span>
          <button onClick={handleAdd} className="add-item-btn">
            Add +
          </button>
        </div>
      </div>
    </>
  );
}

export default SpecialItem;
