 import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
 import NavbarFriends from "./NavbarFriends/NavbarFriends";

const Navbar = ({friends}) => {

    let bestFriends = friends.slice(0,3)
    let friendsElement = bestFriends
        .map(friend => <NavbarFriends name={friend.name} id={friend.id} img={friend.img}/>);
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
                <div className={classes.friendsName}>
                {friendsElement}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;