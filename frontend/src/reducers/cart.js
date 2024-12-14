const initailState = {
	cartItems: [{}],
	shipping: {}
}
const cartReducer = (state = initailState, action) => {
	switch (action.type) {
		case 'CART_TO_ITEM_LOADING':
			return {
				...state
			}
		case 'CART_TO_ITEM_SUCCESS':
			const item = action.payload;
			const product = state.cartItems.find(x => x.productId === item.productId);
			if (product) {
				return {
					...state,
					cartItems: state.cartItems.map(x => x.productId === product.productId ? item : x)
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				};
			}
		case 'CART_REMOVE_ITEM_LOADING':
			return {
				...state
			}
		case 'CART_REMOVE_ITEM_SUCCESS':
			return {
				// ...state,
				cartItems: state.cartItems.filter(x => x.productId !== action.payload),
			}
		case 'CART_REMOVE_ITEM_FAILURE':
			return {
				...state,
			}
		case 'CART_SHIPPING_LOADING':
			return {
				...state
			}
		case 'CART_SHIPPING_SUCCESS':
			return {
				...state,
				shipping: action.payload
			}
		case 'CART_SHIPPING_FAILURE':
			return {
				...state,
			}
		default: return state;
	}
}

export default cartReducer;