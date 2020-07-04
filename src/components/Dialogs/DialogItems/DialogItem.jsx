import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = ({img,id,name}) => {
    return (
        <div className={classes.dialog}>
            <div className={classes.item}>
                <img src={img} alt='user`s avatar'/>
            </div>
            <NavLink to={'/dialogs/' + id} activeClassName={classes.active}>{name} </NavLink>
        </div>
    )
}

export default DialogItem;