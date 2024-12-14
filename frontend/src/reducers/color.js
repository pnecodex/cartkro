const initialState = {
    colors:[]
}

const colorReducer = (state = initialState,action) =>{
    switch (action.type){
        case'FETCH_ALL_COLOR_LOADING':   
        return{
            ...state,
        }
    case'FETCH_ALL_COLOR_SUCCESS':   
        return{
            ...state,
            colors:action.payload
        }
    case'FETCH_ALL_COLOR_FALURE':   
        return{
            ...state,
            colors:action.payload
        }
   
        default:
        }
        return state
}

export default colorReducer;