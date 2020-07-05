import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './PostForm.module.css';
import {FormControl } from "../Common/ComponentForm/FormControl";
import {maxLength, required} from "./Validations/Validation";

const maxLength30 = maxLength(30);

const MessageForm = ({handleSubmit}) => {
    return (
        <form className={classes.postForm} onSubmit={handleSubmit}>
                <div>
                    <Field className={classes.textarea} placeholder='Message text' element='textarea' name='message' component={FormControl }
                           validate={[required, maxLength30]}/>
                </div>
                <div className={classes.button}>
                    <button type='submit' className="btn btn-outline-primary">Send</button>
                </div>
            </form>
    )
}

export default reduxForm({form: 'message'})(MessageForm)


