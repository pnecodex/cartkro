import apiCall from "../apiCall";
import Cookies from 'js-cookie';
import axios from 'axios';
export const fetchAllorder = () => async (dispatch) => {
    // return async (dispatch) =>{
    try {
        // statements
        dispatch({
            type: 'FETCH_ALLORDER_LOADING',
        })
        // if (Cookies.get('token')) {
        //     console.warn('request is pass',);    
        //     const token = await Cookies.get('token');
        //     console.warn(token);
        //     const allorder = await apiCall('/allorders', 'get', token);

        // }else{
        //     console.warn('request is failed');
        // }
        var config = {
            method: 'get',
            // url:'http://localhost:4244/api/auth/alluser/:id',
            url: 'http://localhost:4244/api/allorders',

            headers: {
                // 'Authorization':`Bearer`
                'Authorization': `Bearer ${Cookies.get('token')}`,
                // ...data.getHeaders()
            },

        };
        // const productsellerdetail = await apiCall('/all-productsellerdetail');
        const allorder = await axios(config);
        dispatch({
            type: 'FETCH_ALLORDER_SUCCESS',
            payload: allorder.data.allOrders
        })
    } catch (e) {
        // statements
        return dispatch({ type: 'FETCH_ALLORDER_FAILURE' })
    }
}
export const CreateOrder = (order, ship) => async (dispatch) => {
    try {
        dispatch({
            type: 'CREATE_ORDER_LOADING',
        });
        const orders_object = {
            ship: ship,
            order: order,
        };
        const { data: { data: orders } } = await apiCall('/createorder', 'post',
            orders_object,
        );
        dispatch({
            type: 'CREATE_ORDER_SUCCESS',
            payload: orders

        });
    } catch (e) {
        return dispatch({ type: 'CREATE_ORDER_FAILURE' })
    }
}
export const addProductseller = (productsellerdetail, Cookies) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'ADD_PRODUCTSELLERDETAIL_LOADING'
            });

            var config = {
                method: 'post',
                url: 'http://localhost:4244/api/productsellerdetail',
                headers: {
                    // 'Authorization':`Bearer`
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJlbWFpbCI6ImJlZGlAZ21haWwuY29tIiwiaWF0IjoxNTk5ODI2OTA5LCJleHAiOjE1OTk5MTMzMDl9.okINtaPSaWv75oad2AKO5CRvjVArO3AvyFgM6mmxEr8',
                    // ...data.getHeaders()
                },

            };
            // const token = Cookies.get('token');
            // axios(config)
            // .then(function (response) {
            //   console.log(JSON.stringify(response.data));
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });

            ////////////////////////
            // const addproductseller = await apiCall('/productsellerdetail','post',productsellerdetail,Cookies.get('token'));
            // sessionStorage.setItem('token',addproductseller.data.token)
            // console.log('ye hai token');
            const addproductseller = await axios(config, productsellerdetail);
            console.log(addproductseller);
            // localStorage.get('token',addproductseller.data.token)
            return dispatch({
                type: 'ADD_PRODUCTSELLERDETAIL_SUCCESS',
                payload: addproductseller
            })
            return addproductseller;
        } catch (error) {
            return dispatch({ type: 'ADD_PRODUCTSELLERDETAIL_FAILURE', payload: error.res })
        }

    }

}

export const fetchUserProductseller = () => async (dispatch) => {
    // return async (dispatch) =>{
    try {
        // statements
        dispatch({
            type: 'FETCH_PRODUCTSELLERDETAIL_LOADING',
        })
        var config = {
            method: 'get',
            // url:'http://localhost:4244/api/auth/alluser/:id',
            url: 'http://localhost:4244/api/all-productsellerdetail',

            headers: {
                // 'Authorization':`Bearer`
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoibW5haGlsQGdtYWlsLmNvbSIsImlhdCI6MTU5OTg0NDY1OCwiZXhwIjoxNTk5OTMxMDU4fQ.-yPfgDrBiZxq7mJr4h5rTh09wOcMcHOaPRzp_uUnqNk',
                // ...data.getHeaders()
            },

        };
        // const productsellerdetail = await apiCall('/all-productsellerdetail');
        const allproductseller = await axios(config);
        dispatch({
            type: 'FETCH_PRODUCTSELLERDETAIL_SUCCESS',
            payload: allproductseller.data.productsellerdetail
        })
        // console.log(productsellerdetail);
    } catch (e) {
        // statements
        return dispatch({ type: 'FETCH_PRODUCTSELLER_FAILURE' })
    }
}
