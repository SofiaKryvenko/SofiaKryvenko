import React from 'react';
import { propOr } from 'ramda';
import Autosuggest, {
  ChangeEvent,
  GetSuggestionValue,
  InputProps,
  OnSuggestionsClearRequested,
  RenderSuggestion,
  SuggestionsFetchRequested
} from 'react-autosuggest';

import renderSuggestion from './renderSuggestion';
import {API_KEY,API_URL} from "../../constants/configsKey"
import "./searchBox.scss"

interface State {
  value: string;
  suggestions:[];
}

const getSuggestionValue = propOr('', 'title');

class SearchBox extends React.PureComponent< State> {
  readonly state: State = {
    value: '',
    suggestions: []
  };

  

  onSuggestionFetchRequested: SuggestionsFetchRequested = async ({ value }) => {
      const url = `${API_URL}/search/movie${API_KEY}&query=${value}`;
      fetch(url).then(response => response.json()).then(data=> this.setState({  suggestions: data.results.slice(0, 5) }))

  };

  onSuggestionsClearRequested: OnSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onChange = (event: React.FormEvent<HTMLInputElement>, params: ChangeEvent): void => {
    this.setState({ value: params.newValue });
  };

  getInputProps = ()=> ({
    placeholder: 'Search by title',
    value: this.state.value,
    onChange: this.onChange
  });

  renderSuggestion = (suggestion, onSuggestionSelected) =>
    renderSuggestion(suggestion, onSuggestionSelected);

  render() {
    return (
        <div className="searchResults mb-30">
            <Autosuggest
          suggestions={this.state.suggestions}
          getSuggestionValue={getSuggestionValue}
          inputProps={this.getInputProps()}
          onSuggestionsFetchRequested={this.onSuggestionFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.props.onSuggestionSelected}
        />
        </div>
        
    );
  }
}

export default SearchBox;

