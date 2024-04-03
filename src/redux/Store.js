import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./authenticateReducer";
import reducer from "./productSlice";

// combineReducer, thunk, applyMiddleware, composeWithDevTools
// 너무 셋팅해야할게 너무 많다!!
// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// 이제 ToolKit이 알아서 다해준다!!!!!!
const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product: reducer,
    }
})

export default store;