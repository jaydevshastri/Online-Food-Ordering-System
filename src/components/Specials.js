import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../assets/styles/Specials.css";
import SpecialItem from "./SpecialItem";
import SpecialsDivider from "./SpecialsDivider";

function Specials() {
  const [specialItems, setSpecialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const docRef = collection(db, "Specials");
      getDocs(docRef)
        .then((snapshot) => {
          setSpecialItems(
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
  }, []);
  return (
    <>
      <section
        id="specials-grid"
        className="month-specials"
        data-scroll-reveal="enter from the bottom after 0.9s"
      >
        <div className="container">
          <h1 className="header-txt">This month specials</h1>
          <SpecialsDivider />
          {loading ? (
            <div
              className="loading-div"
              style={{ height: "200px", marginTop: "50px" }}
            >
              <img
                src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                alt="Loading..."
                className="loading-icon"
              />
            </div>
          ) : (
            <div className="specials-content">
              {specialItems.map((item) => {
                return <SpecialItem key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Specials;
