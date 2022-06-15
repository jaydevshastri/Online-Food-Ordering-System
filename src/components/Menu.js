import { useState, useEffect } from "react";
import "../assets/styles/Menu.css";
import MenuItem from "./MenuItem";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useContext } from "react";
import Mycontext from "../CartContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { tableNumber } = useParams();
  const { setTableNumber, cartItems } = useContext(Mycontext);

  useEffect(() => {
    setLoading(true);
    setTableNumber(tableNumber);
    const fetchData = async () => {
      const docRef = collection(db, "MenuItems");
      getDocs(docRef)
        .then((snapshot) => {
          setMenuItems(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [tableNumber, setTableNumber]);

  return (
    <>
      {loading ? (
        <div className="loading-div">
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="Loading..."
            className="loading-icon"
          />
        </div>
      ) : (
        <div className="container">
          <div className="menu-heading-div">
            <h1 className="menu-heading">Our Menu</h1>
            <Link to="/my-order" className="link-order-menu">
              <span className="your-order" value={cartItems.length}>
                Checkout
              </span>
            </Link>
          </div>
          <div className="row menu-page-menu-row">
            {menuItems.map((item) => {
              return <MenuItem key={item.id} itemId={item.id} item={item} />;
            })}
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Menu;
