import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItems/DialogItem";
import MessageForm from "../Forms/MessageForm";
import MyMessage from "./MyMessage/MyMessage";
import userPhoto from "../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png";


const Dialogs = ({dialogsPage, addNewMessage, photo}) => {

    const dialogsElement = dialogsPage.dialogs
        .map(dialog => <DialogItem img={dialog.img} name={dialog.name} key={dialog.id} id={dialog.id}/>);
    const messageFriend = dialogsPage.messages.friends
        .map((message, index) => <Message message={message.message} key={index}/>);
    const messageMy = dialogsPage.messages.my
        .map((message, index) => <MyMessage message={message.message} key={index}/>);

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
                    {messageFriend}
                    {messageMy}
                </div>
                <div className={classes.postBlock}>
                    <div className={classes.newPost}>
                        <div className={classes.newPostBox}>
                            <figure className={classes.figure}>
                                <img src={photo || userPhoto}   alt='person`s avatar'/>
                            </figure>
                            <div className={classes.newPostInput}>
                                <MessageForm onSubmit={onSubmit}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;