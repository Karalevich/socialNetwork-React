import React from 'react';
import classes from './NavbarFirends.module.css';
import DialogItem from "../../Dialogs/DialogItems/DialogItem";


const NavbarFriends = (props) => {

    return (
        <div className={classes.name}>
            <DialogItem img={props.img}/>
            {props.name}
        </div>
    )
}

export default NavbarFriends;