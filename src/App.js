import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initialized} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import cn from "classnames";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

function App(props) {

    const [editMode, setEditMode] = useState(false);

    const toggleMobileView = () => {
        setEditMode(!editMode);
    }

    useEffect(() => {
        props.initialized();
    });

    if (!props.initialize) {
        return <Preloader/>
    }
    return (
        <div className={classes.appWrapper}>
            <HeaderContainer  toggleMobileView={toggleMobileView}/>
            <div className={classes.main}>
                <NavbarContainer editMode={editMode}/>
                <div className={cn(classes.appWrapperContent, {[classes.active]:editMode})}>
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path='/'><Redirect to='/profile'/></Route>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/friends' render={() => <FriendsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='*' render={() => <div> 404 NOT FOUND</div>}/>
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialized})
)(App);
