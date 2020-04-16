import React from 'react';

export const renderGenres = (genres) => {
    const genreNames = genres.map(genre => genre.name);
    return genreNames.join(', ');
  };
  
  const compileCountriesIntoString = (countries) => {
    const countryNames = countries.map(country => country.name);
    return countryNames.join(', ');
  };
  
  export const renderCountries = (countries) => {
    if (countries.length === 1) {
      return <span><b>Countries:</b> {countries[0].name}</span>
    } else {
      return (
          <span><b>Countries:</b> {compileCountriesIntoString(countries)}</span>
      );
    }
  };

  export const formatMoney = (money) => {
    if (money !== 0) {
      return `$${money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
    }
    return 'N/A'
  };
  
  export const formatDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.toLocaleDateString();
  };

  export const formatUserData = (user, favoriteMovies) => {
    const { uid, displayName } = user;
  
    return {
      isLoggedIn: true,
      userId: uid,
      displayName,
      favoriteMovies
    };
  };