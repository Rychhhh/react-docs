import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./05-Redux ( Folder Terpisah )/Reducer/globalReducer";

// Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
