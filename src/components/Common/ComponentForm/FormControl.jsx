import React from 'react';
import classes from './FormControl.module.css';


export const FormControl  = ({
                             input,
                             meta: {touched, error, warning},
                             ...props
                         }) => {

    return (
        <div className={classes.error}>
            {React.createElement(props.element, {...input, ...props})}
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}



