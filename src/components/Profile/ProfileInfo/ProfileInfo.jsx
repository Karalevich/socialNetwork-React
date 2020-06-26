import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png"

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (event) => {

        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
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
                    <img src={profile.photos.large || userPhoto} className={classes.avatar}/>
                    {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
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