function getProducts(searchQuery){
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    };
}

function getProductDetail(id){
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type:"GET_PRODUCT_DETAIL", payload:{data}});
    };
}

export const productAction = {getProducts, getProductDetail}