const initialState ={
	productsellerdetails : [],
	// productSearch:''

}

const ProductsellerdetailReducer = (state = initialState, action) =>{
	switch(action.type) {
		case  'FETCH_PRODUCTSELLERDETAIL_LOADING':
			return{
				...state,

			}
		case  'FETCH_PRODUCTSELLERDETAIL_SUCCESS':

			return{
				...state,
				productsellerdetails: action.payload
			}
		case 'FETCH_PRODUCTSELLERDETAIL_FAILURE':
			return{
				...state
			}
		case  'ADD_PRODUCTSELLERDETAIL_LOADING':
			return{
				...state,

			}
		case  'ADD_PRODUCTSELLERDETAIL_SUCCESS':

			return{
				...state,
				productsellerdetails:[action.payload, ...state.productsellerdetails]
			}
		case 'ADD_PRODUCTSELLER_FAILURE':
			return{
				...state
			}

		case  'FETCH_ONE_PRODUCTSELLERDETAIL_LOADING':
			return{
				...state,

			}
		case  'FETCH_ONE_PRODUCTSELLERDETAIL_SUCCESS':

			return{
				...state,
				productsellerdetails: action.payload
			}
		case 'FETCH_ONE_PRODUCTSELLERDETAIL_FAILURE':
			return{
				...state
			}


			case  'SEARCH_PRODUCTSELLERDETAIL_LOADING':
				return{
					...state,
	
				}
			case  'SEARCH_PRODUCTSELLERDETAIL_SUCCESS':
	
				return{
					...state,
					productsellerdetails: action.payload
				}
			case 'SEARCH_PRODUCTSELLERDETAIL_FAILURE':
				return{
					...state
				}
				
				case  'ADD_PRODUCTSELLERDETAIL_LOADING':
					return{
						...state,
		
					}
				case  'ADD_PRODUCTSELLERDETAIL_SUCCESS':
		
					return{
						...state,
						productsellerdetails:[action.payload, ...state.productsellerdetails]
					}
				case 'ADD_PRODUCTSELLER_FAILURE':
					return{
						...state
					}
				


		default: return state
	}
}

export default ProductsellerdetailReducer;