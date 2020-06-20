import {UserAxios} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';
const DISABLE_BUTTON = 'DISABLE_BUTTON';

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
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
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
    return (dispatch) => {
        dispatch(changeIsFetching(true));
        UserAxios.getUsers(currentPage, pageSize).then(data => {
            dispatch(changeIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}
export const getPage = (numberPage, pageSize) => {
    return (dispatch) => {
        dispatch(changeIsFetching(true));
        dispatch(setCurrentPage(numberPage));
        UserAxios.getUsers(numberPage, pageSize).then(data => {
            dispatch(changeIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}
export const unfollowMC = (id) => {
    return (dispatch) => {
        dispatch(disableButton(true, id));
        UserAxios.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(disableButton(false, id));
        });
    }
}
export const followMC = (id) => {
    return (dispatch) => {
        dispatch(disableButton(true, id));
        UserAxios.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(disableButton(false, id));
        });
    }
}


export default usersReducer