import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = ({id,name}) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + id} activeClassName={classes.active}>{name} </NavLink>
        </div>
    )
}

export default DialogItem;