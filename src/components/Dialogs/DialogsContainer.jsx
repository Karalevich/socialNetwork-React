import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addNewMessageActionCreator} from "../../redux/newDialogs-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/Selectors/Dialogs-selectors";


const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessage) => {
            dispatch(addNewMessageActionCreator(newMessage));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
