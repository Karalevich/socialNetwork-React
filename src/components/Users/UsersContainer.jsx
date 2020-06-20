import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {followMC, getPage, getUser,setTotalCount,unfollowMC} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/Selectors/Users-selectors";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    addNewUsers = () => {
        this.setUsers();
    }

    onPageChange = (numberPage) => {
        this.props.getPage(numberPage,this.props.pageSize)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   followMC={this.props.followMC}
                   unfollowMC={this.props.unfollowMC}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   addNewUsers={this.addNewUsers}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


const UsersContainer = connect(mapStateToProps, {
    followMC,
    unfollowMC,
    setTotalCount,
    getUser,
    getPage
})(UsersAPI)
export default UsersContainer;

