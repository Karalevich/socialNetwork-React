import React from 'react';
import classes from './PostForm.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "./Validations/Validation";
import {FormControl } from "../Common/ComponentForm/FormControl";

const maxLength50 = maxLength(50);

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textarea}>
                <Field placeholder='Post text' element='textarea' name='post' component={FormControl } validate={[required, maxLength50]} />
            </div>
            <div className={classes.button}>
                <button type='submit'>Add post</button>
            </div>
        </form>
    )
}

export  default reduxForm({form: 'post'})(PostForm)
