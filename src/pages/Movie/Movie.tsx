import React from "react"

import {
    Paper,
    Container,
    IconButton 
  } from '@material-ui/core';
  import ReplyIcon from '@material-ui/icons/Reply';
  import './MovieDetailsPage.scss';

  import MovieCast from "./MovieCast"
  import {renderGenres, renderCountries, formatMoney, formatDate} from '../../helpers';

class Movie extends React.Component{
    constructor(props) {
        super(props);
      }

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.fetchMovie(movieId)
        this.props.fetchCredits(movieId)
    }
    
    componentWillUnmount(){
      this.props.resetMovieData()
    }

    render(){
        const {movie,history}=this.props;

    return movie && movie.title ? (
      <Container  fixed>
          <IconButton color="primary" onClick={()=>history.goBack()}>
            <ReplyIcon/>
          </IconButton>
        <div className="MovieDetails mb-30">
          <div className="MovieDetails__image-container">
                  <Paper  className="MovieDetails__image-Paper">
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                         alt={movie.original_title}
                         className="MovieDetails__image"/>
                    </Paper>                  
          </div>
          <div className="MovieDetails__info-container">
            <div className="info__title-container">
              <h1 className="MovieDetails__title">{movie.original_title} <small>({
                new Date(movie.release_date).getFullYear()
              })</small></h1>
              <div className="MovieDetails__genres">{renderGenres(movie.genres)}</div>
              { movie.tagline && <p className="MovieDetails__tagline"><b>Tagline:</b> {movie.tagline}</p> }
              { movie.production_countries.length && <p className="MovieDetails__countries">{
                renderCountries(movie.production_countries)
              }</p> }
            </div>
            <div className="MovieDetails__short-info">
              <div className="info__item info__rating"><b>Rating:</b> {movie.vote_average}</div>
              <div className="info__item info__status"><b>Status:</b> {movie.status}</div>
              <div className="info__item info__budget"><b>Budget:</b> {formatMoney(movie.budget)}</div>
              <div className="info__item info__release_date"><b>Release date:</b> {formatDate(movie.release_date)}</div>
              <div className="info__item info__revenue"><b>Revenue:</b> {formatMoney(movie.revenue)}</div>
              <div className="info__item info__runtime"><b>Duration:</b> {movie.runtime} min.</div>
            </div>
            <div className="MovieDetails__overview">
              <h4 className="overview__title">Overview:</h4>
              <div className="overview__content">{movie.overview}</div>
            </div>
            <MovieCast cast={this.props.cast}/>
          </div>
  
        </div>
        </Container>
  ):"Loaging..."
}}

export default Movie