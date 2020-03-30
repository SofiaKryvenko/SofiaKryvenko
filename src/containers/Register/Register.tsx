import React from 'react'
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {userSignup} from "../../actions/user"


import Register from "../../pages/Register"

const mapStateToProps = () => ({
	
});


const mapDispathToProps = dispath =>
bindActionCreators(
  {
    userSignup
  },
  dispath
);


export default compose(
    withRouter,
    connect( mapStateToProps,mapDispathToProps)
    )(Register)