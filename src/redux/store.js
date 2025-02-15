import { createStore, combineReducers, applyMiddleware } from "redux";
import kahootReducer from "./kahootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const mainReducer = combineReducers({ kahootReducer });

const store = createStore(
  mainReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
