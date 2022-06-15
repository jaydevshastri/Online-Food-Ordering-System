import "../../assets/styles/ContactAdmin.css";
import ContactMessage from "./ContactMessage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const docRef = collection(db, "ContactUs");
    getDocs(docRef)
      .then((snapshot) => {
        setContacts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div className="loading-div">
            <img
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="Loading..."
              className="loading-icon"
            />
          </div>
        ) : (
          contacts.map((contact) => {
            return (
              <ContactMessage
                key={contact.id}
                name={contact.data.name}
                email={contact.data.email}
                message={contact.data.message}
              />
            );
          })
        )}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <Link
          style={{ color: "white" }}
          className="exit-nav-admin"
          to="/admin-dashboard"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default ContactAdmin;
