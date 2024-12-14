import apiCall from "../apiCall";


export const fetchColor =() =>{
    return async dispatch =>{
        try {
            dispatch({
                type:'FETCH_ALL_COLOR_LOADIN',
            });
            const fetchColors = await apiCall('/all_color','get');
            dispatch({
                type:'FETCH_ALL_COLOR_SUCCESS',
                payload:fetchColors.data.colors
            });
        } catch (error) {
            return dispatch({
                type:'FETCH_ALL_COLOR_FAILURE',
                payload:error
            })
        }
    }
}