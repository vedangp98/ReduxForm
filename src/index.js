import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import showResults from ".//showResults";
import Form from "./components/Form";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Form onSubmit={showResults} />
    </div>
  </Provider>,
  document.getElementById("root")
);
