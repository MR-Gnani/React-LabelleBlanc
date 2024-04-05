import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    selectedItem:null,
    isLoading: false,
    error: null,
};

// Toolkit => reducer랑 action 같은 파일에서 써~~ 뭐하러 귀찮게 2개로 나눠서 해???
export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi)=>{
   try {
    let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
   } catch (error) {
    thunkApi.rejectWithValue(error.message); // 에러 핸들링을 thunkApi를 통해 간단하게 코드작성 가능
   };  
});

export const fetchProductsDetails = createAsyncThunk('product/fetchDetails',async(id,thunkApi)=>{
    try {
        let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products/${id}`
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    };
});

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        // -- 아래 addCase로 대체함
        // getAllProducts(state, action){state.productList = action.payload.data},
        // getDetailProducts(state, action){state.selectedItem = action.payload.data},
    },
    extraReducers: (builder)=>{
        builder
        //ProductAll
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.productList = action.payload;
            state.isLoading=false;
        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.isLoading=false;
            state.error = action.payload;
        })
        //ProductDetails
        .addCase(fetchProductsDetails.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(fetchProductsDetails.fulfilled,(state,action)=>{
            state.selectedItem = action.payload;
        })
        .addCase(fetchProductsDetails.rejected, (state, action)=>{
            state.isLoading=false;
            state.error = action.payload;
        })
    }
});

// 원래 prodcutActions.js라는 파일에서 dispatch하려고 만들었지만 이제는 export할 필요 없을듯?
export const productActions = productSlice.actions 
export default productSlice.reducer;

// function reducer(state=initialState, action) {
//     // action 객체에서 type, payload 속성 추출 => action.type 대신 type만 사용해도 됨.
//     let {type, payload} = action
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state, productList: payload.data};
//         case "GET_PRODUCT_DETAIL":
//             return{...state, selectedItem: payload.data};
//         default:
//             return{...state};
//     }
// }

// export default reducer;