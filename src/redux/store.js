// src/redux/store.js
import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import disasterReducer from "./reducers";

const store = createStore(disasterReducer, applyMiddleware(thunk));

export default store;
