import "../assets/styles/TableSelection.css";
import tableImg from "../assets/images/table.jpeg";
import { Link } from "react-router-dom";
import SpecialsDivider from "./SpecialsDivider";
function TableSelection() {
  return (
    <div className="container">
      <h1 className="select-table">Select Your Table</h1>
      <SpecialsDivider />
      <div className="row table-select-row">
        <div className="col-lg-2 col-6">
          <Link to="/menu/1">
            <div className="table-number-div">
              <span className="table-number">1</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/2">
            <div className="table-number-div">
              <span className="table-number">2</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/3">
            <div className="table-number-div">
              <span className="table-number">3</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/4">
            <div className="table-number-div">
              <span className="table-number">4</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/5">
            <div className="table-number-div">
              <span className="table-number">5</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/6">
            <div className="table-number-div">
              <span className="table-number">6</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/7">
            <div className="table-number-div">
              <span className="table-number">7</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/8">
            <div className="table-number-div">
              <span className="table-number">8</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/9">
            <div className="table-number-div">
              <span className="table-number">9</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/10">
            <div className="table-number-div">
              <span className="table-number">10</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/11">
            <div className="table-number-div">
              <span className="table-number">11</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
        <div className="col-lg-2 col-6">
          <Link to="/menu/12">
            <div className="table-number-div">
              <span className="table-number">12</span>
            </div>
          </Link>
          <img
            src={tableImg}
            alt="table number"
            className="img img-fluid img-responsive imag-thumbnail table-img"
          />
        </div>
      </div>
    </div>
  );
}

export default TableSelection;
