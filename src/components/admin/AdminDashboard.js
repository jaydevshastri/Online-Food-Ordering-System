import React from "react";
import "../../assets/styles/AdminDashboard.css";
import { useUserContext } from "../../userContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AdminDashboard() {
  const { loading, logoutUser } = useUserContext();
  const history = useHistory();

  return (
    <>
      {!loading ? (
        <div className="container admin-profile-container">
          <div className="heading-div">
            <h1>Admin Profile</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="user-icon-div">
                <img
                  className="user-png"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Sign In"
                />
                <h3 className="user-fullname">{"Admin"}</h3>
                <button
                  className="logout-btn"
                  onClick={() => {
                    logoutUser();
                    history.push("/admin-login");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-lg-8 my-3">
              <div className="admin-links-div">
                <div className="row">
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/menu-add" className="width-100">
                      Add Menu Items
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/menu-actions" className="width-100">
                      Menu Items Actions
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/order-requests" className="width-100">
                      Orders Requests
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/contact-us" className="width-100">
                      Contact Us Responses
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/special-add" className="width-100">
                      Add Special Item
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/special-actions" className="width-100">
                      Special Menu Actions
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-12 text-center my-2">
                    <Link to="/admin/feedback-responses" className="width-100">
                      Feedback Responses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default AdminDashboard;
