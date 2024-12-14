import apiCall from "../apiCall";


export const fetchCategory = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'FETCH_CATEGORY_LOADING',
            });
            const category = await apiCall('/file_all_catelogue_categories','get');
            dispatch({
                type: 'FETCH_CATEGORY_SUCCESS',
                payload: category.data.categoryList
            });
        } catch (error) {
            return dispatch({
                type: 'FETCH_ALL_CHILD_CATEGORY_FAILURE',
                payload: error
            });
        }       
    }
}
export const addCategory = (category) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'ADD_CATEGORY_LOADING'
            });
            const addcategory = await apiCall('/create_category', 'post', category)
            console.log(addcategory);
            return dispatch({
                type: 'ADD_CATEGORY_SUCCESS',
                payload: addcategory.data.category
            })

        } catch (error) {
            return dispatch({ type: 'ADD_CATEGORY_FAILURE', payload: error.res })
        }

    }

}
export const fetchAllChildCategory = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'FETCH_ALL_CHILD_CATEGORY_LOADING',
            });
            const fetchChildCategory = await apiCall('/all_child_category', 'get');
            dispatch({
                type: 'FETCH_ALL_CHILD_CATEGORY_SUCCESS',
                payload: fetchChildCategory.data.Childcategory
            });
        } catch (error) {
            return dispatch({
                type: 'FETCH_ALL_CHILD_CATEGORY_FAILURE',
                payload: error
            })
        }
    }
}
