import apiCall from "../apiCall";

export const addProductVariation = (addproductvariation) => async (dispatch) => {
    // return async (dispatch) =>{
    // const id = '2'

    try {
        dispatch({
            type: 'ADD_PRODUCTVARIATION_LOADING',
        })

        const res = await apiCall('/product_variation', 'post', addproductvariation);
        // const oneproductseller = await axios(config);
        dispatch({
            type: 'ADD_PRODUCTVARIATION_SUCCESS',
            payload: res.data.productVariation
        });
        console.log(res);
    } catch (e) {
        // statements
        return dispatch({ 
            type: 'ADD_PRODUCTVARIATION_FAILURE',
            payload : e
        })
    }
}
export const fetchProductVariation = (id) => async (dispatch) => {
    // return async (dispatch) =>{
    //   const id = '1'

    try {
        dispatch({
            type: 'FETCH_PRODUCTVARIATION_LOADING',
        })

        const res = await apiCall(`/product_variation_one/${id}`, 'get');
        // const oneproductseller = await axios(config);
        dispatch({
            type: 'FETCH_PRODUCTVARIATION_SUCCESS',
            payload: res.data.productVariationOne
        });
        console.log(res, 'action product images varation');
    } catch (e) {
        // statements
        return dispatch({ type: 'FETCH_PRODUCTVARIATION_FAILURE' })
    }
}
export const imagesProductVariation = (images) => async (dispatch) => {
    // return async (dispatch) =>{
    //   const id = '1'

    try {
        dispatch({
            type: 'IMAGES_PRODUCTVARIATION_LOADING',
        })

        const res = await apiCall('/seller_product_image/', 'post', images);
        // const oneproductseller = await axios(config);
        dispatch({
            type: 'IMAGES_PRODUCTVARIATION_SUCCESS',
            payload: res.data.SellerproductImage
        });
        console.log(res);
    } catch (e) {
        // statements
        return dispatch({ type: 'IMAGES_PRODUCTVARIATION_FAILURE' })
    }
}
