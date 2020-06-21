import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItem";
import Avatar from "./Avatars/Avatar";
import MessageForm from "../Forms/MessageForm";

const Dialogs = ({dialogsPage,addNewMessage}) => {

    let dialogsElement = dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElement = dialogsPage.messages
        .map(message => <Message message={message.message}/>);
    let avatarElement = dialogsPage.avatars
        .map(avatar => <Avatar img={avatar.img}/>);

    const onSubmit = (formData) => {
        addNewMessage(formData.message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <span className={classes.avatars}> {avatarElement} </span>

            <div className={classes.messages}>
                {messageElement}
            </div>
            <div className={classes.textarea}>
                <MessageForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}

export default Dialogs;