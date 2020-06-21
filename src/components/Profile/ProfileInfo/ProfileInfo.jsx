import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateUserStatus} from "../../../redux/profile-reducer";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile}>
            <div className={classes.main}>
                <div className={classes.name}>
                    {profile.fullName}
                </div>
                <div className={classes.aboutMe}>
                    {profile.aboutMe}
                </div>
                <div className={classes.aboutMe}>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
                <div className={classes.description}>
                    <img src={profile.photos.large}/>
                </div>
            </div>
            <div className={classes.contact}>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.github}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;