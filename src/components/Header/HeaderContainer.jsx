import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";

class HeaderAPI extends React.Component {

    render = () => {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        login: state.authUser.login
    }
}


const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPI)
export default HeaderContainer;