import React from 'react';
import classes from './PostForm.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "./Validations/Validation";
import {FormControl } from "../Common/ComponentForm/FormControl";

const maxLength50 = maxLength(50);

const PostForm = ({handleSubmit}) => {
    return (
        <form className={classes.postForm} onSubmit={handleSubmit}>
            <div>
                <Field  className={classes.textarea} placeholder='Write something' element='textarea' name='post' component={FormControl} validate={[required, maxLength50]} />
            </div>
            <div className={classes.button}>
                <button type='submit' className="btn btn-outline-primary">Publish</button>
            </div>
        </form>
    )
}

export  default reduxForm({form: 'post'})(PostForm)
