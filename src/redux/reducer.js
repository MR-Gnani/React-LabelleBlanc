let initialState = {
    productList:[],
    selectedItem:null,
};

function reducer(state=initialState, action) {
    // action 객체에서 type, payload 속성 추출 => action.type 대신 type만 사용해도 됨.
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state, productList: payload.data};
        case "GET_PRODUCT_DETAIL":
            return{...state, selectedItem: payload.data};
        default:
            return{...state};
    }
}



export default reducer;