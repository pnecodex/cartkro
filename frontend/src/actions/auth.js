import apiCall from '../apiCall';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';

export const signUp = (user) => async dispatch => {
    ;
    try {
        dispatch({ type: 'SIGNUP_USER_LOADING' });
        const res = await apiCall('/auth/sign_up', 'post', user);
        console.log(res.data);
        Cookies.set('token', res.data.token);
        return dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: res.data });

    } catch (error) {
        return dispatch({
            type: 'SIGNUP_USER_FAILURE',
            // payload: error.response.data.error
            payload: error.response.data || error.response.data
                ? error.response.data.error
                : error.error.error
        });
    }



};
export const signIn = (user) => async dispatch => {
    try {
        dispatch({ type: 'SIGNIN_USER_LOADING' });
        const res = await apiCall('/auth/sign_in', 'post', user);
        // apiCall.defaults.headers.common['Authorization'] = res.data.token;
        dispatch({ type: 'SIGNIN_USER_SUCCESS', payload: res.data });
        // sessionStorage.setItem('token',res.data.token)
        // // localStorage.setItem('token',res.data.token)
        Cookies.set('token', res.data.token);
    }
    catch (err) {
        return dispatch({ type: 'SIGNIN_USER_FAILURE', payload: err.res })
    }
};

export const setCurrentUser = (Cookies, JwtDecode) => async dispatch => {
    try {
        dispatch({ type: 'SET_CURRENT_USER_LOADING' });
        const res = JwtDecode(Cookies.get('token'));
        dispatch({ type: 'SET_CURRENT_USER_SUCCESS', payload: res });
    } catch (err) {
        dispatch({ type: 'SET_CURRENT_USER_FAILURE', payload: err })
    }
}






export const alluser = user => {
    return async (dispatch) => {
        try {

            const res = await apiCall('/auth/alluser');
            dispatch({
                type: 'FETCH_USER_LOADING',

            })
            dispatch({
                type: 'FETCH_USER_SUCCESS',
                payload: res.data.user
            })
            console.log(res);

        } catch (error) {
            return dispatch({
                type: 'FETCH_USER_FAILURE',

            })
        }
    }
}
