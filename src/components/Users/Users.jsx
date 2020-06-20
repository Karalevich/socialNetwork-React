import React from 'react';
import classes from "./Users.module.css";
import User from "./User/User";


const Users = (props) => {
    let userElement = props.users.map(user => <User state={user}
                                                    followMC={props.followMC}
                                                    unfollowMC={props.unfollowMC}
                                                    followingInProgress={props.followingInProgress}/>);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pageNumberElement = pages.map(page => {
        return <button className={props.currentPage === page && classes.selectedPage}
                     onClick={() => {
                         props.onPageChange(page)
                     }}>{page}</button>
    });

    return (
        <div className={classes.usersBlock}>
            <h3>Users</h3>
            <div className={classes.pageNumber}>
                {pageNumberElement}
            </div>
            <div className={classes.users}>
                {userElement}
            </div>
            <div className={classes.button}>
                <button onClick={props.addNewUsers}>Show more</button>
            </div>
        </div>
    )

}

export default Users;