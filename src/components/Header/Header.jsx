import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <button type="button" className="btn rounded-pill shadow-sm px-2 mb-2" onClick={props.toggleMobileView}>
                <small
                    className="text-uppercase font-weight-bold">Toggle</small>
            </button>
            <img src='https://media.istockphoto.com/illustrations/cartoon-spaceman-looks-a-cute-illustration-id516985444' alt='logo'/>
            <span>Space Network</span>
            <div className={classes.login}>
                {props.isAuth
                    ? <div>{props.login} - <button className="btn btn-outline-info" onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Log In</NavLink>}
            </div>
        </header>
    )
}

export default Header;