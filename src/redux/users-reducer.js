import {UserAxios} from "../api/api";
import {converter} from "../components/Utilits/converter";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SET_USERS = 'user/SET-USERS';
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'user/SET_TOTAL_COUNT';
const CHANGE_IS_FETCHING = 'user/CHANGE_IS_FETCHING';
const DISABLE_BUTTON = 'user/DISABLE_BUTTON';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: converter(state.users, action.id, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: converter(state.users, action.id, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case CHANGE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case DISABLE_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (id) => ({type: FOLLOW, id});

export const setUsers = (users) => ({type: SET_USERS, users});

export const unfollowSuccess = (id) => ({type: UNFOLLOW, id});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const changeIsFetching = (isFetching) => ({type: CHANGE_IS_FETCHING, isFetching});

export const disableButton = (isFetching, id) => ({type: DISABLE_BUTTON, isFetching, id});


export const getUser = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(changeIsFetching(true));
        const data = await UserAxios.getUsers(currentPage, pageSize);
        dispatch(changeIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
}
export const getPage = (numberPage, pageSize) => {
    return async (dispatch) => {
        dispatch(changeIsFetching(true));
        dispatch(setCurrentPage(numberPage));
        const data = await UserAxios.getUsers(numberPage, pageSize)
        dispatch(changeIsFetching(false));
        dispatch(setUsers(data.items));
    }
}

export const followUnfollow = async (id, dispatch, api, action) => {
    dispatch(disableButton(true, id));
    const data = await api(id)
    if (data.resultCode === 0) {
        dispatch(action(id));
    }
    dispatch(disableButton(false, id));
}

export const unfollow = (id) => {
    return (dispatch) => {
        followUnfollow(id, dispatch, UserAxios.unfollow.bind(UserAxios), unfollowSuccess);
    }
}

export const follow = (id) => {
    return (dispatch) => {
        followUnfollow(id, dispatch, UserAxios.follow.bind(UserAxios), followSuccess);
    }
}


export default usersReducer