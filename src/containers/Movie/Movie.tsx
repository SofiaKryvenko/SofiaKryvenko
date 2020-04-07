import React from 'react'
import {compose} from "ramda";
import {  withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {fetchMovie,fetchCredits,resetMovieData} from "../../actions/movies"


import Movie from "../../pages/Movie"

const mapStateToProps = (state) => ({
  movie:state.movieInfo.movie,
  loading:state.movieInfo.loading,
  cast:state.movieInfo.cast
});


const mapDispathToProps = dispath =>
bindActionCreators(
  {
    fetchMovie,
    fetchCredits,
    resetMovieData
  },
  dispath
);


export default compose(
    withRouter,
    connect( mapStateToProps,mapDispathToProps)
    )(Movie)