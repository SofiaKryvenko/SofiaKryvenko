import React from 'react' 

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
    this.props.fetchMovies({page:1})
}

onHandlePageChange(page){
    this.props.fetchMovies({page:page})
    window.scrollTo(0,0)
}

    render(){
        const {movies} = this.props;

        console.log("currentPage",movies)
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