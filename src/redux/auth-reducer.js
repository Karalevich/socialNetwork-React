import {AuthorAxios, SecurityAxios} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl});

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const data = await SecurityAxios.getCaptchaUrl()
            dispatch(setCaptchaUrl(data.url));
    }
}

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

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const data = await AuthorAxios.login(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(authUser());
                dispatch(setCaptchaUrl(null))
            }else {
                if(data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
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