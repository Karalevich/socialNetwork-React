import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {follow, getPage, getUser,setTotalCount,unfollow} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/Selectors/Users-selectors";

class UsersAPI extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUser(currentPage, pageSize)
    }

    addNewUsers = () => {
        this.setUsers();
    }

    onPageChange = (numberPage) => {
        const {getPage, pageSize} = this.props;
        getPage(numberPage,pageSize)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
    follow,
    unfollow,
    setTotalCount,
    getUser,
    getPage
})(UsersAPI)
export default UsersContainer;

