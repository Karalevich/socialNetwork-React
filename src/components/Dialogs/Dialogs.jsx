import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItem";
import MessageForm from "../Forms/MessageForm";

const Dialogs = ({dialogsPage, addNewMessage}) => {

    let dialogsElement = dialogsPage.dialogs
        .map(dialog => <DialogItem img={dialog.img} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = dialogsPage.messages.friends
        .map((message, index) => <Message message={message.message} key={index}/>);

    const onSubmit = (formData) => {
        addNewMessage(formData.message);
    }

    return (
        <div className={classes.dialogs}>
            <h6 className={classes.name}>All Messages</h6>
            <div className={classes.users}>
                <div className={classes.dialogsItems}>
                    {dialogsElement}
                </div>
            </div>
            <div className={classes.dialog}>
                <div className={classes.userAvatar}>
                    <img src={dialogsPage.dialogs[1].img} alt=""/>
                    <span>{dialogsPage.dialogs[1].name}</span>
                </div>
                <div className={classes.messages}>
                    {messageElement}
                </div>
                <div className={classes.textarea}>
                    <MessageForm onSubmit={onSubmit}/>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;