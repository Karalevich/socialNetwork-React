import React from 'react';
import classes from './NavbarFirends.module.css';
import Avatar from "../../Dialogs/Avatars/Avatar";


const NavbarFriends = (props) => {

    return (
        <div className={classes.name}>
            <Avatar img={props.img}/>
            {props.name}
        </div>
    )
}

export default NavbarFriends;