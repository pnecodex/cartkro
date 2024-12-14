import apiCall from "../apiCall";
import Cookies from 'js-cookie'
export const addSeller = (seller) =>{
    return async dispatch =>{
        try {
            dispatch({
                type:'ADD_SELLER_LOADING'
            });
            const addseller = await apiCall('/seller_shop','post',seller,Cookies.get('token'))
            console.log(addseller);
            Cookies.set('sellertoken',addseller.data.sellerT)
          return dispatch({
                type:'ADD_SELLER_SUCCESS',
                payload:addseller
            })

        } catch (error) {
            return dispatch({ type: 'ADD_SELLER_FAILURE', payload: error})
        }

    }

}
export const Sellerfetch = () =>{
    return async dispatch =>{
        try {
            dispatch({
                type:'ALL_SELLER_LOADING'
            });
            const sellerfetch = await apiCall('/seller_shop_seller','get');
            console.log(sellerfetch);
           // Cookies.set('sellertoken',sellerfetch.data.sellerShop)
          return dispatch({
                type:'ALL_SELLER_SUCCESS',
                payload:sellerfetch.data.sellerShop
            })

        } catch (error) {
            
            return dispatch({ type: 'ALL_SELLER_FAILURE', payload: error})
        }

    }

}
export const SellerSearch = (Searching) => async (dispatch) => {
    // return async (dispatch) =>{
      // const id = '2'
        
        try {
            dispatch({
            type:'SELLER_SEARCH_LOADING',
           })

            const res = await apiCall('/sellersearch','post',Searching);
             // const oneproductseller = await axios(config);
            dispatch({
            type:'SELLER_SEARCH_SUCCESS',
            payload:res.data.SellerSearchs
           });
            console.log(res);
        } catch(e) {
            // statements
            return dispatch({type:'SELLER_SEARCH_FAILURE'})
}
}