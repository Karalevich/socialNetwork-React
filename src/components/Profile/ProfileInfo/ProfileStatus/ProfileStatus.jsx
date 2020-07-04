import React, {useState,useEffect} from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    },[props.status])

   const changeStatus = (event) => {
       setEditMode(!editMode);
        if(event.target.tagName === 'INPUT') {
            props.updateUserStatus(status)
        }
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div className={classes.aboutMe}>
                {!editMode &&
                <div>
                    <span onDoubleClick={changeStatus}>{status !== '' ? status : 'status'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={changeStatus} value={status}/>
                </div>
                }
            </div>

        )
}

export default ProfileStatus;