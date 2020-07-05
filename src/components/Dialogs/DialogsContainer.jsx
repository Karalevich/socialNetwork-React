import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMessage} from "../../redux/newDialogs-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/Selectors/Dialogs-selectors";
import {getPhoto} from "../../redux/Selectors/Profile-selectors";


const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        photo: getPhoto(state)
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect)(Dialogs)
