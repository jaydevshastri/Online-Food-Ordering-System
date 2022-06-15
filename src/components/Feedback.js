import React from "react";
import { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Feedback() {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const foodRef = useRef();
  const drinkRef = useRef();
  const serviceRef = useRef();
  const menuRef = useRef();
  const atmosphereRef = useRef();
  const cleanRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const food = foodRef.current.value;
    const drink = drinkRef.current.value;
    const service = serviceRef.current.value;
    const menu = menuRef.current.value;
    const atmosphere = atmosphereRef.current.value;
    const cleanliness = cleanRef.current.value;
    const suggestion = messageRef.current.value;

    const requiredDetails = {
      name,
      email,
      food,
      drink,
      service,
      menu,
      atmosphere,
      cleanliness,
      suggestion,
    };

    //console.log(foods);
    addDoc(collection(db, "Feedback"), requiredDetails)
      .then((res) => {
        if (res.id) {
          alert("Thanks for your feedback!");
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
    <div>
      <div className="container contact-container">
        <h1 className="contact-us-heading">Feedback Form</h1>

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
            <div className="selectContainer">
              <div className="contact-form-input">
                <label className="text-muted">Food Quality</label>
                <select ref={foodRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="contact-form-input">
                <label className="text-muted">Drink Quality</label>
                <select name="cars" ref={drinkRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="contact-form-input">
                <label className="text-muted">Service</label>
                <select ref={serviceRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
            </div>

            <div className="selectContainer1">
              <div className="contact-form-input">
                <label className="text-muted">Menu Variety</label>
                <select ref={menuRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="contact-form-input">
                <label className="text-muted">Atmosphere</label>
                <select ref={atmosphereRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="contact-form-input">
                <label className="text-muted">Cleanliness</label>
                <select ref={cleanRef} required>
                  <option value="null" selected disabled hidden>
                    Select an Option
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
            </div>

            <div className="contact-form-input">
              <label className="text-muted">
                Suggestions or Comments for us
              </label>
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
    </div>
  );
}
