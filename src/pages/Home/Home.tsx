import React from 'react' 


import SearchBox from "../../components/SearchBox"
import MovieList from "../../components/MovieList"
import PaginationDisplay from "../../components/Pagination"
import {   Grid } from '@material-ui/core';



class Home extends React.Component{

    constructor(props){
        super(props)

        this.onHandlePageChange = this.onHandlePageChange.bind(this);
        // this.onGenreClick = this.onGenreClick.bind(this);
    }

componentDidMount(){
    const page = this.props.match.params.page || 1;
    this.props.fetchMovies({page})
}

onHandlePageChange(page){
    window.scrollTo(0,0)
    this.props.fetchMovies({page})   
    this.props.history.push(`/${page}`);
}

// onGenreClick (genreId){
//     const page = propOr(1,'page',this.props.match.params)
//     this.props.fetchMovies({page:page,with_genres:genreId})
// }

    render(){
        const {movies} = this.props;
        return(
            <Grid container className="container" justify="center"> 
                {/* <GenresBox onHandleClick={this.onGenreClick}/>            */}
                <SearchBox/>
                <MovieList movies={movies.movies} title="Popular"/>
                <PaginationDisplay count={movies.totalCountPage} page={movies.currentPage} changePage={this.onHandlePageChange}/>
            </Grid>
        
        )
    }
}



export default Home;