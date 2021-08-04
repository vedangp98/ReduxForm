import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer,
});

const Store = (
  window.devToolsExtentions
    ? window.devToolsExtentions()(createStore)
    : createStore
)(reducer);

export default Store;