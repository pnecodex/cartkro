const initState = {
    todoResponse: null,
    todos: []

}
const todoReducer = (state = initState,action)=>{
    switch(action.type){
        case 'CREATE_TODO_LOADING':
            return {...state};
        case 'CREATE_TODO_SUCCESS':
            console.log(action);
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case 'CREATE_TODO_FAILURE':
            console.log(action);
            return {
                ...state,
                createTodoError: action.payload.error
            }
        case 'FETCH_TODOS_LOADING':
            console.log(state);
            return {
                // ...state,
                todos:action.payload
            };

        case 'FETCH_TODOS_SUCCESS':
            console.log(action);
            return {
                ...state,
                todos:action.payload.todo
            };
        case 'FETCH_TODO_FAILURE':
            console.log(action);
            return {
                ...state,
                fetchTodoError: action.error
            }
        default:
            return state;


    }
}

export default todoReducer;