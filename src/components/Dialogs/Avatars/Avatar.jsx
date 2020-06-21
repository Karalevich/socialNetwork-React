import React from 'react';
import classes from './Avatar.module.css'


const Avatar = ({img}) => {
    return (
        <div className={classes.item}>
            <img src={img}></img>
        </div>

    )
}


export default Avatar;