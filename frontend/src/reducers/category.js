const initState = {
 categories: []

}

const Categoryreducer = (state = initState,action)=>{
    switch(action.type){
        case 'FETCH_CATEGORY_SUCCESS': 
            return{
                ...state,
                categories:action.payload
            };
        case 'ADD_CATEGORY_SUCCESS':
            return{
                ...state,
                categories:[...state.categories,action.payload]
            }   
        case 'ADD_CATEGORY_FAILURE':
            return{
                ...state,
                category:[...state.category,action.payload]
            }
        case'FETCH_ALL_CHILD_CATEGORY_LOADING':   
            return{
                ...state,
            }
        case'FETCH_ALL_CHILD_CATEGORY_SUCCESS':   
            return{
                ...state,
                categories:action.payload
            }
        case'FETCH_ALL_CHILD_CATEGORY_FALURE':   
            return{
                ...state,
                categories:action.payload
            }



            default:
        }
        return state
}
export default Categoryreducer;