import React from "react";
import "../assets/styles/Alert.css";

const buttonStyle = {
  marginLeft: "20px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "white",
};

const Alert = ({ message, options, style, close }) => {
  return (
    <div className="alert-div" style={{ ...style }}>
      {options.type === "success" && (
        <i className="fa fa-check successIconStyle" aria-hidden="true"></i>
      )}
      <span style={{ flex: 2 }}>{message}</span>
      <button onClick={close} style={buttonStyle}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Alert;
