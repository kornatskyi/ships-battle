import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import "./index.css";
import App from "./App";

/** Redux */
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
