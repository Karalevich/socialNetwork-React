import React from 'react';
import classes from './Avatar.module.css'


const Avatar = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.img}></img>
        </div>

    )
}


export default Avatar;