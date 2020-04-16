import React from 'react'
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {addToList} from "../../actions/favourite"


import Favourite from "../../pages/Favourite"

const mapStateToProps = (state) => ({
    favourite:state.favourite
});


const mapDispathToProps = dispath =>
bindActionCreators(
  {
    addToList
  },
  dispath
);


export default compose(
    withRouter,
    connect( mapStateToProps,mapDispathToProps)
    )(Favourite)