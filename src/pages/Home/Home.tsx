import React from 'react' 
import {propOr} from "ramda"

import Grid from '@material-ui/core/Grid';
import SearchBox from "../../components/SearchBox"
import CardItem from "../../components/CardItem"
import PaginationDisplay from "../../components/Pagination"
import GenresBox from "../../components/GenresBox"




class Home extends React.Component{

    constructor(props){
        super(props)

        this.onHandlePageChange = this.onHandlePageChange.bind(this);
        this.onGenreClick = this.onGenreClick.bind(this);
    }

componentDidMount(){
    const page = this.props.match.params.page || 1;
    this.props.fetchMovies({page})
}

onHandlePageChange(page){
    this.props.fetchMovies({page})
    window.scrollTo(0,0)
    this.props.history.push(`/${page}`);
}

onGenreClick (genreId){
    console.log("000000000",genreId)
    const page = propOr(1,'page',this.props.match.params)
    this.props.fetchMovies({page:page,with_genres:genreId})
}

    render(){
        const {movies,match} = this.props;
        return(
            <Grid container className="container" justify="center"> 
                <GenresBox onHandleClick={this.onGenreClick}/>           
                <SearchBox/>

                <Grid container justify="space-between" className="mt-30">
                    {(movies.movies||[]).map(movie=>(<CardItem key={movie.id}
                    info={movie}
                />))}
                    </Grid>  
                    <PaginationDisplay count={movies.totalCountPage} page={movies.currentPage} changePage={this.onHandlePageChange}/>
            </Grid>
        
        )
    }
}



export default Home;