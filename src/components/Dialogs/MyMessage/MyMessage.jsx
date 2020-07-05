import React from 'react';
import classes from './../Dialogs.module.css'

const MyMessage = ({message}) => {
    return (
        <div className={classes.myMessage}>{message}</div>
    )
}


export default MyMessage;