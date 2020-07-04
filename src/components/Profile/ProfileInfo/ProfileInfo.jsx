import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "../../Forms/ProfileDataForm";
import fon640 from "../../../AddFile/IMG/fon640.png";
import fon960 from "../../../AddFile/IMG/fon960.png";
import max from "../../../AddFile/IMG/max.png";
import cn from 'classnames';
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [isEdit, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    setEditMode(false);
                }
            });
    }

    return (
        <div className={classes.profile}>
            <div className={classes.fon}>
                <picture>
                    <source srcSet={fon640} media="(max-width: 640px)"/>
                    <source srcSet={fon960} media="(max-width: 960px)"/>
                    <source srcSet={max} media="(min-width: 961px)"/>
                    <img className={classes.fonImg} srcSet={fon640}
                         src={fon640} alt="fon"/>
                </picture>
            </div>
            <div className={classes.photo}>
                <div className={classes.userPhoto}>
                    <img src={profile.photos.large || userPhoto} className={classes.avatar} alt='person`s avatar'/>
                </div>

                {isOwner &&
                <form className={classes.editPhoto}>
                    <i className={cn('fa', {['fa-camera-retro']: true})}> </i>
                    <label className={classes.fileContainer}>
                        Edit Cover Photo
                        <input type={'file'} onChange={onPhotoSelected}/>
                    </label>
                </form>}
            </div>
            <div className={classes.containerFluid}>
                <div className={classes.wrapper}>
                    <div className={classes.name}>
                        {profile.fullName}
                    </div>
                    <div className={classes.status}>
                        <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.data}>
                    {isEdit
                        ? <ProfileDataForm  {...profile} initialValues={profile} onSubmit={onSubmit}/>
                        : <ProfileData  {...profile} isOwner={isOwner} onEditMode={() => setEditMode(true)}/>}
                </div>
                <MyPostsContainer/>
            </div>

        </div>
    )
}


export default (ProfileInfo);