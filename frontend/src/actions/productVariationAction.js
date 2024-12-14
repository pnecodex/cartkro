import apiCall from "../apiCall";

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

export const Variation = (variation) => async (dispatch) => {
    // return async (dispatch) =>{
    //   const id = '1'
        
        try {
            dispatch({
            type:'VARIATION_PRODUCTVARIATION_LOADING',
           })

            const res = await apiCall('/color_variation/','post',variation);
             // const oneproductseller = await axios(config);
            dispatch({
            type:'VARIATION_PRODUCTVARIATION_SUCCESS',
            payload:res
           });
            console.log(res);
        } catch(e) {
            // statements
            return dispatch({type:'VARIATION_PRODUCTVARIATION_FAILURE'})
}
}