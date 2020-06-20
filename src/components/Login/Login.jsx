import React from 'react';
import classes from './Login.module.css';
import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
       return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1 className={classes.login}>
                Login
            </h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export default connect(mapStateToProps,{login})(Login);