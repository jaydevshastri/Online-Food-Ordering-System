import React from "react";
import "../../assets/styles/AdminMenu.css";
import { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { db } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

function AddSpecial() {
  const [loading, setLoading] = useState(false);
  const descRef = useRef();
  const itemRef = useRef();
  const priceRef = useRef();
  const ratingRef = useRef();
  const history = useHistory();
  const [image, setImage] = useState(null);

  const handleFilechange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const itemName = itemRef.current.value;
    const description = descRef.current.value;
    const price = priceRef.current.value;
    const rating = ratingRef.current.value;

    if (isNaN(price)) {
      alert("Please enter a valid price!");
      setLoading(false);
      return;
    }
    if (isNaN(rating)) {
      alert("Please enter a valid rating!");
      setLoading(false);
      return;
    }
    if (rating > 5) {
      alert("Rating can maximum 5 only");
      setLoading(false);
      return;
    }

    const storageRef = ref(storage, `images/${itemName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const requiredDetails = {
            description,
            imageUrl: downloadURL,
            itemName,
            price,
            rating,
          };
          addDoc(collection(db, "Specials"), requiredDetails)
            .then((res) => {
              if (res.id) {
                alert("Item successfully added in specials");
                history.push("/admin/special-actions");
              }
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setLoading(false);
            });
        });
      }
    );
  };
  return (
    <div>
      <div className="container contact-container">
        <h1 className="contact-us-heading">Add Special Item</h1>
        <div className="row contact-us-row">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label className="text-muted">Item Name</label>
              <input type="text" name="name" ref={itemRef} required />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Description</label>
              <input type="text" name="text" ref={descRef} required />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Price</label>
              <input type="text" name="text" ref={priceRef} required />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Rating</label>
              <input type="text" name="text" ref={ratingRef} required />
            </div>
            <div className="contact-form-input">
              <label
                className="contact-form-input text-muted "
                style={{ width: "100%" }}
              >
                Special Item Image
              </label>
              <input
                type="file"
                name="profile"
                onChange={handleFilechange}
                required
              ></input>
            </div>
            <div
              className="send-btn-div"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              {loading ? (
                <img
                  src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                  alt="Loading"
                  className="loading-btn"
                />
              ) : (
                <button type="submit" className="contact-send-btn">
                  Add
                </button>
              )}
              <Link
                style={{ color: "white" }}
                className="exit-nav-admin"
                to="/admin-dashboard"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSpecial;
