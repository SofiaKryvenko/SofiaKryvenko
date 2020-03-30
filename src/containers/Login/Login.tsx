import React from "react"
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {userLogin} from "../../actions/user"

import Login from "../../pages/Login"

const mapStateToProps = (state) => ({
    user:state.user
});


const mapDispathToProps = dispath =>
bindActionCreators(
  {
    userLogin
  },
  dispath
);


export default compose(
    withRouter,
    connect( mapStateToProps,mapDispathToProps)
    )(Login)