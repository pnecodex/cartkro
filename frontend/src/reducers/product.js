const initialState = {
    // text: '',
    products: [],
    laoding: false,
    // product: []
}

const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_PRODUCT_LOADING':
            return{
                ...state,
                laoding: true

            }
            
        case 'FETCH_PRODUCT_SUCCESS':
            // console.log(action);
            return{
                ...state,
                products: action.payload
            };

        case 'ADD_PRODUCT_LOADING':
            return{
                ...state,
                loading:false
            };
        case 'ADD_PRODUCT_SUCCESS':
            return{
                ...state,
                products:[...state.products,action.payload]
            };
        case 'ADD_PRODUCT_FAILURE':
            return{
                ...state
            }


            default:
            }
            return state;
     
    }
export default productReducer;
