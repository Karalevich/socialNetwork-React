import React from 'react';
import classes from "./Users.module.css";
import User from "./User/User";
import Paginator from "../Common/Paginator/Paginator";


const Users = ({users, follow, unfollow, followingInProgress, addNewUsers, totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let userElement = users.map(user => <User state={user}
                                              follow={follow}
                                              unfollow={unfollow}
                                              followingInProgress={followingInProgress}/>);

    return (
        <div className={classes.usersBlock}>
            <h3>Users</h3>
            <div className={classes.pageNumber}>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>
            </div>
            <div className={classes.users}>
                {userElement}
            </div>
            <div className={classes.button}>
                <button onClick={addNewUsers}>Show more</button>
            </div>
        </div>
    )

}

export default Users;