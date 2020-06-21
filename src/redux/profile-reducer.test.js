import profileReducer, {addNewPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'hi how are you?', likeCount: '15'},
        {id: 2, message: "It is me first post", likeCount: '20'},
    ],
}

it('length of posts must increment', () => {
    let action = addNewPostActionCreator('It`s my new post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
});

it('text of post must be correct', () => {
    let action = addNewPostActionCreator('It`s my new post');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('It`s my new post')
});

it('length array most be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1)
});