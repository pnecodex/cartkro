import apiCall from "../apiCall";
import Cookies from 'js-cookie';
import axios from 'axios';
import { Base64,decode} from "js-base64";
export const fetchUserProduct = () => async (dispatch) => {
        // return async (dispatch) =>{
            try {
                // statements
                dispatch({
                type:'FETCH_PRODUCTSELLERDETAIL_LOADING',
               })
                const productsellerdetail = await  apiCall('/all-product');
                dispatch({
                type:'FETCH_PRODUCTSELLERDETAIL_SUCCESS',
                payload:productsellerdetail.data.product
                // payload: Base64.encode(productsellerdetail.data.productsellerdetail)
               })
                console.log(productsellerdetail);
            } catch(e) {
                // statements
                return dispatch({type:'FETCH_PRODUCTSELLER_FAILURE'})
            }
        }

export const addProductseller = (productsellerdetail,Cookies) =>{
        return async dispatch =>{
            try {
                dispatch({
                    type:'ADD_PRODUCTSELLERDETAIL_LOADING'
                });

                // var config = {
                //   method: 'post',
                //   url: 'http://localhost:4244/api/productsellerdetail',
                //    headers: {
                //     // 'Authorization':`Bearer`
                //      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibW5haGlsQGdtYWlsLmNvbSIsImlhdCI6MTYwMDIzMjE2MSwiZXhwIjoxNjAwMzE4NTYxfQ.ujr0Hs20mPwYpOiUPSA0_glQ_1oLIIIDFeIR9CAG-f0',
                //     // ...data.getHeaders()
                //   },

                //  };
                // const token = Cookies.get('token');
                // axios(config)
                // .then(function (response) {
                //   console.log(JSON.stringify(response.data));
                // })
                // .catch(function (error) {
                //   console.log(error);
                // });

                ////////////////////////
                const addproductseller = await apiCall('/productsellerdetail','post',productsellerdetail,Cookies.get('token'));
                // sessionStorage.setItem('token',addproductseller.data.token)
                // console.log('ye hai token');
                // const addproductseller = await axios(config,productsellerdetail);
                console.log(addproductseller);
                    // localStorage.get('token',addproductseller.data.token)
              return dispatch({
                    type:'ADD_PRODUCTSELLERDETAIL_SUCCESS',
                    payload:addproductseller
                })
              return addproductseller;
            } catch (error) {
                return dispatch({ type: 'ADD_PRODUCTSELLERDETAIL_FAILURE', payload: error.res})
            }

        }

}

export const fetchUserProductseller = () => async (dispatch) => {
        // return async (dispatch) =>{
            try {
                // statements
                dispatch({
                type:'FETCH_PRODUCTSELLERDETAIL_LOADING',
               })
                // var config = {
                //   method: 'get',
                //   // url:'http://localhost:4244/api/auth/alluser/:id',
                //   url: 'http://localhost:4244/api/all-productsellerdetail',

                //    headers: {
                //     // 'Authorization':`Bearer`
                //      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibW5haGlsQGdtYWlsLmNvbSIsImlhdCI6MTYwMDIzMjE2MSwiZXhwIjoxNjAwMzE4NTYxfQ.ujr0Hs20mPwYpOiUPSA0_glQ_1oLIIIDFeIR9CAG-f0',
                //     // ...data.getHeaders()
                //   },

                //  };
                const allproductseller = await apiCall('/all-product','get',null,Cookies.get('token',));
                // const allproductseller = await apiCall('/all_product','get',null,Cookies.get('token',));
                //  const allproductseller = await axios(config);
                dispatch({
                type:'FETCH_PRODUCTSELLERDETAIL_SUCCESS',
                payload:allproductseller.data.product
               })
                // console.log(productsellerdetail);
            } catch(e) {
                // statements
                return dispatch({type:'FETCH_PRODUCTSELLERDETAIL_FAILURE'})
    }
}

export const fetchOneProductseller = (id) => async (dispatch) =>{
        //   const id =2

            try {
                dispatch({
                type:'FETCH_ONE_PRODUCTSELLERDETAIL_LOADING',
               })

                const res = await apiCall(`/one-productsellerdetail/${id}`,'get');
                 // const oneproductseller = await axios(config);
                 console.log(res);
                dispatch({
                    type:'FETCH_ONE_PRODUCTSELLERDETAIL_SUCCESS',
                    payload:res.data.Oneproductsellerdetail
               })
               return res;
                // console.log(productsellerdetail);
            } catch(e) {
                // statements
                return dispatch({type:'FETCH_ONE_PRODUCTSELLERDETAIL_FAILURE'})
    }
}

export const ProductsellerSearch = (Searching) => async (dispatch) => {
        // return async (dispatch) =>{
          // const id = '2'
            
            try {
                dispatch({
                type:'SEARCH_PRODUCTSELLERDETAIL_LOADING',
               })

                const res = await apiCall('/productsearch','post',Searching);
                 // const oneproductseller = await axios(config);
                dispatch({
                type:'SEARCH_PRODUCTSELLERDETAIL_SUCCESS',
                payload:res.data.productsellerdetailSearch
               });
                console.log(res);
            } catch(e) {
                // statements
                return dispatch({type:'SEARCH_PRODUCTSELLERDETAIL_FAILURE'})
    }
}

