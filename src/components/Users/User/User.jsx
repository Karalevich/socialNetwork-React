import React from 'react';
import classes from './User.module.css';
import userFhoto from '../../../AddFile/IMG/Programmyi-dlya-sozdaniya-avatarok.png'
import {NavLink} from "react-router-dom";

const User = ({state, followingInProgress, unfollow, follow}) => {
        return (
            <div className={classes.user}>
                <div className={classes.photo}>
                    <NavLink to={`/profile/` + state.id}>
                        <div className={classes.avatar}>
                            <img
                                src={state.photos.small !== null ? state.photos.small : userFhoto}></img>
                        </div>
                    </NavLink>
                    <div className={classes.button}>
                        {state.followed
                            ? <button disabled={followingInProgress.some(id => id===state.id)}
                                      onClick={() => {unfollow(state.id)}}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id===state.id)}
                                      onClick={() => {follow(state.id)}}>Follow</button>
                        }
                    </div>
                </div>
                <div className={classes.name}>
                    <div>{state.name}</div>
                </div>
            </div>

        )
}

export default User;