import { useRef, useState } from "react";
import "../assets/styles/Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const requiredDetails = { name, email, message };

    console.log(name);

    addDoc(collection(db, "ContactUs"), requiredDetails)
      .then((res) => {
        if (res.id) {
          alert("We will revert back to you soon, stay connected!");
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="container contact-container">
        <h1 className="contact-us-heading">Contact Us</h1>
        <div className="row contact-us-row">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label className="text-muted">Your Name</label>
              <input type="text" name="name" ref={nameRef} required />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Email</label>
              <input type="email" name="email" ref={emailRef} required />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Message</label>
              <textarea rows="5" ref={messageRef} required></textarea>
            </div>
            <div className="send-btn-div">
              {loading ? (
                <img
                  src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                  alt="Loading"
                  className="loading-btn"
                />
              ) : (
                <button type="submit" className="contact-send-btn">
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
