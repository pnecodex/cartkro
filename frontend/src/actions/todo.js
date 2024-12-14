import apiCall from '../apiCall';
export const createTodo = (todo) => async dispatch =>{
    try {
        dispatch({type: 'CREATE_TODO_LOADING'});
        const res = await apiCall('/todos', 'post',todo);
       return dispatch({type: 'CREATE_TODO_SUCCESS', payload: res.data});
        // return res;
    } catch (error) {
         return dispatch({type: 'CREATE_TODO_FAILURE', payload: error.data});

    }
};

export const fetchTodo = (todo) => {
      return  async dispatch =>{
        try {
            dispatch({type: 'FETCH_TODOS_LOADING'});
            const res = await apiCall('/todos', 'get', null, );
        return dispatch({type: 'FETCH_TODOS_SUCCESS', payload:res.data});
        // return res;
        } catch (error) {
            return dispatch({type: 'FETCH_TODOS_FAILURE', payload: error.data});

        }
     }
}