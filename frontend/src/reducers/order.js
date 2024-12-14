const initialState = {
	allorders: [],
	// orderData:{
	// }
	orders: []
}

const orderCreate = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_ORDER_LOADING':
			return {
				loading: true
			}
		case 'CREATE_ORDER_SUCCESS':
			return {
				loading: false,
				...state,
				order: action.payload,
				// productsellerdetails:[action.payload, ...state.productsellerdetails]
				// order: action.payload,
				// createorder:action.payload,	
				success: true
			}
		case 'CREATE_ORDER_FAILURE':
			return {
				loading: false,
				error: action.payload,
			}

		// 		default: return state
		// 		}
		// }
		// const AllOrdersReducer = (state = initialState, action) =>{
		// switch(action.type) {
		case 'FETCH_ALLORDER_LOADING':
			return {
				...state,
			}
		case 'FETCH_ALLORDER_SUCCESS':
			return {
				...state,
				allorders: action.payload
			}
		case 'FETCH_ALLORDER_FAILURE':
			return {
				...state
			}



			default: return state
	}
	console.warn(initialState.allorders);
}

export default orderCreate;