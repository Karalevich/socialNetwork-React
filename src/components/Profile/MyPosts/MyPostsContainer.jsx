import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {getPosts} from "../../../redux/Selectors/Profile-selectors";


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPost) => {
            dispatch(addNewPostActionCreator(newPost));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;