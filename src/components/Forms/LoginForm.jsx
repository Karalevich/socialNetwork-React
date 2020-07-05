import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/ComponentForm/FormControl";
import {maxLength, required} from "./Validations/Validation";
import classes from './LoginForm.module.css';

const maxLength25 = maxLength(25);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form  onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Field className="form-control" placeholder='email' name='email' element='input'
                       component={FormControl} validate={[required, maxLength25]}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <Field className="form-control" placeholder='password' name='password' type={'password'} element='input'
                       component={FormControl} validate={[required, maxLength25]}/>
            </div>
            <div className={classes.error}>
            {error && <div>{error}</div>}
            </div>
            <div className="form-group form-check">
                <Field className="form-check-input" type='checkbox' name='rememberMe' element='input' component={FormControl}/>
                <label className="form-check-label" htmlFor="exampleCheck1">remember Me</label>
            </div>
            <div>
                <img src={captchaUrl} alt=""/>
                {captchaUrl && <Field placeholder='captcha' name='captcha' element='input'
                                      component={FormControl} validate={[required]}/>}
            </div>
            <div>
                <button className="btn btn-outline-primary" type='submit'>Login</button>
            </div>
        </form>
    )
}


export default reduxForm({form: 'login'})(LoginForm)