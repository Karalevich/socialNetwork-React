import {authUser} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS ';


let initialState = {
    initialize: false,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialize: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initialized = () => {
    return (dispatch) => {
       let promise =  dispatch(authUser());
       Promise.all([promise]).then(() => {
           dispatch(initializedSuccess());
       })
    }
}

export default AppReducer