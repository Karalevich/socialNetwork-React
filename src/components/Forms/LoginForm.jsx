import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/ComponentForm/FormControl";
import {maxLength, required} from "./Validations/Validation";
import classes from './LoginForm.module.css';

const maxLength25 = maxLength(25);

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='email' name='email' element='input'
                       component={FormControl} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field placeholder='password' name='password' type={'password'} element='input'
                       component={FormControl} validate={[required, maxLength25]}/>
            </div>
            <div className={classes.error}>
            {error && <div>{error}</div>}
            </div>
            <div className={classes.checkbox}>
                <Field type='checkbox' name='rememberMe' element='input'
                       component={FormControl}/> remember Me
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)