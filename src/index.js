import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/css/tailwind.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </>
);

reportWebVitals();
