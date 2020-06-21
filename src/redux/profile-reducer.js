import {ProfileAxios} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likeCount: '15'},
        {id: 2, message: "It is me  first post", likeCount: '20'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPost, likeCount: '0'}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type:SET_USER_STATUS, status});
export const addNewPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (id) => {
    return (dispatch) => {
        ProfileAxios.getProfile(id).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getUserStatus = (id) => {
    return (dispatch) => {
        ProfileAxios.getStatus(id).then(response => {
            dispatch(setUserStatus(response.data));
        });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        ProfileAxios.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default profileReducer