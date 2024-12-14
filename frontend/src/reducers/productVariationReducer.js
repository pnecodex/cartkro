const initialState = {
    productvariationimagedetails:[]
}

const productvariationimagedetailsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case  'FETCH_PRODUCTVARIATION_LOADING':
            return{
                ...state,

            }
        case  'FETCH_PRODUCTVARIATION_SUCCESS':

            return{
                ...state,
                productvariationimagedetails: action.payload
            }
        case 'FETCH_PRODUCTVARIATION_FAILURE':
            return{
                ...state
            }
        case  'VARIATION_PRODUCTVARIATION_LOADING':
            return{
                ...state,

            }
        case  'VARIATION_PRODUCTVARIATION_SUCCESS':

            return{
                ...state,
                productvariationimagedetails:[action.payload, ...state.productvariationimagedetails]
            }
        case 'VARIATION_PRODUCTVARIATION_FAILURE':
            return{
                ...state
            }
            
         
    
        default:  return state
    }
}

export default productvariationimagedetailsReducer;