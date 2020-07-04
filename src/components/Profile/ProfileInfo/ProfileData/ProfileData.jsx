import React from 'react';
import classes from "../ProfileData.module.css";
import Contact from "../../../Common/Contact/Contact";

const ProfileData = ({lookingForAJob, lookingForAJobDescription, aboutMe, contacts, isOwner, onEditMode}) => {
    return (
        <>
            <div className={classes.information}>
                {isOwner &&
                <div >
                    <button className='btn btn-outline-primary' onClick={onEditMode}>Edit</button>
                </div>}
                <div className={classes.field}>
                    <div className={classes.job}>
                        <div> <span className={classes.info}>Looking for a job:</span> {lookingForAJob ? 'Yes' : 'No'}</div>
                    </div>
                    <div className={classes.jobDescription}>
                        {lookingForAJob && <div><span className={classes.info}>My skills:</span> {lookingForAJobDescription}</div>}
                    </div>
                    <div className={classes.aboutMe}>
                        <span className={classes.info}>About me:</span> {aboutMe}
                    </div>
                </div>

            </div>

            <div className={classes.contacts}>
                <b>Contacts</b>
                <div className={classes.socials}>
                    {Object.keys(contacts).map(key => {
                        return <Contact key={key} value={contacts[key]} contact={key}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ProfileData;