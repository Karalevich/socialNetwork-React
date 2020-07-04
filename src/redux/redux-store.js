import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import newDialogsReducer from "./newDialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

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



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)) );
export default store;
