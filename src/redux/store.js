import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./reducer/fetchReducer";

let store=createStore(fetchReducer, applyMiddleware(thunk))

export default store