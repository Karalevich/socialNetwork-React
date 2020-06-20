import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter, useHistory} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {geAuthUserId, getIsAuth, getProfile, getStatus} from "../../redux/Selectors/Profile-selectors";


const ProfileAPI = (props) => {

    let userId = props.match.params.userId;
/*    const history = useHistory();
    history.push('/login')*/

    if (!userId) {
        userId = props.authUserId;

    }

    props.getUserProfile(userId);
    props.getUserStatus(userId);


    return <Profile {...props}
                    profile={props.profile}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}/>

}


const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authUserId: geAuthUserId(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileAPI)

