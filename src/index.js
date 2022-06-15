import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import { ContextProvider } from "./CartContext";
import { UserContextProvider } from "./userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
