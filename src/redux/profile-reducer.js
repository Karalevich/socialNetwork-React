import {ProfileAxios} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO';
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
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        }
        default:
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const addNewPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});

export const getUserProfile = (id) => {
    return async (dispatch) => {
        const response = await ProfileAxios.getProfile(id);
        dispatch(setUserProfile(response.data));
    }
}

export const savePhoto = (photo) => {
    return async (dispatch) => {
        const response = await ProfileAxios.setPhoto(photo);
        dispatch(setUserPhoto(response.data.data.photos));
    }
}

export const getUserStatus = (id) => {
    return async (dispatch) => {
        const response = await ProfileAxios.getStatus(id);
        dispatch(setUserStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await ProfileAxios.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profileReducer