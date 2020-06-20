import {applyMiddleware, combineReducers, createStore} from "redux";
import newDialogsReducer from "./newDialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: newDialogsReducer,
    usersPage: usersReducer,
    sidebar: sideBarReducer,
    authUser: authReducer,
    app: AppReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;

window.__store__ = store;