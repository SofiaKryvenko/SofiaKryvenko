import React from 'react';
import { Link } from 'react-router-dom';




const renderSuggestion = (
  suggestion,
) => {
  const { title} = suggestion;
  return (
<p className="result">
                    <Link className="link" to={`/movie/${suggestion.id}`}>
                         <span >{title}</span>
                     </Link>
                          </p>
  );
};

export default renderSuggestion;