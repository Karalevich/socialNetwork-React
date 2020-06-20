import React from 'react';
import {connect} from "react-redux";
import Music from "../Music/Music";


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        }
    }

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Music)
export default FriendsContainer;