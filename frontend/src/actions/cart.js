import apiCall from "../apiCall";
// import cookies from "js-cookie";
import { Base64 } from "js-base64";
// import { Variation } from "./productVariationAction";
// import Cookies from 'universal-cookie';
// const cookies = Cookies();
// console.log(cookies, 'cookie ye hai');
export const addToCart = (id, qty) => async (dispatch, getState) => {

    try {
        dispatch({
            type: 'CART_TO_ITEM_LOADING',
        })

        const res = await apiCall(`/one-productsellerdetail/${id}`, 'get');
        const res2 = await apiCall(`/product_variation_one/${id}`, 'get');
        //    let [color] = respons.data.productVariationOne
        //    let {variations} = color;
        //    let [size] = variations;

        //    let {saleprice,sellerSKU,sellerproductId,size} = variations;


        //   console.log({variations}  = respons.data.productVariationOne,'response');
        //   console.log(size,'variations');
        //   console.log(respons.data,'color');

        //   return      
        dispatch({
            type: 'CART_TO_ITEM_SUCCESS',
            // payload:res.data.Oneproductsellerdetail
            payload:{
                productId:res.data.Oneproductsellerdetail.id,  
                image:res.data.Oneproductsellerdetail.image,
                name:res.data.Oneproductsellerdetail.name,
                price:res.data.Oneproductsellerdetail.price,
                stock:res.data.Oneproductsellerdetail.stock,
                userId:res.data.Oneproductsellerdetail.userId,
                qty
            }
            // payload: {
            //     res: res.data.Oneproductsellerdetail,
            //     res2: res2.data.productVariationOne
            // },
        });
        // const {cart:{cartItems}} = getState();
        // console.log(cartItems,'cartitems');
        // cookies.set("cartItems",JSON.stringify(cartItems))
        // cookies.set("cartItems",[cartItems])
        // for (var [key, value] of Object.entries(res.data.Oneproductsellerdetail)) {
        // for (var [k, val] of Object.entries(value)) {
        //     console.log(`${k}: ${val}`);
        //   }
        // console.log(`a ${key}: b ${value}`);
        // }
        //  sessionStorage.setItem("cartItems",JSON.stringify( res['data']))
        // localStorage.setItem("cartItems", Base64.encode(JSON.stringify(cartItems)))

        // console.log(JSON.stringify(value),'data cart');

        localStorage.setItem('cartItems', JSON.stringify(getState().carts.cartItems));

    } catch (e) {
        // statements
        return dispatch({ type: 'CART_TO_ITEM_FAILURE' })
    }
}

export const removeFromCart = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: 'CART_REMOVE_ITEM_LOADING',
        })

        dispatch({
            type: 'CART_REMOVE_ITEM_SUCCESS',
            payload: id
        })
        //    const {cart:{cartItems}} = getState();
        //    cookies.set("cartItems",JSON.stringify(cartItems))

        //    for (var [key, value] of Object.entries(res.data.Oneproductsellerdetail)) {
        //     // for (var [k, val] of Object.entries(value)) {
        //     //     console.log(`${k}: ${val}`);
        //     //   }
        //     console.log(`a ${key}: b ${value}`);
        // }
        //    console.log(sessionStorage.removeItem("cartItems",this.res['data']),'remove item')

        // console.log(res.data.Oneproductsellerdetail,'data cart');
        // sessionStorage.removeItem("cartItems",Base64.encode(JSON.stringify(this.res.data.Oneproductsellerdetail)))
        // sessionStorage.clear();
        localStorage.setItem('cartItems', JSON.stringify(getState().carts.cartItems));

    } catch (e) {
        // statements
        return dispatch({ type: 'CART_REMOVE_ITEM_FAILURE' })
    }
}
// export const saveShipping = (shippings) => async (dispatch) => {

//             try {
//                 dispatch({
//                 type:'CART_SHIPPING_LOADING',
//                })
//                 const shipping = await apiCall('/checkout','post',shippings)
//                 dispatch({
//                 type:'CART_SHIPPING_SUCCESS',
//                 payload:shipping
//                })
//             } catch(e) {
//                 // statements
//                 return dispatch({type:'CART_SHIPPING_FAILURE'})
//     }
// }
export const saveShipping = (data) => async (dispatch) => {

    try {
        dispatch({
            type: 'CART_SHIPPING_LOADING',
        })
        //    const shipping = await apiCall('/checkout','post',shippings)
        dispatch({
            type: 'CART_SHIPPING_SUCCESS',
            payload: data
        })
    } catch (e) {
        // statements
        return dispatch({ type: 'CART_SHIPPING_FAILURE' })
    }
}
