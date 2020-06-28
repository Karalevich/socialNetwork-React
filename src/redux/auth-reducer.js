import {AuthorAxios} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


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

export const authUser =  () => {
    return async (dispatch) => {
        const data = await AuthorAxios.autMe()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
        }
        return data
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await AuthorAxios.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(authUser());
            }else {
                dispatch(stopSubmit('login', {_error: data.messages}));
            }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const data = await AuthorAxios.logout()
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
    }
}
export default authReducer