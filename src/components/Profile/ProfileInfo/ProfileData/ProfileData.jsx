import React from 'react';
import classes from "../ProfileInfo.module.css";
import Contact from "../../../Common/Contact/Contact";

const ProfileData = ({lookingForAJob, lookingForAJobDescription, aboutMe, contacts, isOwner, onEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={onEditMode}>Edit</button></div>}
            <div className={classes.job}>
                <div>Looking for a job: {lookingForAJob ? 'Yes' : 'No'}</div>
            </div>
            <div className={classes.jobDescription}>
                {lookingForAJob && <div>My skills are: {lookingForAJobDescription}</div>}
            </div>
            <div className={classes.aboutMe}>
                About me: {aboutMe}
            </div>
            <div className={classes.contacts}>
                <b>Contacts</b>
                {Object.keys(contacts).map(key => {
                    return <Contact key={key} value={contacts[key]} contact={key}/>
                })}
            </div>
        </div>
    )
}

export default ProfileData;