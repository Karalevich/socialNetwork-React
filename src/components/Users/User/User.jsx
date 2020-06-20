import React from 'react';
import classes from './User.module.css';
import userFhoto from '../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png'
import {NavLink} from "react-router-dom";

class User extends React.Component {

    render = () => {
        return (
            <div className={classes.user}>
                <div className={classes.photo}>
                    <NavLink to={`/profile/` + this.props.state.id}>
                        <div className={classes.avatar}>
                            <img
                                src={this.props.state.photos.small != null ? this.props.state.photos.small : userFhoto}></img>
                        </div>
                    </NavLink>
                    <div className={classes.button}>
                        {this.props.state.followed
                            ? <button disabled={this.props.followingInProgress.some(id => id===this.props.state.id)}
                                      onClick={() => {this.props.unfollowMC(this.props.state.id)}}>Unfollow</button>
                            : <button disabled={this.props.followingInProgress.some(id => id===this.props.state.id)}
                                      onClick={() => {this.props.followMC(this.props.state.id)}}>Follow</button>
                        }
                    </div>
                </div>
                <div className={classes.name}>
                    <div>{this.props.state.name}</div>
                </div>
            </div>

        )
    }
}

export default User;