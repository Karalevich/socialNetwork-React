import React from 'react';
import classes from './Login.module.css';
import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const Login = ({isAuth, login, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth) {
       return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1 className={classes.login}>
                Login
            </h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        captchaUrl: state.authUser.captchaUrl
    }
}

export default connect(mapStateToProps,{login})(Login);