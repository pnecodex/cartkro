const initialState ={
	imagesvariation : [],

}

const ProductVariationImagesReducer = (state = initialState, action) =>{
	switch(action.type) {
				case  'ADD_PRODUCTVARIATION_LOADING':
					return{
						...state,
		
					}
				case  'ADD_PRODUCTVARIATION_SUCCESS':
		
					return{
						...state,
						imagesvariation:[action.payload, ...state.imagesvariation]
					}
				case 'ADD_PRODUCTVARIATION_FAILURE':
					return{
						...state
					}
				case  'FETCH_PRODUCTVARIATION_LOADING':
					return{
						...state,	
					}
				case  'FETCH_PRODUCTVARIATION_SUCCESS':
		
					return{
						...state,
						imagesvariation: action.payload
					}
				case 'FETCH_PRODUCTVARIATION_FAILURE':
					return{
						...state
					}
				case  'IMAGES_PRODUCTVARIATION_LOADING':
					return{
						...state,
		
					}
				case  'IMAGES_PRODUCTVARIATION_SUCCESS':
		
					return{
						...state,
						imagesvariation :action.payload
					}
				case 'IMAGES_PRODUCTVARIATION_FAILURE':
					return{
						...state
					}


		default: return state
	}
}

export default ProductVariationImagesReducer;