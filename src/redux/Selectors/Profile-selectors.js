export const getProfile = (state) => {
    return  state.profilePage.profile
}

export const getStatus = (state) => {
    return  state.profilePage.status
}

export const geAuthUserId = (state) => {
    return  state.authUser.id
}

export const getIsAuth = (state) => {
    return  state.authUser.isAuth
}

export const getPosts = (state) => {
    return  state.profilePage.posts
}

