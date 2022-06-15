import "../../assets/styles/AdminLogin.css";
import { useRef, useState } from "react";
import { useUserContext } from "../../userContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  const usernameRef = useRef("");
  const passRef = useRef("");
  const [localLoading, setLocalLoading] = useState(false);
  const { setUser, loading } = useUserContext();
  const history = useHistory();

  const signinHandler = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passRef.current.value;

    if (username && password) {
      setLocalLoading(true);
      signInWithEmailAndPassword(auth, username, password)
        .then((res) => {
          setUser(res);
          history.push("/admin-dashboard");
        })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
          setLocalLoading(false);
        });
    }
  };

  return (
    <>
      <div className="container">
        {!loading ? (
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">ADMIN PANEL</div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">USERNAME</label>
                      <input
                        type="text"
                        className="form-control"
                        ref={usernameRef}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        ref={passRef}
                      />
                    </div>

                    <div className="col-lg-12 loginbttm">
                      {localLoading ? (
                        <img
                          src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
                          alt="Loading"
                          className="loading-btn"
                        />
                      ) : (
                        <button
                          type="submit"
                          onClick={signinHandler}
                          className="btn btn-outline-primary"
                        >
                          LOGIN
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
}

export default AdminLogin;
