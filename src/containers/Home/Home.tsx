import React from "react"
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {fetchMovies} from "../../actions/movies"

import Home from "../../pages/Home"

const mapStateToProps = (state) => ({
    user:state.user,
    movies:state.movies,
    // moviesList:state.movies.movies,
    // pagesCount:state.movies.movies.pagesCount
});


const mapDispathToProps = dispath =>
bindActionCreators(
  {
    fetchMovies
  },
  dispath
);


export default compose(
    withRouter,
    connect( mapStateToProps,mapDispathToProps)
    )(Home)