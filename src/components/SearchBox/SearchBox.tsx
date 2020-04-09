import React from "react"
import { Link } from 'react-router-dom';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {API_KEY,API_URL} from "../../constants/configsKey"
import "./searchBox.scss"


class SearchBox extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      results: [],
      showResults: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    if (
      !event.relatedTarget ||
      !event.relatedTarget.className.toLowerCase().includes('search')
    ) {
      this.hideResults();
    }
  }

  hideResults() {
    setTimeout(() => this.setState({ showResults: false }), 100);
  }


  handleInputChange(e) {
    const value= e.target.value;
    this.setState({ term:value  },()=>this.handleSearch(value));
  }

  handleSearch(query){
    if(!query || query.length < 2) return;
    const url = `${API_URL}/search/movie${API_KEY}&query=${query}`;
     fetch(url).then(response => response.json()).then(data=> this.setState({ results: data.results, showResults: true }))
  }


  render(){

    return (
       <Grid container justify="center" className="relative search" onBlur={this.handleOnBlur}
       onClick={this.hideResults}>
         <Paper className="paper">
        <InputBase
            value={this.state.term}
            className="input"
            placeholder="Search movie..."
            onChange={this.handleInputChange}
       />
      <IconButton type="submit"aria-label="search">
        <SearchIcon />
      </IconButton>
        </Paper>
              {this.state.showResults && <ul className="searchResults"  >{(this.state.results||[]).slice(0, 10)
              .map(result=><li className="result"  key={result.id}>
                    <Link className="link" to={`/movie/${result.id}`}>
                        <span >{result.title}</span>
                    </Link>
                          </li>)}
                      </ul>}        
          </Grid>)
  }
    
}

export default SearchBox;