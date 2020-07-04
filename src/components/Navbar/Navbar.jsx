import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarFriends from "./NavbarFriends/NavbarFriends";
import cn from "classnames";

const Navbar = ({friends, editMode}) => {

    let bestFriends = friends.slice(0, 3)
    let friendsElement = bestFriends
        .map(friend => <NavbarFriends name={friend.name} key={friend.id} id={friend.id} img={friend.img}/>);
    return (
        <div className={cn(classes.navigator, {[classes.active]:editMode})}>
            <ul className="nav flex-column">
                <li className="nav-item g">
                    <NavLink className="nav-link" to="/profile"
                             activeClassName={classes.activeButton}>Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dialogs" activeClassName={classes.activeButton}>Messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/users' activeClassName={classes.activeButton}>Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/news' activeClassName={classes.activeButton}>News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/music' activeClassName={classes.activeButton}>Music</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/settings' activeClassName={classes.activeButton}>Settings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to='/friends' activeClassName={classes.activeButton}>Friends</NavLink>
                    <div className={classes.friendsName}>
                        {friendsElement}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;