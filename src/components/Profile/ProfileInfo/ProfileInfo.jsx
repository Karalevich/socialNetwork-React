import React,{useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "../../Forms/ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [isEdit, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const  onSubmit =  (formData) => {
        saveProfile(formData)
            .then(response => {
                if(response.data.resultCode === 0){
                    setEditMode(false);
                }
            });
    }

    return (
        <div className={classes.profile}>
            <div className={classes.main}>
                <div className={classes.name}>
                    {profile.fullName}
                </div>
                <div className={classes.status}>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
                <div className={classes.description}>
                    <img src={profile.photos.large || userPhoto} className={classes.avatar}/>
                    {isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
                </div>
                {isEdit
                    ? <ProfileDataForm {...profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData {...profile} isOwner={isOwner} onEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}


export default (ProfileInfo);