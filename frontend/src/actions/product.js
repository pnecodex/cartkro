import Axios from "axios";
import apiCall from "../apiCall";


export const fetchProduct = product => {
    return async (dispatch) => {
        const product = await apiCall('/all-product');
        dispatch({
            type: 'FETCH_PRODUCT_LOADING',
        })

        dispatch({
            type: 'FETCH_PRODUCT_SUCCESS',
            payload: product.data.product
        })
        console.log(product);

    }
}

export const addProduct = (product) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'ADD_PRODUCT_LOADING'
            });
            // const product = {
            //     title : 'tetwet',
            //     description:'sdfasfasd',
            //     price:'23123',
            //     image:'dfasdfa.png'
            // }
            // const addproduct = await apiCall('/create_product', 'post', product)           
            const addproduct = await Axios.post('http://localhost:8000/api/create_product',product)

            return dispatch({
                type: 'ADD_PRODUCT_SUCCESS',
                payload: addproduct
            })

        } catch (error) {
            return dispatch({ type: 'ADD_PRODUCT_FAILURE', payload: error.res })
        }

    }

}

