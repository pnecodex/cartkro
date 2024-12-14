// import { initialState  } from "../context/authContext";
const initialState = {
    // user: null,
    users: [],
    isAuthenticated: false,
    token: '',
    signUpErr: ''
}
const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_LOADING':
            return {
                ...state,
                isAuthenticated:false
            }
        case 'SIGNUP_USER_SUCCESS':
            return {
                ...state,
                users: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            };
        case 'SIGNUP_USER_FAILURE':
            return {
                ...state,
                signUpErr: action.payload,
                isAuthenticated: false

            };
        //   SIGN IN CASE
        case 'SIGNIN_USER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                users: action.payload.user,
                token: action.payload.token,
            };
        case 'SIGNIN_USER_FAILURE':
            return { ...state }
        case 'SET_CURRENT_USER_SUCCESS':
            return { ...state, users: action.payload };

        case 'FETCH_USER_LOADING':
            return {
                ...state
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                users: action.payload
            };
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                users: action.payload.error
            }
        default:
            return state;
    }
}

export default auth;
