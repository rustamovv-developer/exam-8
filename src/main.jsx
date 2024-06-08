import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/global.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
