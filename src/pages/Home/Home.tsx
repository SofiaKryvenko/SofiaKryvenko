import React from 'react' 
import {propOr} from "ramda"

import Grid from '@material-ui/core/Grid';
import SearchBox from "../../components/SearchBox"
import CardItem from "../../components/CardItem"
import PaginationDisplay from "../../components/Pagination"




class Home extends React.Component{

    constructor(props){
        super(props)

        this.onHandlePageChange = this.onHandlePageChange.bind(this);
    }

componentDidMount(){
    const {match} = this.props
    const page = propOr(1,match.params)
    this.props.fetchMovies({page:page})
}

onHandlePageChange(page){
    this.props.fetchMovies({page:page})
    window.scrollTo(0,0)
    this.props.history.push(`/home/${page}`);
}

    render(){
        const {movies,match} = this.props;

        console.log("currentPage",match)
        return(
            <Grid container className="container" justify="center">            
                <SearchBox/>

                <Grid container justify="space-between" className="mt-30">
                    {(movies.movies||[]).map(movie=>(<CardItem key={movie.id}
                    info={movie}
                />))}
                    </Grid>  
                    <PaginationDisplay count={movies.totalCountPage} changePage={this.onHandlePageChange}/>
            </Grid>
        
        )
    }
}



export default Home;