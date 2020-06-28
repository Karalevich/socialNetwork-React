import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {getPosts} from "../../../redux/Selectors/Profile-selectors";


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state)
    }
}

const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)
export default MyPostsContainer;