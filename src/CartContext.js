import { createContext, useState } from "react";

const Mycontext = createContext({
  cartItems: [],
  totalAmount: 0,
  tableNumber: null,
  orderSuccessId: null,
  addCartItem: (id, item) => {},
  deleteCartItem: (id) => {},
  handleQuantity: (id, operation) => {},
});

export const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tableNumber, setTableNumber] = useState(null);
  const [orderSuccessId, setOrderSuccessId] = useState(
    localStorage.getItem("orderSuccessId")
  );

  const addCartItem = (newItem) => {
    let exist = false;
    const updatedCart = cartItems.map((item) => {
      if (newItem.id === item.itemDetails.id) {
        const itemDetails = item.itemDetails;
        exist = true;
        setTotalAmount((prev) => prev + parseInt(item.itemDetails.data.price));
        return { itemDetails, itemQuantity: item.itemQuantity + 1 };
      } else {
        return item;
      }
    });
    if (!exist) {
      const updatedItem = { itemDetails: newItem, itemQuantity: 1 };
      setTotalAmount((prev) => prev + parseInt(newItem.data.price));
      setCartItems((prev) => [...prev, updatedItem]);
    } else {
      setCartItems(updatedCart);
    }
  };
  const deleteCartItem = (id) => {
    const updatedCart = cartItems.filter((item) => {
      if (item.itemDetails.id === id) {
        setTotalAmount(
          (prev) =>
            prev - parseInt(item.itemDetails.data.price) * item.itemQuantity
        );
      }
      return item.itemDetails.id !== id;
    });
    setCartItems(updatedCart);
  };

  const handleQuantity = (id, operation) => {
    const updatedCart = cartItems.map((item) => {
      const details = item.itemDetails;
      if (item.itemDetails.id === id) {
        if (operation === "+") {
          setTotalAmount(
            (prev) => prev + parseInt(item.itemDetails.data.price)
          );
          return { itemDetails: details, itemQuantity: item.itemQuantity + 1 };
        } else {
          setTotalAmount(
            (prev) => prev - parseInt(item.itemDetails.data.price)
          );
          return { itemDetails: details, itemQuantity: item.itemQuantity - 1 };
        }
      }

      return item;
    });
    setCartItems(updatedCart);
  };

  const value = {
    cartItems: cartItems,
    totalAmount: totalAmount,
    tableNumber: tableNumber,
    orderSuccessId: orderSuccessId,
    addCartItem: addCartItem,
    deleteCartItem: deleteCartItem,
    handleQuantity: handleQuantity,
    setTableNumber: setTableNumber,
    setOrderSuccessId: setOrderSuccessId,
  };

  return (
    <Mycontext.Provider value={value}>{props.children}</Mycontext.Provider>
  );
};

export default Mycontext;
