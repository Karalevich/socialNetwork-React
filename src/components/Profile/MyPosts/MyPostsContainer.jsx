import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {getPhoto, getPosts,getName} from "../../../redux/Selectors/Profile-selectors";


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        photo: getPhoto(state),
        name: getName(state)
    }
}

const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)
export default MyPostsContainer;