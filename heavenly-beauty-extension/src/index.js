import React from "react";
import ReactDOM from "react-dom"; // <-- Modify this import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.renderReactApp = function () {
  const appRoot = document.getElementById("reactAppRoot");
  const testRoot = document.getElementById("root");
  // if (appRoot) {
  //   ReactDOM.render(
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>,
  //     appRoot
  //   );
  // }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    testRoot
  );
};

window.renderReactApp();

reportWebVitals();
