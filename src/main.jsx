import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import EvalProvider from "./context/evalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EvalProvider>
      <App />
    </EvalProvider>
  </React.StrictMode>
);
