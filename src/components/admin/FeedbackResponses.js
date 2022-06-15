import "../../assets/styles/ContactAdmin.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import FeedbackMessage from "./FeedbackMessage";
import { Link } from "react-router-dom";

function FeedbackResponses() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const docRef = collection(db, "Feedback");
    getDocs(docRef)
      .then((snapshot) => {
        setFeedbacks(
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

  let count = 0;
  return (
    <>
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
            <table
              style={{ marginTop: 30 }}
              className="table table-responsive table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Food Quality</th>
                  <th>Drink Quality</th>
                  <th>Service</th>
                  <th>Menu Variety</th>
                  <th>Atmosphere</th>
                  <th>Cleanliness</th>
                  <th>Suggestions</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback) => {
                  count = count + 1;
                  return (
                    <FeedbackMessage
                      count={count}
                      key={feedback.id}
                      data={feedback.data}
                    />
                  );
                })}
              </tbody>
            </table>
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
    </>
  );
}

export default FeedbackResponses;
