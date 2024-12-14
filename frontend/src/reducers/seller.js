const initialState = {
    // text: '',
    sellers: [],
    laoding: false,
    // product: []
}

const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ALL_SELLER_LOADING':
            return{
                ...state,
                laoding: true

            }
            
        case 'ALL_SELLER_SUCCESS':
            // console.log(action);
            return{
                ...state,
                sellers: action.payload
            };
        case 'ALL_SELLER_FALURE':
            // console.log(action);
            return{
                ...state,
               };

        case 'ADD_SELLER_LOADING':
            return{
                ...state,
                loading:false
            };
        case 'ADD_SELLER_SUCCESS':
            return{
                ...state,
                sellers:[...state.sellers,action.payload]
            };
        case 'ADD_SELLER_FAILURE':
            return{
                ...state
            }
        case  'SELLER_SEARCH_LOADING':
            return{
                ...state,

            }
        case  'SELLER_SEARCH_SUCCESS':

            return{
                ...state,
                sellers: action.payload
            }
        case 'SELLER_SEARCH_FAILURE':
            return{
                ...state
            }


            default:
            }
            return state;
     
    }
export default productReducer;
