import {AuthorAxios} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const authUser = () => {
    return (dispatch) => {
       return AuthorAxios.autMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthorAxios.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(authUser());
            }else {
                dispatch(stopSubmit('login', {_error: data.messages}));
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        AuthorAxios.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
}
export default authReducer