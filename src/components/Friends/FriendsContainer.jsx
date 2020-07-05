import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        }
    }

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)
export default FriendsContainer;