import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from "../../Forms/PostForm";

function MyPosts(props) {
    console.log("MyPosts")
    let postElement = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} id={post.id}/>);

    const onSubmit = (formData) => {
        props.addNewPost(formData.post);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>

            <PostForm onSubmit={onSubmit}/>

            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;