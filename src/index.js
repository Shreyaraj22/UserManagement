import React from "react";
import ReactDOM from "react-dom/client";  // <-- Ensure correct import
import App from "./App";
import "./index.css"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

