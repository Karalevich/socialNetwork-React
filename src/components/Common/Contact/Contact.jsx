import React from 'react';


const Contact = ({contact, value}) => {
    return (
        <div>
            <b>{contact}</b> : {value}
        </div>
    )
}

export default Contact;