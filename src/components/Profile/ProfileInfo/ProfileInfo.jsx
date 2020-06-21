import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateUserStatus} from "../../../redux/profile-reducer";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile}>
            <div className={classes.main}>
                <div className={classes.name}>
                    {props.profile.fullName}
                </div>
                <div className={classes.aboutMe}>
                    {props.profile.aboutMe}
                </div>
                <div className={classes.aboutMe}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div className={classes.description}>
                    <img src={props.profile.photos.large}/>
                </div>
            </div>
            <div className={classes.contact}>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.github}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;