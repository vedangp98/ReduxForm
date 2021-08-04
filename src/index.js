import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store/store";
import showResults from "./showResults";
import Form from "./components/Form";

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Wizard Example</h2>
      <Form onSubmit={showResults} />
      <Values form="Form" />
    </div>
  </Provider>,
  document.getElementById("root")
);
