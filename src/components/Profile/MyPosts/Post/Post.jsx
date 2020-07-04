import React from 'react';
import classes from './Post.module.css';
import userPhoto from "../../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.post}>
                <div className={classes.me}>
                    <img src={props.photo || userPhoto} alt='person`s avatar'/>
                    <div className={classes.name}>{props.name}</div>
                </div>
                <div className={classes.postText}>
                    {props.message}
                </div>
                <ul className={classes.list}>
                    <li>
                        <span className="views" data-toggle="tooltip" title="" data-original-title="views">
                            <i className="fa fa-eye"/>
                            <ins>{props.views}</ins>
                        </span>
                    </li>
                    <li>
                        <span className="comment" data-toggle="tooltip" title="" data-original-title="Comments">
                            <i className="fa fa-comments-o"/>
                            <ins>{props.comments}</ins>
                        </span>
                    </li>
                    <li>
                        <span className="like" data-toggle="tooltip" title="" data-original-title="like">
                           <i className="fa fa-heart" aria-hidden="true"/>
                            <ins> {props.likeCount}</ins>
                        </span>
                    </li>
                    <li>
                        <span className="dislike" data-toggle="tooltip" title="" data-original-title="dislike">
                        <i className="fa fa-thumbs-down" aria-hidden="true"/>
                        <ins>{props.dislike}</ins>
                 </span>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Post;