import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "../redux/index";
import { thunk } from "redux-thunk";

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;