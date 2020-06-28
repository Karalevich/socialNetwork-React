import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/ComponentForm/FormControl";
import {required} from "./Validations/Validation";
import classes from "./LoginForm.module.css";


const ProfileDataForm = ({handleSubmit, contacts, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.error}>
                {error && <div>{error}</div>}
            </div>
            <div>
                My name is <Field type='input' name='fullName' element='input'
                                          component={FormControl}/>
            </div>
            <div>
                Looking for a job: <Field type='checkbox' name='lookingForAJob' element='input'
                                          component={FormControl}/>
            </div>
            <div>
                Describe your skills: <Field placeholder='input' name='lookingForAJobDescription' element='input'
                                             component={FormControl} validate={[required]}/>
            </div>
            <div>
                About me: <Field placeholder='textarea' name='aboutMe' element='textarea'
                                  component={FormControl} validate={[required]}/>
            </div>
            <div>
                <b>Contacts</b>
                {Object.keys(contacts).map(key => {
                    return <div key={key}>
                        {key} <Field  placeholder='input' name={'contacts.'+ key} element='input'
                               component={FormControl}/>
                    </div>

                })}
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'profile'})(ProfileDataForm)