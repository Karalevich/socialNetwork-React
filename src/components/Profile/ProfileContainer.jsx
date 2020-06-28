import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {geAuthUserId, getIsAuth, getProfile, getStatus} from "../../redux/Selectors/Profile-selectors";


class ProfileAPI extends React.Component {

    getUserData() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getUserData();
        }
    }

    render() {
        return <Profile savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authUserId: geAuthUserId(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileAPI)

