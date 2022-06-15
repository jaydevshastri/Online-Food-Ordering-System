import React from "react";
import "../../assets/styles/AdminMenu.css";
import { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { Link } from "react-router-dom";

function AdminEditMenu() {
  const [loading, setLoading] = useState(false);
  const descRef = useRef();
  const itemRef = useRef();
  const priceRef = useRef();
  const ratingRef = useRef();
  const { itemId } = useParams();
  const [current, setCurrent] = useState({});
  const history = useHistory();
  const [image, setImage] = useState(null);

  const handleFilechange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const docRef = doc(db, "MenuItems", itemId);
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

    if (image) {
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

            updateDoc(docRef, requiredDetails)
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                alert(error.message);
              })
              .finally(() => {
                setLoading(false);
                history.push("/admin/menu-actions");
              });
          });
        }
      );
    } else {
      const requiredDetails = {
        description,
        itemName,
        price,
        rating,
      };

      updateDoc(docRef, requiredDetails)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
          setLoading(false);
          history.push("/admin/menu-actions");
        });
    }
  };

  useEffect(() => {
    const docRef = doc(db, "MenuItems", itemId);
    getDoc(docRef)
      .then((res) => {
        setCurrent(res.data());
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [itemId]);

  return (
    <>
      <div className="container contact-container">
        <h1 className="contact-us-heading" style={{ fontSize: "2em" }}>
          Edit Menu Items
        </h1>
        <div className="row contact-us-row">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-input">
              <label className="text-muted">Item Name</label>
              <input
                type="text"
                name="name"
                ref={itemRef}
                defaultValue={current.itemName}
                required
              />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Description</label>
              <input
                type="text"
                name="text"
                ref={descRef}
                defaultValue={current.description}
                required
              />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Price</label>
              <input
                type="text"
                name="text"
                ref={priceRef}
                defaultValue={current.price}
                required
              />
            </div>
            <div className="contact-form-input">
              <label className="text-muted">Rating</label>
              <input
                type="text"
                name="text"
                ref={ratingRef}
                defaultValue={current.rating}
                required
              />
            </div>
            <div className="contact-form-input">
              <label
                className="contact-form-input text-muted "
                style={{ width: "100%" }}
              >
                Menu Item Image
              </label>
              <span className="file-upload-info">
                * IF YOU DONT WANT TO UPDATE SKIP
              </span>
              <br />
              <input
                type="file"
                name="profile"
                onChange={handleFilechange}
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
                <button
                  style={{ backgroundColor: "blue" }}
                  type="submit"
                  className="contact-send-btn"
                >
                  Update
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
    </>
  );
}

export default AdminEditMenu;
