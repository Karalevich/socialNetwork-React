import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from "../../Forms/PostForm";
import userPhoto from "../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png";

function MyPosts(props) {
    const reversPost = [...props.posts].reverse();
    const postElement = reversPost
        .map((post, index) => <Post name={props.name} message={post.message}
                                    photo={props.photo} key={index}
                                    likeCount={post.likeCount} id={post.id}
                                    views={post.views} comments={post.comments}
                                    dislike={post.dislike}/>);

    const onSubmit = (formData) => {
        props.addNewPost(formData.post)
    }

    return (
        <div className={classes.postBlock}>
            <div className={classes.newPost}>
                <div className={classes.newPostBox}>
                    <figure className={classes.figure}>
                        <img src={props.photo || userPhoto}  alt='person`s avatar'/>
                    </figure>
                    <div className={classes.newPostInput}>
                        <PostForm onSubmit={onSubmit}/>
                    </div>
                </div>

            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;