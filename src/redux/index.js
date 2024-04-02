import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import reducer from "./reducer";

export default combineReducers({
    auth : authenticateReducer,
    product : reducer,
});